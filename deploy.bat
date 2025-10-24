@echo off
echo 🚀 Portfolio Deployment Script
echo ==============================

REM Check if we're in the right directory
if not exist "package.json" (
    echo ❌ Error: Please run this script from the project root directory
    pause
    exit /b 1
)

echo 📋 Deployment Options:
echo 1. Deploy Backend to Vercel
echo 2. Deploy Frontend to Vercel
echo 3. Deploy Both
echo 4. Test Locally
echo 5. Exit

set /p choice="Choose an option (1-5): "

if "%choice%"=="1" (
    echo 🔧 Deploying Backend to Vercel...
    cd backend
    echo 📦 Installing dependencies...
    npm install
    echo 🧪 Testing backend locally...
    start /b npm start
    timeout /t 5 /nobreak >nul
    echo 🔍 Testing API...
    curl -X GET http://localhost:3000/api/health
    echo ✅ Backend ready for deployment!
    echo 📝 Next steps:
    echo 1. Push to GitHub: git add backend/ ^&^& git commit -m "Deploy backend" ^&^& git push
    echo 2. Go to Vercel dashboard
    echo 3. Import your repository
    echo 4. Set root directory to 'backend'
    echo 5. Add environment variables
    cd ..
) else if "%choice%"=="2" (
    echo 🎨 Deploying Frontend...
    echo 📦 Building frontend...
    npm run build
    echo ✅ Frontend built successfully!
    echo 📝 Next steps:
    echo 1. Update backend URL in Contact.jsx
    echo 2. Deploy to your hosting platform
) else if "%choice%"=="3" (
    echo 🚀 Deploying Both Backend and Frontend...
    echo 📦 Installing dependencies...
    npm install
    cd backend
    npm install
    cd ..
    echo 🧪 Testing backend...
    cd backend
    start /b npm start
    timeout /t 5 /nobreak >nul
    curl -X GET http://localhost:3000/api/health
    cd ..
    echo 📦 Building frontend...
    npm run build
    echo ✅ Both backend and frontend are ready!
) else if "%choice%"=="4" (
    echo 🧪 Testing Locally...
    echo Starting backend...
    cd backend
    start /b npm start
    echo Backend running on http://localhost:3000
    cd ..
    echo Starting frontend...
    start /b npm run dev
    echo Frontend running on http://localhost:5173
    echo Press any key to stop both servers
    pause >nul
) else if "%choice%"=="5" (
    echo 👋 Goodbye!
    exit /b 0
) else (
    echo ❌ Invalid option. Please choose 1-5.
)

pause
