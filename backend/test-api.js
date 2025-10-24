/**
 * Simple API test script
 * Run this to test your backend API locally
 */

const testApi = async () => {
  const baseUrl = 'http://localhost:3000';
  
  console.log('🧪 Testing Portfolio Backend API\n');
  
  try {
    // Test health endpoint
    console.log('1. Testing health endpoint...');
    const healthResponse = await fetch(`${baseUrl}/api/health`);
    const healthData = await healthResponse.json();
    console.log('✅ Health check:', healthData.status);
    
    // Test contact form submission
    console.log('\n2. Testing contact form submission...');
    const contactData = {
      name: 'Test User',
      email: 'test@example.com',
      subject: 'API Test',
      message: 'This is a test message from the API test script.'
    };
    
    const contactResponse = await fetch(`${baseUrl}/api/contact`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(contactData),
    });
    
    const contactResult = await contactResponse.json();
    
    if (contactResponse.ok && contactResult.success) {
      console.log('✅ Contact form submission successful');
      console.log('📧 Message ID:', contactResult.data.id);
    } else {
      console.log('❌ Contact form submission failed');
      console.log('Error:', contactResult.message);
    }
    
    // Test root endpoint
    console.log('\n3. Testing root endpoint...');
    const rootResponse = await fetch(baseUrl);
    const rootData = await rootResponse.json();
    console.log('✅ Root endpoint:', rootData.message);
    
    console.log('\n🎉 All tests completed!');
    
  } catch (error) {
    console.error('❌ Test failed:', error.message);
    console.log('\n💡 Make sure your backend is running on port 3000');
    console.log('Run: npm start');
  }
};

// Run the test
testApi();
