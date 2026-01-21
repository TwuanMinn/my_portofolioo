# AI Chatbot Quick Start

## What I've Created

✅ **ChatBot Component** (`src/ChatBot.js`) - Beautiful floating chat widget with:
  - Message history
  - Auto-scrolling
  - Typing indicator
  - Dark/Light mode support
  - Responsive design

✅ **Portfolio Info File** (`portfolio-info.js`) - System prompt template for the AI

✅ **Backend API Handler** (`api/chat.js`) - Serverless function for Vercel/Netlify

✅ **Express Server** (`server.js`) - Self-hosted Node.js server option

✅ **Documentation** (`CHATBOT_SETUP.md`) - Complete setup instructions

## Quick Setup (5 minutes)

### 1. Get an API Key

Choose ONE provider:

**OpenAI:**
- Go to https://platform.openai.com/api-keys
- Create a new API key
- Cost: ~$0.001 per chat (very cheap)

**Anthropic Claude:**
- Go to https://console.anthropic.com/api-keys
- Create a new API key
- Cost: Competitive with OpenAI

### 2. Update Your Info

Edit `portfolio-info.js` and replace placeholder text with your actual:
- Name, title, experience
- Skills, projects
- Background, education

### 3. Create Environment File

Create `.env.local` in your project root:
```
REACT_APP_AI_PROVIDER=openai
REACT_APP_AI_API_KEY=your_key_here
```

### 4. Choose Deployment Method

**Easy (Vercel):**
```bash
npm install -g vercel
vercel
```
Then update your API endpoint in `ChatBot.js` to `https://your-vercel-url.vercel.app/api/chat`

**Self-Hosted (Node.js):**
```bash
npm install express cors dotenv
node server.js
```
Update endpoint in `ChatBot.js` to `http://localhost:5000/api/chat`

### 5. Test Locally

```bash
npm start
```
Click the chat bubble in bottom-right! 🎉

## File Structure After Setup

```
my_portfolioo/
├── src/
│   ├── App.js (updated with ChatBot import)
│   ├── ChatBot.js (NEW - chat widget)
│   └── ...
├── api/
│   └── chat.js (NEW - API handler)
├── portfolio-info.js (NEW - your info)
├── server.js (NEW - optional local server)
├── .env.local (NEW - your secrets, in .gitignore)
├── .env.example (NEW - template)
├── CHATBOT_SETUP.md (NEW - detailed guide)
└── ...
```

## Common Questions

**Q: Where do I add my API key?**
A: Create `.env.local` in project root with `REACT_APP_AI_API_KEY=your_key`

**Q: Will my API key be exposed?**
A: No! REACT_APP_ variables are only available at build time, and .env.local is in .gitignore

**Q: How much will this cost?**
A: Very little! OpenAI's GPT-3.5-turbo costs ~$0.001 per chat message

**Q: Can I customize the chat?**
A: Yes! Edit `src/ChatBot.js` for colors, size, position, etc.

**Q: How do I change the AI personality?**
A: Update the system prompt in `portfolio-info.js`

## Next Steps

1. ✏️ Update `portfolio-info.js` with YOUR information
2. 🔑 Get an API key from OpenAI or Anthropic
3. 📝 Create `.env.local` with your key
4. 🚀 Deploy using Vercel, your own server, or another platform
5. 🧪 Test the chat on your portfolio

## Troubleshooting

**Chat not responding?**
- Check `.env.local` has correct API key
- Check browser console for errors
- Make sure you chose the right AI_PROVIDER

**API Key error?**
- Make sure API key is valid for your provider
- Check you're using the right provider name

**CORS error?**
- If self-hosting, make sure CORS is enabled in server.js
- If using Vercel, it handles CORS automatically

Need more help? See `CHATBOT_SETUP.md` for detailed instructions!
