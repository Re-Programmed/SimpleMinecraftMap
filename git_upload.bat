ECHO OFF
git add .
set /p s="Enter commit name: "
git commit -m "%s%"

git push -u origin main