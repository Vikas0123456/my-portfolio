#!/usr/bin/env node

/**
 * Environment setup script for your MongoDB credentials
 */

const fs = require('fs');
const path = require('path');

const envContent = `# MongoDB Atlas Connection String
MONGODB_URI=mongodb+srv://vtomar:Vikas%40123@cluster0.jzywyvf.mongodb.net/?retryWrites=true&w=majority

# MongoDB Database Name
MONGO_DB=portfolio

# Frontend URL for CORS (update this with your actual frontend URL)
FRONTEND_URL=http://localhost:5173

# Server Configuration
PORT=3000
NODE_ENV=development`;

const envPath = path.join(__dirname, '.env');

try {
  fs.writeFileSync(envPath, envContent);
  console.log('✅ .env file created successfully!');
  console.log('📋 Your MongoDB credentials have been configured.');
  console.log('\n🔧 Next steps:');
  console.log('1. Update FRONTEND_URL with your actual frontend domain');
  console.log('2. Run: npm install');
  console.log('3. Run: npm start');
  console.log('\n🚀 Your backend is ready to use!');
} catch (error) {
  console.error('❌ Error creating .env file:', error.message);
  console.log('\n💡 Please create the .env file manually with the following content:');
  console.log('\n' + envContent);
}
