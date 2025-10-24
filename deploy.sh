#!/bin/bash

# Portfolio Deployment Script
echo "🚀 Portfolio Deployment Script"
echo "=============================="

# Check if we're in the right directory
if [ ! -f "package.json" ]; then
    echo "❌ Error: Please run this script from the project root directory"
    exit 1
fi

echo "📋 Deployment Options:"
echo "1. Deploy Backend to Vercel"
echo "2. Deploy Frontend to Vercel"
echo "3. Deploy Both"
echo "4. Test Locally"
echo "5. Exit"

read -p "Choose an option (1-5): " choice

case $choice in
    1)
        echo "🔧 Deploying Backend to Vercel..."
        cd backend
        echo "📦 Installing dependencies..."
        npm install
        echo "🧪 Testing backend locally..."
        npm start &
        BACKEND_PID=$!
        sleep 5
        echo "🔍 Testing API..."
        curl -X GET http://localhost:3000/api/health
        kill $BACKEND_PID
        echo "✅ Backend ready for deployment!"
        echo "📝 Next steps:"
        echo "1. Push to GitHub: git add backend/ && git commit -m 'Deploy backend' && git push"
        echo "2. Go to Vercel dashboard"
        echo "3. Import your repository"
        echo "4. Set root directory to 'backend'"
        echo "5. Add environment variables"
        ;;
    2)
        echo "🎨 Deploying Frontend..."
        echo "📦 Building frontend..."
        npm run build
        echo "✅ Frontend built successfully!"
        echo "📝 Next steps:"
        echo "1. Update backend URL in Contact.jsx"
        echo "2. Deploy to your hosting platform"
        ;;
    3)
        echo "🚀 Deploying Both Backend and Frontend..."
        echo "📦 Installing dependencies..."
        npm install
        cd backend && npm install && cd ..
        echo "🧪 Testing backend..."
        cd backend && npm start &
        BACKEND_PID=$!
        sleep 5
        curl -X GET http://localhost:3000/api/health
        kill $BACKEND_PID
        cd ..
        echo "📦 Building frontend..."
        npm run build
        echo "✅ Both backend and frontend are ready!"
        ;;
    4)
        echo "🧪 Testing Locally..."
        echo "Starting backend..."
        cd backend && npm start &
        BACKEND_PID=$!
        sleep 3
        echo "Backend running on http://localhost:3000"
        echo "Starting frontend..."
        npm run dev &
        FRONTEND_PID=$!
        echo "Frontend running on http://localhost:5173"
        echo "Press Ctrl+C to stop both servers"
        wait
        ;;
    5)
        echo "👋 Goodbye!"
        exit 0
        ;;
    *)
        echo "❌ Invalid option. Please choose 1-5."
        ;;
esac
