# AI Chat Bot Setup

This portfolio includes an AI-powered chat bot that can answer questions about Bryl Lim's experience, skills, and projects.

## Features

- 💬 Real-time chat interface
- 🤖 Powered by Google Gemini AI
- 📱 Mobile-responsive design
- ⚡ Fast and smooth animations
- 🎯 Context-aware responses about Bryl's portfolio

## Setup Instructions

### 1. Get Your Google Gemini API Key

1. Visit [Google AI Studio](https://aistudio.google.com/app/apikey)
2. Sign in with your Google account
3. Click "Create API Key"
4. Copy your API key

### 2. Configure Environment Variables

Create a `.env` file in the root directory:

```bash
VITE_GEMINI_API_KEY=your_actual_api_key_here
```

**Important:** Never commit your `.env` file to git. It's already included in `.gitignore`.

### 3. Test the Chat Bot

1. Start the development server:
```bash
npm run dev
```

2. Click the "Chat with Bryl" button in the bottom-right corner
3. Try asking questions like:
   - "What are Bryl's technical skills?"
   - "Tell me about Bryl's recent projects"
   - "What certifications does Bryl have?"
   - "Is Bryl available for work?"

## How It Works

The chat bot uses:
- **Frontend:** React component with smooth animations
- **API Client:** `src/lib/chatApi.ts` handles communication with Gemini AI
- **Context:** Pre-loaded with Bryl's complete portfolio information
- **Models:** Automatically tries `gemini-1.5-flash`, `gemini-1.5-pro`, then `gemini-pro`

## Fallback Response

If the API key is not configured or there's an error, the bot will provide a helpful fallback response with basic information about Bryl.

## Customization

To update the bot's knowledge about Bryl, edit the `BRYL_LIM_CONTEXT` constant in `src/lib/chatApi.ts`.

## API Key Security

- The API key is stored in environment variables
- Never expose your API key in client-side code
- For production, consider using a backend API to secure the key
- The current implementation includes a fallback key for demo purposes only

## Troubleshooting

**Chat not working?**
1. Check that your API key is correctly set in `.env`
2. Restart the development server after adding the API key
3. Check browser console for any error messages
4. Verify your API key is active at [Google AI Studio](https://aistudio.google.com/app/apikey)

**Rate limits?**
Google Gemini has rate limits. If you hit them, wait a few minutes and try again.
