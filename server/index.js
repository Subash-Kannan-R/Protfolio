import cors from 'cors';
import express from 'express';

const app = express();

const PORT = process.env.PORT || 3001;
const OPENAI_API_KEY = process.env.OPENAI_API_KEY;
const allowedOrigins = (process.env.ALLOWED_ORIGINS || 'http://localhost:5173')
    .split(',')
    .map((origin) => origin.trim())
    .filter(Boolean);

app.use(
    cors({
        origin: (origin, callback) => {
            if (!origin) return callback(null, true);
            if (allowedOrigins.includes(origin)) return callback(null, true);
            return callback(new Error('Not allowed by CORS'));
        },
    })
);

app.use(express.json({ limit: '1mb' }));

app.get('/api/health', (_req, res) => {
    res.json({ status: 'ok' });
});

app.post('/api/chat', async (req, res) => {
    if (!OPENAI_API_KEY) {
        return res.status(500).json({ error: 'Missing OPENAI_API_KEY' });
    }

    const { messages = [], context = '' } = req.body || {};

    if (!Array.isArray(messages) || messages.length === 0) {
        return res.status(400).json({ error: 'Request must include a non-empty messages array.' });
    }

    const payloadSize = JSON.stringify({ messages, context }).length;
    if (payloadSize > 12000) {
        return res.status(413).json({ error: 'Request too large. Please keep messages concise.' });
    }

    const systemPrompt = [
        'You are Subash Kannan R’s AI assistant for his portfolio site.',
        'Answer concisely (2-4 sentences) and be specific when possible.',
        'If a question is outside the provided context, say you have limited info and invite the user to email.',
        'Context:',
        context || 'No additional project context was provided.',
    ].join('\n');

    const body = {
        model: 'gpt-4o-mini',
        messages: [
            { role: 'system', content: systemPrompt },
            ...messages.map((m) => ({ role: m.role, content: m.content })),
        ],
        max_tokens: 400,
        temperature: 0.6,
    };

    try {
        const response = await fetch('https://api.openai.com/v1/chat/completions', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${OPENAI_API_KEY}`,
            },
            body: JSON.stringify(body),
        });

        if (!response.ok) {
            const errorText = await response.text();
            return res.status(response.status).json({ error: 'Upstream error', detail: errorText });
        }

        const data = await response.json();
        const reply = data?.choices?.[0]?.message?.content?.trim();
        return res.json({ reply: reply || 'Sorry, I could not generate a response right now.' });
    } catch (error) {
        // eslint-disable-next-line no-console
        console.error('OpenAI proxy error', error);
        return res.status(500).json({ error: 'Unexpected server error.' });
    }
});

app.listen(PORT, () => {
    // eslint-disable-next-line no-console
    console.log(`AI proxy listening on http://localhost:${PORT}`);
});

