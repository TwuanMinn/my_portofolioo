# AI Chatbot Setup Guide

Your portfolio now includes an AI chatbot that visitors can interact with! Here's how to set it up:

## Step 1: Choose Your AI Provider

You have two options:

### Option A: OpenAI (GPT-3.5-turbo or GPT-4)
- Sign up at https://platform.openai.com
- Get your API key from the dashboard
- More affordable and widely used

### Option B: Anthropic Claude
- Sign up at https://console.anthropic.com
- Get your API key
- Known for thoughtful responses

## Step 2: Update Portfolio Information

Edit `portfolio-info.js` and update it with your actual information:
```javascript
const PORTFOLIO_INFO = `
You are an AI assistant for a software engineer's portfolio. You have knowledge about this person:

NAME: Your Name
TITLE: Your Title

BACKGROUND:
- Your background here
...
`;
```

## Step 3: Set Up Environment Variables

Create a `.env.local` file in your project root:

```
REACT_APP_AI_API_KEY=your_api_key_here
REACT_APP_AI_PROVIDER=openai  # or 'anthropic'
```

**Important:** 
- Add `.env.local` to `.gitignore` (NEVER commit your API key!)
- The `.env.local` file is automatically ignored in React apps

## Step 4: Deploy the Backend API

### Option A: Vercel (Recommended for Next.js or serverless)
1. Convert `api/chat.js` to a Vercel serverless function
2. Deploy to Vercel (it will automatically detect the API folder)

### Option B: Firebase Cloud Functions
```bash
npm install -g firebase-tools
firebase init functions
# Copy api/chat.js code into functions/index.js
firebase deploy --only functions
```

### Option C: Own Server (Node.js + Express)
```bash
npm install express cors dotenv
# Create server.js:
```

Create a `server.js` file in your project root:

```javascript
const express = require('express');
const cors = require('cors');
require('dotenv').config();
const chatHandler = require('./api/chat.js').default;

const app = express();
app.use(cors());
app.use(express.json());

app.post('/api/chat', chatHandler);

app.listen(5000, () => {
  console.log('API running on http://localhost:5000');
});
```

Then update the ChatBot.js fetch URL to match your backend URL.

## Step 5: Update ChatBot API URL

In `src/ChatBot.js`, update the fetch URL based on your deployment:

```javascript
// For Vercel/serverless:
const response = await fetch('/api/chat', { ... });

// For own server:
const response = await fetch('http://localhost:5000/api/chat', { ... });

// For production:
const response = await fetch('https://your-domain.com/api/chat', { ... });
```

## Step 6: Test Locally

```bash
npm start
```

Click the chat icon in the bottom-right corner and try asking questions!

## Step 7: Deploy

When ready to deploy your portfolio:

1. **Update `.env.local` values** in your deployment platform
2. **Test the chat** before going live
3. **Monitor API usage** to avoid unexpected costs

## Security Best Practices

1. **Never hardcode API keys** in your code
2. **Always use `.env.local`** for sensitive data
3. **Validate user input** on the backend
4. **Set API rate limits** to prevent abuse
5. **Monitor costs** with your AI provider

## Customization Options

You can customize the chatbot appearance in `src/ChatBot.js`:
- Change colors (currently blue)
- Modify chat window size
- Add custom system prompts
- Change AI model version

## Troubleshooting

### Chat returns "Failed to get response"
- Check if API key is correct
- Verify environment variables are loaded
- Check browser console for more details

### Slow responses
- Try a faster model (gpt-3.5-turbo)
- Reduce `max_tokens` in API call
- Check your internet connection

### CORS errors
- Make sure your backend allows CORS
- Check deployed URL is whitelisted

## Support
If you need help, refer to:
- OpenAI Docs: https://platform.openai.com/docs
- Anthropic Docs: https://docs.anthropic.com
- Vercel Docs: https://vercel.com/docs
