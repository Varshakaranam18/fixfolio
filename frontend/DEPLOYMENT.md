# Deploying Fixfolio on Vercel

## Prerequisites

1. **Backend Deployment**: First, deploy your Spring Boot backend to a cloud platform like:
   - Railway
   - Render
   - Heroku
   - AWS
   - Google Cloud Platform

2. **Vercel Account**: Sign up at [vercel.com](https://vercel.com)

## Deployment Steps

### 1. Deploy Backend First

Deploy your Spring Boot backend and note the production URL (e.g., `https://your-app.railway.app`)

### 2. Deploy Frontend to Vercel

#### Option A: Using Vercel CLI

1. Install Vercel CLI:
   ```bash
   npm i -g vercel
   ```

2. Navigate to the frontend directory:
   ```bash
   cd fixfolio/frontend
   ```

3. Deploy:
   ```bash
   vercel
   ```

4. When prompted, set environment variables:
   - `VITE_API_URL`: Your backend URL + `/api/notes` (e.g., `https://your-app.railway.app/api/notes`)
   - `VITE_AUTH_URL`: Your backend URL + `/api/auth` (e.g., `https://your-app.railway.app/api/auth`)

#### Option B: Using Vercel Dashboard

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com) and create a new project
3. Import your repository
4. Set the root directory to `fixfolio/frontend`
5. Add environment variables in the Vercel dashboard:
   - `VITE_API_URL`: Your backend URL + `/api/notes`
   - `VITE_AUTH_URL`: Your backend URL + `/api/auth`

### 3. Environment Variables

Set these in your Vercel project settings:

```
VITE_API_URL=https://your-backend-url.com/api/notes
VITE_AUTH_URL=https://your-backend-url.com/api/auth
```

**To add these in Vercel Dashboard:**
1. Go to your project in Vercel dashboard
2. Click on "Settings" tab
3. Go to "Environment Variables" section
4. Add each variable:
   - Name: `VITE_API_URL`, Value: `https://your-backend-url.com/api/notes`
   - Name: `VITE_AUTH_URL`, Value: `https://your-backend-url.com/api/auth`
5. Select "Production" environment
6. Click "Save"

### 4. CORS Configuration

Ensure your backend's CORS configuration allows requests from your Vercel domain:

```java
// In your CorsConfig.java
.allowedOrigins("https://your-app.vercel.app")
```

## Troubleshooting

- **Build Errors**: Check that all dependencies are in `package.json`
- **API Errors**: Verify environment variables are set correctly
- **CORS Errors**: Update backend CORS configuration with your Vercel domain
- **Routing Issues**: The `vercel.json` file handles client-side routing

## Post-Deployment

1. Test all features (login, signup, CRUD operations)
2. Update any hardcoded URLs in your code
3. Monitor your application logs in Vercel dashboard 