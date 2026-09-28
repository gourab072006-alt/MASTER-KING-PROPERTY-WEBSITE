@echo off
title Master Kings Property - Local Web Server
echo ===================================================================
echo  Master Kings Property - Local Web Server
echo ===================================================================
echo.
echo 1. Opening website in your default browser...
start http://localhost:8000
echo.
echo 2. Serving website at: http://localhost:8000
echo    Directory: %~dp0
echo.
echo  Keep this window OPEN while browsing the website.
echo  Press Ctrl+C to stop the server when done.
echo ===================================================================
echo.
python -m http.server 8000
pause
