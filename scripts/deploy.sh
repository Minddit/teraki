#!/bin/bash

# Verifică dacă avem un mesaj de commit
if [ -z "$1" ]; then
    echo "Usage: ./deploy.sh \"commit message\""
    echo "Example: ./deploy.sh \"fix: update email confirmation\""
    exit 1
fi

# Salvează mesajul de commit
COMMIT_MSG="$1"

echo "🚀 Starting deployment process..."

# 1. Git add
echo "1. Adding files to git..."
git add .

# 2. Git commit
echo "2. Committing changes..."
git commit -m "$COMMIT_MSG"

# 3. Git push
echo "3. Pushing to GitHub..."
git push

# 4. Vercel deploy
echo "4. Deploying to Vercel..."
vercel --prod

echo "✅ Deployment complete!"
echo "🌍 Visit: https://teraki.vercel.app"
