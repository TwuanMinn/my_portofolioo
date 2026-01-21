// Simple Express server for the chatbot API
// Usage: node server.js

const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const { PORTFOLIO_INFO } = require('./portfolio-info.js');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Configure your AI API here
const API_KEY = process.env.AI_API_KEY;
const API_PROVIDER = process.env.AI_PROVIDER || 'openai';

// Chat endpoint
app.post('/api/chat', async (req, res) => {
  try {
    const { message, conversationHistory } = req.body;

    if (!message) {
      return res.status(400).json({ error: 'Message is required' });
    }

    if (!API_KEY) {
      return res.status(200).json({
        reply: "The AI service isn't configured yet. Please add an API key to enable full responses."
      });
    }

    // Format conversation history for the API
    const formattedHistory = conversationHistory.map((msg) => ({
      role: msg.sender === 'user' ? 'user' : 'assistant',
      content: msg.text,
    }));

    let reply;

    if (API_PROVIDER === 'openai') {
      reply = await callOpenAI(message, formattedHistory);
    } else if (API_PROVIDER === 'anthropic') {
      reply = await callAnthropic(message, formattedHistory);
    } else {
      return res.status(500).json({ error: 'Invalid AI provider configured' });
    }

    return res.status(200).json({ reply });
  } catch (error) {
    console.error('Chat API error:', error);
    return res
      .status(500)
      .json({ error: 'Failed to process chat message', details: error.message });
  }
});

async function callOpenAI(message, history) {
  const response = await fetch('https://api.openai.com/v1/chat/completions', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${API_KEY}`,
    },
    body: JSON.stringify({
      model: 'gpt-3.5-turbo',
      messages: [
        {
          role: 'system',
          content: PORTFOLIO_INFO,
        },
        ...history,
        {
          role: 'user',
          content: message,
        },
      ],
      temperature: 0.7,
      max_tokens: 500,
    }),
  });

  if (!response.ok) {
    const error = await response.json();
    throw new Error(`OpenAI API error: ${error.error?.message}`);
  }

  const data = await response.json();
  return data.choices[0].message.content;
}

async function callAnthropic(message, history) {
  const response = await fetch('https://api.anthropic.com/v1/messages', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'x-api-key': API_KEY,
      'anthropic-version': '2023-06-01',
    },
    body: JSON.stringify({
      model: 'claude-3-haiku-20240307',
      max_tokens: 500,
      system: PORTFOLIO_INFO,
      messages: [
        ...history,
        {
          role: 'user',
          content: message,
        },
      ],
    }),
  });

  if (!response.ok) {
    const error = await response.json();
    throw new Error(`Anthropic API error: ${error.error?.message}`);
  }

  const data = await response.json();
  return data.content[0].text;
}

// Translation endpoint
app.post('/api/translate', async (req, res) => {
  try {
    const { text, from = 'en', to = 'vi' } = req.body;
    if (!text) {
      return res.status(400).json({ error: 'Text is required' });
    }
    const response = await fetch('https://libretranslate.com/translate', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        q: text,
        source: from,
        target: to,
      }),
    });
    const data = await response.json();
    res.json({ translatedText: data.translatedText });
  } catch (error) {
    console.error('Translation error:', error);
    res.status(500).json({ error: 'Translation failed' });
  }
});

// Basic route
app.get('/', (req, res) => {
  res.json({ message: 'Chatbot API is running. POST to /api/chat' });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
  console.log(`AI Provider: ${API_PROVIDER}`);
  console.log(`API Key configured: ${!!API_KEY}`);
});
