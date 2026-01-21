const { GoogleGenerativeAI } = require('@google/generative-ai');
require('dotenv').config();

const apiKey = process.env.GEMINI_API_KEY;
console.log('Testing API Key:', apiKey ? 'Present' : 'Missing');

const genAI = new GoogleGenerativeAI(apiKey);

async function test() {
    try {
        console.log('Attempting to connect with gemini-pro...');
        const model = genAI.getGenerativeModel({ model: 'gemini-pro' });
        const result = await model.generateContent('Hello, are you working?');
        const response = await result.response;
        console.log('✅ Success! Response:', response.text());
    } catch (error) {
        console.error('❌ Error with gemini-pro:', error.message);

        try {
            console.log('\nRetrying with gemini-1.5-flash...');
            const model2 = genAI.getGenerativeModel({ model: 'gemini-1.5-flash' });
            const result2 = await model2.generateContent('Hello, are you working?');
            const response2 = await result2.response;
            console.log('✅ Success! Response:', response2.text());
        } catch (error2) {
            console.error('❌ Error with gemini-1.5-flash:', error2.message);
        }
    }
}

test();
