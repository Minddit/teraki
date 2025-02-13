#!/bin/bash

# Export environment variables
export PGPASSWORD="nZTo3rKpjzGyBuJj"
export PGHOST="aws-0-eu-central-1.pooler.supabase.com"
export PGPORT="5432"
export PGUSER="postgres.jbhszhqxmsecowpghnka"
export PGDATABASE="postgres"

# Create backup
pg_dump --clean --if-exists --format=c --dbname=$PGDATABASE > "database-backup-v2.4.dump"

echo "Database backup completed!"
