#!/bin/bash

# Creare director pentru backup
BACKUP_DIR="backup-v2.4"
mkdir -p $BACKUP_DIR

# Backup cod sursă
echo "Backing up source code..."
git archive --format=zip HEAD -o "$BACKUP_DIR/code-backup-v2.4.zip"

# Copiere fișiere de configurare
echo "Backing up configuration files..."
cp .env "$BACKUP_DIR/.env.backup"
cp next.config.js "$BACKUP_DIR/next.config.js.backup"
cp package.json "$BACKUP_DIR/package.json.backup"

# Creare fișier cu informații despre versiune
echo "Creating version info..."
echo "Backup v2.4 - $(date)" > "$BACKUP_DIR/version-info.txt"
git log -1 >> "$BACKUP_DIR/version-info.txt"

# Instrucțiuni pentru backup bază de date
echo "Database Backup Instructions:" > "$BACKUP_DIR/database-backup-instructions.txt"
echo "1. Access Supabase Dashboard" >> "$BACKUP_DIR/database-backup-instructions.txt"
echo "2. Go to Project Settings > Database" >> "$BACKUP_DIR/database-backup-instructions.txt"
echo "3. Click 'Backup' and download the latest backup" >> "$BACKUP_DIR/database-backup-instructions.txt"
echo "4. Save the backup file in this directory" >> "$BACKUP_DIR/database-backup-instructions.txt"

echo "Backup completed! Please follow database-backup-instructions.txt to complete the database backup."
