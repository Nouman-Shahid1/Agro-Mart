# AgroMart Deployment Guide

## Option 1: Separate Deployments (Recommended)

### Backend Deployment (Railway/Render)
1. **Railway** (Free tier available):
   - Connect your GitHub repo
   - Select `backend` folder as root
   - Add environment variables:
     - `BREVO_API_KEY`
     - `BREVO_FROM_EMAIL` 
     - `BREVO_FROM_NAME`
   - Deploy automatically

2. **Render** (Alternative):
   - Create new Web Service
   - Connect GitHub repo
   - Root directory: `backend`
   - Build command: `go build -o main .`
   - Start command: `./main`

### Frontend Deployment (Vercel)
1. Deploy `web` folder to Vercel
2. Add environment variable:
   - `NEXT_PUBLIC_API_URL=https://your-backend-url.railway.app`

### Update Frontend API Calls
Update your axios config to use the deployed backend URL.

## Option 2: Monorepo on Vercel (Advanced)
Use the vercel.json configuration provided to deploy both together.

## Database Considerations
- For production, consider upgrading from SQLite to PostgreSQL
- Use services like Supabase, PlanetScale, or Railway PostgreSQL

## Environment Variables Setup
1. Backend (.env):
   ```
   BREVO_API_KEY=your_key
   BREVO_FROM_EMAIL=your_email
   BREVO_FROM_NAME=AgroMart
   ```

2. Frontend (.env.local):
   ```
   NEXT_PUBLIC_API_URL=https://your-backend-url
   ```