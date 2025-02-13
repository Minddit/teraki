#!/bin/bash

# Configurare
BACKUP_VERSION=$1
if [ -z "$BACKUP_VERSION" ]; then
    echo "Usage: ./backup.sh <version>"
    echo "Example: ./backup.sh v2.4"
    exit 1
fi

# Asigurăm-ne că suntem în directorul principal al proiectului
cd "$(dirname "$0")"/..  # mergem un nivel mai sus din /scripts

# Definim directorul de backup în partiția Untitled
BACKUP_BASE="/Volumes/Untitled/BACKUP CRYPTO RECOVER/teraki"
BACKUP_DIR="$BACKUP_BASE/backup-$BACKUP_VERSION"

# Creăm directorul de backup dacă nu există
mkdir -p "$BACKUP_BASE"
mkdir -p $BACKUP_DIR

echo "Starting backup process for version $BACKUP_VERSION..."

# 1. Backup cod sursă
echo "1. Backing up source code..."
git archive --format=zip HEAD -o "$BACKUP_DIR/code-backup-$BACKUP_VERSION.zip"

# 2. Backup configurări
echo "2. Backing up configuration files..."
cp .env "$BACKUP_DIR/.env.backup"
cp next.config.js "$BACKUP_DIR/next.config.js.backup"
cp package.json "$BACKUP_DIR/package.json.backup"

# 3. Backup bază de date
echo "3. Backing up database structure..."
cat > "$BACKUP_DIR/database_structure.sql" << 'EOL'
-- PostgreSQL database dump
-- Dumped by backup script

-- Table structure
CREATE TABLE IF NOT EXISTS public.users (
    id UUID PRIMARY KEY,
    email VARCHAR(255) NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    email_confirmed BOOLEAN DEFAULT FALSE,
    confirmation_token VARCHAR(255),
    confirmation_sent_at TIMESTAMP WITH TIME ZONE
);

-- Indexes
CREATE INDEX IF NOT EXISTS idx_users_confirmation_token ON public.users(confirmation_token);
CREATE INDEX IF NOT EXISTS idx_users_email_confirmed ON public.users(email_confirmed);

-- Enable Row Level Security
ALTER TABLE public.users ENABLE ROW LEVEL SECURITY;

-- RLS Policies
CREATE POLICY "Users can view their own confirmation status" 
    ON public.users
    FOR SELECT 
    USING ((auth.uid() = id));

CREATE POLICY "System can update confirmation status" 
    ON public.users
    FOR UPDATE 
    USING ((auth.uid() = id));
EOL

# 4. Export date din baza de date
echo "4. Exporting database data..."
PGPASSWORD="nZTo3rKpjzGyBuJj" psql "postgres://postgres.jbhszhqxmsecowpghnka@aws-0-eu-central-1.pooler.supabase.com:5432/postgres" \
    -c "\copy (SELECT json_agg(u) FROM users u) TO '$BACKUP_DIR/data.json';"

# 5. Creare fișier cu informații despre versiune
echo "5. Creating version info..."
echo "Backup $BACKUP_VERSION - $(date)" > "$BACKUP_DIR/version-info.txt"
git log -1 >> "$BACKUP_DIR/version-info.txt"

# 6. Creare README pentru backup
echo "6. Creating backup documentation..."
cat > "$BACKUP_DIR/README.md" << EOL
# Backup $BACKUP_VERSION

Acest backup conține:
1. \`code-backup-$BACKUP_VERSION.zip\` - Codul sursă
2. \`.env.backup\` - Variabile de mediu
3. \`next.config.js.backup\` - Configurare Next.js
4. \`package.json.backup\` - Dependințe
5. \`database_structure.sql\` - Structura bazei de date
6. \`data.json\` - Datele din baza de date
7. \`version-info.txt\` - Informații despre versiune

## Restaurare
1. Unzip \`code-backup-$BACKUP_VERSION.zip\`
2. Copiați fișierele de configurare
3. Rulați \`database_structure.sql\` pentru a recrea structura DB
4. Importați \`data.json\` în baza de date
EOL

echo "Backup completed successfully!"
echo "Backup files are in: $BACKUP_DIR"
