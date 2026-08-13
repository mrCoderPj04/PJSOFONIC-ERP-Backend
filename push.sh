#!/usr/bin/env bash
set -e

echo "🚀 Pushing PJSOFONIC ERP Backend..."
git init
git remote remove origin 2>/dev/null || true
git remote add origin https://github.com/mrCoderPj04/PJSOFONIC-ERP-Backend.git
git add .
git commit -m "feat: complete PJSOFONIC ERP Express backend API server with Render blueprint & gitignore" || true
git branch -M main
git push -u origin main --force
echo "✅ Backend pushed to https://github.com/mrCoderPj04/PJSOFONIC-ERP-Backend.git"
