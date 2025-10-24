# 🚀 Complete Deployment Roadmap

This guide will help you deploy both your backend and frontend with all necessary configurations.

## 📋 Prerequisites Checklist

- [ ] MongoDB Atlas account with cluster running
- [ ] GitHub repository with your code
- [ ] Vercel account (for backend deployment)
- [ ] Your frontend hosting platform (Vercel/Netlify/etc.)

---

## 🔧 Step 1: Backend Deployment (Vercel)

### 1.1 Prepare Backend for Deployment

```bash
# Navigate to backend directory
cd backend

# Install dependencies
npm install

# Test locally first
npm start
```

### 1.2 Deploy Backend to Vercel

1. **Push to GitHub:**
   ```bash
   git add backend/
   git commit -m "Add backend API for contact form"
   git push origin main
   ```

2. **Deploy to Vercel:**
   - Go to [Vercel Dashboard](https://vercel.com/dashboard)
   - Click "New Project"
   - Import your GitHub repository
   - **IMPORTANT**: Set **Root Directory** to `backend`
   - Click "Deploy"

3. **Add Environment Variables in Vercel:**
   - Go to your project in Vercel dashboard
   - Click "Settings" → "Environment Variables"
   - Add these variables:

   ```
   MONGODB_URI=mongodb+srv://vtomar:Vikas%40123@cluster0.jzywyvf.mongodb.net/?retryWrites=true&w=majority
   MONGO_DB=portfolio
   FRONTEND_URL=https://my-portfolio-vikastomar1308-9573-vikas-tomars-projects-ce26156c.vercel.app
   NODE_ENV=production
   ```

4. **Get Your Backend URL:**
   - After deployment, copy your backend URL (e.g., `https://your-backend-name.vercel.app`)
   - You'll need this for the frontend configuration

---

## 🎨 Step 2: Frontend Deployment

### 2.1 Update Frontend Configuration

1. **Update Contact.jsx with your backend URL:**
   ```javascript
   // In src/components/Contact.jsx, update this line:
   const backendUrl = process.env.NODE_ENV === 'production' 
     ? 'https://your-actual-backend-url.vercel.app' // Replace with your Vercel backend URL
     : 'http://localhost:3000';
   ```

2. **Create Frontend Environment Variables (Optional):**
   Create `.env` in your project root:
   ```env
   VITE_BACKEND_URL=https://your-actual-backend-url.vercel.app
   ```

3. **Update Contact.jsx to use environment variable:**
   ```javascript
   const backendUrl = import.meta.env.VITE_BACKEND_URL || 
     (process.env.NODE_ENV === 'production' 
       ? 'https://your-actual-backend-url.vercel.app'
       : 'http://localhost:3000');
   ```

### 2.2 Deploy Frontend

**Option A: Vercel (Recommended)**
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel

# Follow the prompts:
# - Set up and deploy? Y
# - Which scope? (your account)
# - Link to existing project? N
# - What's your project's name? my-portfolio-frontend
# - In which directory is your code located? ./
```

**Option B: Netlify**
```bash
# Build the project
npm run build

# Deploy to Netlify
# - Go to netlify.com
# - Drag and drop the 'dist' folder
# - Or connect your GitHub repository
```

**Option C: GitHub Pages**
```bash
# Install gh-pages
npm install --save-dev gh-pages

# Add to package.json scripts:
"predeploy": "npm run build",
"deploy": "gh-pages -d dist"

# Deploy
npm run deploy
```

---

## 🔄 Step 3: Environment Variables Summary

### Backend (.env for local development)
```env
MONGODB_URI=mongodb+srv://vtomar:Vikas%40123@cluster0.jzywyvf.mongodb.net/?retryWrites=true&w=majority
MONGO_DB=portfolio
FRONTEND_URL=http://localhost:5173
PORT=3000
NODE_ENV=development
```

### Backend (Vercel Environment Variables)
```
MONGODB_URI=mongodb+srv://vtomar:Vikas%40123@cluster0.jzywyvf.mongodb.net/?retryWrites=true&w=majority
MONGO_DB=portfolio
FRONTEND_URL=https://my-portfolio-vikastomar1308-9573-vikas-tomars-projects-ce26156c.vercel.app
NODE_ENV=production
```

### Frontend (.env for local development)
```env
VITE_BACKEND_URL=http://localhost:3000
```

### Frontend (Production Environment Variables)
```
VITE_BACKEND_URL=https://your-actual-backend-url.vercel.app
```

---

## 🧪 Step 4: Testing

### 4.1 Test Backend Locally
```bash
cd backend
npm start

# Test in another terminal:
curl -X POST http://localhost:3000/api/contact \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Test User",
    "email": "test@example.com",
    "subject": "Test Subject",
    "message": "Test message"
  }'
```

### 4.2 Test Frontend Locally
```bash
npm run dev
# Open http://localhost:5173
# Test the contact form
```

### 4.3 Test Production
1. **Test Backend API:**
   ```bash
   curl -X POST https://your-backend-url.vercel.app/api/contact \
     -H "Content-Type: application/json" \
     -d '{
       "name": "Test User",
       "email": "test@example.com",
       "subject": "Test Subject",
       "message": "Test message"
     }'
   ```

2. **Test Frontend:**
   - Visit your deployed frontend
   - Submit the contact form
   - Check for toast notifications
   - Verify data appears in MongoDB Atlas

---

## 🔍 Step 5: Verification Checklist

### Backend Verification:
- [ ] Backend deploys successfully to Vercel
- [ ] Environment variables are set correctly
- [ ] MongoDB connection works
- [ ] API endpoints respond correctly
- [ ] CORS is configured properly

### Frontend Verification:
- [ ] Frontend deploys successfully
- [ ] Contact form connects to backend
- [ ] Toast notifications work
- [ ] Form validation works
- [ ] Success/error states work correctly

### Database Verification:
- [ ] Messages are stored in MongoDB Atlas
- [ ] Data appears in the correct collection
- [ ] All fields are captured correctly

---

## 🚨 Troubleshooting

### Common Issues:

1. **CORS Errors:**
   - Check FRONTEND_URL in backend environment variables
   - Ensure URLs match exactly (including https/http)

2. **MongoDB Connection Issues:**
   - Verify IP whitelist in MongoDB Atlas
   - Check connection string format
   - Ensure database user has correct permissions

3. **Environment Variables:**
   - Double-check all variable names
   - Ensure no extra spaces or quotes
   - Verify URLs are complete

4. **Frontend-Backend Connection:**
   - Test backend URL directly in browser
   - Check browser console for errors
   - Verify network requests in DevTools

---

## 📞 Support Commands

### Check Backend Health:
```bash
curl https://your-backend-url.vercel.app/api/health
```

### View Backend Logs:
- Go to Vercel dashboard → Functions → View logs

### Test Database Connection:
```bash
# Test MongoDB connection
curl -X GET https://your-backend-url.vercel.app/api/messages
```

---

## 🎉 Success!

Once deployed, your contact form will:
- ✅ Store messages in MongoDB Atlas
- ✅ Show beautiful toast notifications
- ✅ Handle all error cases gracefully
- ✅ Work across all devices
- ✅ Provide real-time feedback

Your portfolio contact form is now fully functional and production-ready!
