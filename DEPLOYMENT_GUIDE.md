# Portfolio Backend Deployment Guide

This guide will help you deploy your portfolio backend to Vercel and set up MongoDB Atlas.

## 🚀 Quick Setup

### Step 1: MongoDB Atlas Setup

1. **Create MongoDB Atlas Account**
   - Go to [MongoDB Atlas](https://www.mongodb.com/atlas)
   - Sign up for a free account
   - Choose the free tier (M0 Sandbox)

2. **Create a Cluster**
   - Click "Build a Database"
   - Choose "M0 Sandbox" (Free tier)
   - Select a region close to you
   - Name your cluster (e.g., "portfolio-cluster")

3. **Create Database User**
   - Go to "Database Access" in the left sidebar
   - Click "Add New Database User"
   - Choose "Password" authentication
   - Create a username and strong password
   - Give "Read and write to any database" privileges

4. **Get Connection String**
   - Go to "Database" in the left sidebar
   - Click "Connect" on your cluster
   - Choose "Connect your application"
   - Copy the connection string
   - Replace `<password>` with your database user password
   - Replace `<dbname>` with `portfolio`

### Step 2: Deploy Backend to Vercel

1. **Push Backend to GitHub**
   ```bash
   # In your project root
   git add backend/
   git commit -m "Add backend API for contact form"
   git push origin main
   ```

2. **Deploy to Vercel**
   - Go to [Vercel Dashboard](https://vercel.com/dashboard)
   - Click "New Project"
   - Import your GitHub repository
   - Set the **Root Directory** to `backend`
   - Click "Deploy"

3. **Add Environment Variables**
   - In Vercel dashboard, go to your project
   - Go to "Settings" → "Environment Variables"
   - Add these variables:
     ```
     MONGODB_URI=mongodb+srv://vtomar:Vikas%40123@cluster0.jzywyvf.mongodb.net/?retryWrites=true&w=majority
     MONGO_DB=portfolio
     FRONTEND_URL=https://your-portfolio-domain.vercel.app
     NODE_ENV=production
     ```

### Step 3: Update Frontend

1. **Update Backend URL**
   - Open `src/components/Contact.jsx`
   - Replace `https://your-backend-url.vercel.app` with your actual Vercel backend URL
   - The URL will be something like: `https://your-project-name.vercel.app`

2. **Redeploy Frontend**
   ```bash
   npm run build
   # Deploy to your hosting platform (Vercel, Netlify, etc.)
   ```

## 🔧 Local Development

### Backend Development

```bash
cd backend
npm install
npm run dev
```

### Frontend Development

```bash
# In project root
npm run dev
```

## 📝 Environment Variables

### Backend (.env)
```env
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/portfolio?retryWrites=true&w=majority
FRONTEND_URL=http://localhost:5173
PORT=3000
NODE_ENV=development
```

### Production (Vercel)
```
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/portfolio?retryWrites=true&w=majority
FRONTEND_URL=https://your-portfolio-domain.vercel.app
NODE_ENV=production
```

## 🧪 Testing

### Test Backend Locally
```bash
cd backend
npm start
```

Test the API:
```bash
curl -X POST http://localhost:3000/api/contact \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Test User",
    "email": "test@example.com",
    "subject": "Test Subject",
    "message": "Test message"
  }'
```

### Test Health Endpoint
```bash
curl http://localhost:3000/api/health
```

## 🔒 Security Features

- ✅ Rate limiting (100 requests per 15 minutes)
- ✅ Input validation and sanitization
- ✅ CORS protection
- ✅ Helmet security headers
- ✅ IP address logging
- ✅ Error handling

## 📊 Monitoring

### View Messages in MongoDB Atlas
1. Go to your MongoDB Atlas dashboard
2. Click "Browse Collections"
3. Select your database
4. View the "messages" collection

### Vercel Analytics
- Check Vercel dashboard for deployment logs
- Monitor API usage in Vercel Analytics

## 🚨 Troubleshooting

### Common Issues

1. **CORS Errors**
   - Make sure `FRONTEND_URL` is set correctly in Vercel
   - Check that your frontend URL matches exactly

2. **MongoDB Connection Issues**
   - Verify your connection string is correct
   - Check that your IP is whitelisted in MongoDB Atlas
   - Ensure database user has correct permissions

3. **Environment Variables**
   - Make sure all required variables are set in Vercel
   - Check that variable names match exactly

### Debug Steps

1. Check Vercel function logs
2. Test API endpoints directly
3. Verify MongoDB connection
4. Check environment variables

## 📞 Support

If you encounter issues:
1. Check the Vercel deployment logs
2. Verify MongoDB Atlas connection
3. Test the API endpoints manually
4. Check browser console for frontend errors

## 🎉 Success!

Once deployed, your contact form will:
- ✅ Store messages in MongoDB Atlas
- ✅ Show success/error messages to users
- ✅ Handle form validation
- ✅ Provide real-time feedback
- ✅ Work across all devices
