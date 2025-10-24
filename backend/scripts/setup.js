#!/usr/bin/env node

/**
 * Setup script for portfolio backend
 * This script helps verify the setup and provides useful information
 */

const fs = require('fs');
const path = require('path');

console.log('🚀 Portfolio Backend Setup Script\n');

// Check if .env file exists
const envPath = path.join(__dirname, '..', '.env');
const envExamplePath = path.join(__dirname, '..', 'env.example');

if (!fs.existsSync(envPath)) {
  console.log('⚠️  .env file not found!');
  console.log('📋 Please create a .env file with the following variables:');
  console.log('');
  
  if (fs.existsSync(envExamplePath)) {
    const envExample = fs.readFileSync(envExamplePath, 'utf8');
    console.log(envExample);
  }
  
  console.log('\n💡 Copy env.example to .env and fill in your values');
} else {
  console.log('✅ .env file found');
}

// Check package.json
const packagePath = path.join(__dirname, '..', 'package.json');
if (fs.existsSync(packagePath)) {
  const packageJson = JSON.parse(fs.readFileSync(packagePath, 'utf8'));
  console.log(`✅ Package.json found (version: ${packageJson.version})`);
} else {
  console.log('❌ package.json not found');
}

// Check if node_modules exists
const nodeModulesPath = path.join(__dirname, '..', 'node_modules');
if (fs.existsSync(nodeModulesPath)) {
  console.log('✅ Dependencies installed');
} else {
  console.log('⚠️  Dependencies not installed');
  console.log('💡 Run: npm install');
}

console.log('\n📚 Next Steps:');
console.log('1. Set up MongoDB Atlas account');
console.log('2. Create a cluster and database');
console.log('3. Get your connection string');
console.log('4. Update .env file with your MongoDB URI');
console.log('5. Run: npm start');
console.log('6. Deploy to Vercel');

console.log('\n🔗 Useful Links:');
console.log('- MongoDB Atlas: https://www.mongodb.com/atlas');
console.log('- Vercel: https://vercel.com');
console.log('- Deployment Guide: ../DEPLOYMENT_GUIDE.md');

console.log('\n✨ Happy coding!');
