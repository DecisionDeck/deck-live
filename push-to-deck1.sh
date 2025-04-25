#!/bin/bash
cd "$(dirname "$0")"
git init
git branch -M main
git remote add origin git@github.com:markshannon/deck1.git
git add .
git commit -m "Final commit"
git push -u origin main --force