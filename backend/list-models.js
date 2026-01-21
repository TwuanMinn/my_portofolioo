const https = require('https');
require('dotenv').config();

const apiKey = process.env.GEMINI_API_KEY;
const url = `https://generativelanguage.googleapis.com/v1beta/models?key=${apiKey}`;

console.log('Fetching available models...');

https.get(url, (res) => {
    let data = '';
    res.on('data', (chunk) => data += chunk);
    res.on('end', () => {
        try {
            const response = JSON.parse(data);
            if (response.error) {
                console.error('API Error:', JSON.stringify(response.error, null, 2));
            } else if (response.models) {
                console.log('✅ Available Models:');
                response.models.forEach(m => {
                    if (m.name.includes('gemini')) {
                        console.log(`- ${m.name} (${m.supportedGenerationMethods.join(', ')})`);
                    }
                });
            } else {
                console.log('Response:', data);
            }
        } catch (e) {
            console.error('Parse Error:', e);
            console.log('Raw Data:', data);
        }
    });
}).on('error', (e) => {
    console.error('Request Error:', e);
});
