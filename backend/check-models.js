const https = require('https');
const fs = require('fs');
require('dotenv').config();

const apiKey = process.env.GEMINI_API_KEY;
const url = `https://generativelanguage.googleapis.com/v1beta/models?key=${apiKey}`;

https.get(url, (res) => {
    let data = '';
    res.on('data', (chunk) => data += chunk);
    res.on('end', () => {
        try {
            const response = JSON.parse(data);
            if (response.models) {
                const models = response.models.map(m => m.name).join('\n');
                fs.writeFileSync('available-models.txt', models);
                console.log('Saved models to available-models.txt');
            } else {
                console.log('No models found or error:', JSON.stringify(response));
            }
        } catch (e) {
            console.error(e);
        }
    });
});
