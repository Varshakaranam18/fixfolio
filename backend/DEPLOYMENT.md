# Deploying Fixfolio Backend to Railway

## Prerequisites

1. **Railway Account**: Sign up at [railway.app](https://railway.app)
2. **MongoDB Database**: You'll need a MongoDB database (Railway provides this)
3. **GitHub Repository**: Push your code to GitHub

## Deployment Steps

### 1. Prepare Your Repository

Make sure your backend code is pushed to GitHub with these files:
- `railway.json` - Railway configuration
- `nixpacks.toml` - Build configuration
- `application-prod.properties` - Production settings

### 2. Deploy to Railway

#### Option A: Using Railway CLI

1. Install Railway CLI:
   ```bash
   npm install -g @railway/cli
   ```

2. Navigate to backend directory:
   ```bash
   cd fixfolio/backend
   ```

3. Login to Railway:
   ```bash
   railway login
   ```

4. Initialize and deploy:
   ```bash
   railway init
   railway up
   ```

#### Option B: Using Railway Dashboard

1. Go to [railway.app](https://railway.app)
2. Click "New Project"
3. Select "Deploy from GitHub repo"
4. Choose your repository
5. Set the root directory to `fixfolio/backend`

### 3. Set Environment Variables

In your Railway project dashboard, add these environment variables:

```
MONGODB_URI=mongodb://your-mongodb-connection-string
JWT_SECRET=your-super-secret-jwt-key-change-this
JWT_EXPIRATION=86400000
PORT=8080
```

### 4. Add MongoDB Database

1. In Railway dashboard, click "New"
2. Select "Database" → "MongoDB"
3. Copy the connection string
4. Set it as `MONGODB_URI` environment variable

### 5. Get Your Backend URL

After deployment, Railway will provide a URL like:
`https://your-app-name.railway.app`

## Testing Your Backend

1. Test the health check: `https://your-app-name.railway.app/api/notes`
2. Test authentication: `https://your-app-name.railway.app/api/auth/signup`

## Update Frontend Environment Variables

Once deployed, update your frontend environment variables in Vercel:

```
VITE_API_URL=https://your-app-name.railway.app/api/notes
VITE_AUTH_URL=https://your-app-name.railway.app/api/auth
```

## Troubleshooting

- **Build Errors**: Check that Java 17 and Maven are properly configured
- **Database Connection**: Verify MongoDB URI is correct
- **CORS Issues**: Ensure CORS configuration allows your Vercel domain
- **Port Issues**: Railway automatically sets the PORT environment variable

## Security Notes

- Change the JWT_SECRET to a strong, random string
- Use environment variables for all sensitive configuration
- Enable HTTPS in production 