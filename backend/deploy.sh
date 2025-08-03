#!/bin/bash

echo "🚀 Deploying Fixfolio Backend to Railway..."

# Check if Railway CLI is installed
if ! command -v railway &> /dev/null; then
    echo "❌ Railway CLI not found. Installing..."
    npm install -g @railway/cli
fi

# Check if we're in the right directory
if [ ! -f "pom.xml" ]; then
    echo "❌ Please run this script from the backend directory"
    exit 1
fi

# Check if user is logged in to Railway
if ! railway whoami &> /dev/null; then
    echo "🔐 Please login to Railway first:"
    railway login
fi

# Build the project
echo "🔨 Building project..."
mvn clean package -DskipTests

# Deploy to Railway
echo "🚀 Deploying to Railway..."
railway up

echo "✅ Deployment complete!"
echo "📝 Next steps:"
echo "   1. Set environment variables in Railway dashboard"
echo "   2. Add MongoDB database in Railway"
echo "   3. Get your backend URL and update frontend environment variables"
echo "   4. Deploy frontend to Vercel" 