// Test Backend Integration
// Run this in browser console to verify backend connectivity

const BASE_URL = "https://nyaya-backend-bd69.onrender.com";

async function testBackendIntegration() {
  console.log("🚀 Testing Nyaya AI Backend Integration...\n");

  // Test 1: Health Check
  console.log("1️⃣ Testing Health Endpoint...");
  try {
    const healthResponse = await fetch(`${BASE_URL}/health`);
    const healthData = await healthResponse.json();
    console.log("✅ Health Check:", healthData);
  } catch (error) {
    console.error("❌ Health Check Failed:", error.message);
  }

  // Test 2: Legal Query
  console.log("\n2️⃣ Testing Legal Query Endpoint...");
  try {
    const queryResponse = await fetch(`${BASE_URL}/nyaya/query`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        query: "What are the penalties for breach of contract in India?",
        jurisdiction_hint: "India",
        user_context: {
          role: "citizen",
          confidence_required: true,
        },
      }),
    });
    const queryData = await queryResponse.json();
    console.log("✅ Legal Query Response:", queryData);
  } catch (error) {
    console.error("❌ Legal Query Failed:", error.message);
  }

  // Test 3: CORS Check
  console.log("\n3️⃣ Testing CORS Configuration...");
  try {
    const corsResponse = await fetch(`${BASE_URL}/health`, {
      method: "OPTIONS",
    });
    console.log("✅ CORS Headers:", corsResponse.headers);
  } catch (error) {
    console.error("❌ CORS Check Failed:", error.message);
  }

  console.log("\n✨ Integration Test Complete!");
}

// Run the test
testBackendIntegration();
