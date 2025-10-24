# Portfolio Backend API

A Node.js backend API for handling contact form submissions from your portfolio website.

## Features

- ✅ Contact form submission handling
- ✅ MongoDB Atlas integration
- ✅ Data validation and sanitization
- ✅ Rate limiting for security
- ✅ CORS configuration
- ✅ Error handling
- ✅ Vercel deployment ready

## Setup

### 1. Install Dependencies

```bash
cd backend
npm install
```

### 2. Environment Variables

Create a `.env` file in the backend directory with the following variables:

```env
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/portfolio?retryWrites=true&w=majority
FRONTEND_URL=https://your-portfolio-domain.vercel.app
PORT=3000
NODE_ENV=production
```

### 3. MongoDB Atlas Setup

1. Go to [MongoDB Atlas](https://www.mongodb.com/atlas)
2. Create a new cluster
3. Create a database user
4. Get your connection string
5. Update the `MONGODB_URI` in your `.env` file

### 4. Local Development

```bash
npm run dev
```

### 5. Production

```bash
npm start
```

## API Endpoints

### POST /api/contact
Submit a contact form message.

**Request Body:**
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "subject": "Project Inquiry",
  "message": "I would like to discuss a project..."
}
```

**Response:**
```json
{
  "success": true,
  "message": "Thank you for your message! I will get back to you soon.",
  "data": {
    "id": "message_id",
    "timestamp": "2024-01-01T00:00:00.000Z"
  }
}
```

### GET /api/health
Health check endpoint.

### GET /api/messages
Get all messages (for admin purposes).

## Deployment to Vercel

1. Push your backend code to a GitHub repository
2. Connect the repository to Vercel
3. Add environment variables in Vercel dashboard
4. Deploy

## Security Features

- Rate limiting (100 requests per 15 minutes per IP)
- Input validation and sanitization
- CORS protection
- Helmet security headers
- IP address and user agent logging

## Database Schema

```javascript
{
  name: String (required, max 100 chars),
  email: String (required, valid email format),
  subject: String (required, max 200 chars),
  message: String (required, max 2000 chars),
  createdAt: Date (auto-generated),
  ipAddress: String (auto-captured),
  userAgent: String (auto-captured)
}
```
