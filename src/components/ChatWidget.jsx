import { useEffect, useMemo, useState } from 'react';
import { Loader2, MessageCircle, Send, X } from 'lucide-react';
import agentSystemPrompt from '../data/agentPrompt';
import projects from '../data/projects.json';

const API_BASE = import.meta.env.VITE_API_BASE_URL || '';

const buildProjectContext = () =>
    projects
        .map(
            (project) =>
                `${project.title} (${project.subtitle}, ${project.date}): ${project.summary}. Highlights: ${project.highlights.join('; ')}. Tech: ${project.tech.join(', ')}.`
        )
        .join('\n');

const initialAssistantMessage =
    'Hi! I am an AI assistant for Subash Kannan R. Ask me about his projects, skills, or how to get in touch.';

const ChatWidget = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState([{ role: 'assistant', content: initialAssistantMessage }]);
    const [input, setInput] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');

    const context = useMemo(() => `${agentSystemPrompt}\n\nProject facts:\n${buildProjectContext()}`, []);

    useEffect(() => {
        const handler = () => setIsOpen(true);
        window.addEventListener('open-chat', handler);
        return () => window.removeEventListener('open-chat', handler);
    }, []);

    const handleToggle = () => {
        setIsOpen((prev) => !prev);
        setError('');
    };

    const sendMessage = async () => {
        if (!input.trim() || isLoading) return;
        const userMessage = { role: 'user', content: input.trim() };
        const nextMessages = [...messages, userMessage];
        setMessages(nextMessages);
        setInput('');
        setIsLoading(true);
        setError('');

        try {
            const response = await fetch(`${API_BASE}/api/chat`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ messages: nextMessages, context }),
            });

            if (!response.ok) {
                const detail = await response.json().catch(() => ({}));
                throw new Error(detail?.error || 'Request failed');
            }

            const data = await response.json();
            const reply = data?.reply || 'Sorry, I could not get a response right now.';
            setMessages((current) => [...current, { role: 'assistant', content: reply }]);
        } catch (err) {
            setError(err.message || 'Something went wrong. Please try again.');
        } finally {
            setIsLoading(false);
        }
    };

    const handleKeyDown = (event) => {
        if (event.key === 'Enter' && !event.shiftKey) {
            event.preventDefault();
            sendMessage();
        }
    };

    return (
        <>
            <div className="fixed bottom-6 right-6 z-40">
                {isOpen && (
                    <div className="w-80 sm:w-96 bg-white border border-gray-200 rounded-2xl shadow-2xl overflow-hidden glass backdrop-blur-sm">
                        <div className="flex items-center justify-between px-4 py-3 bg-gradient-to-r from-blue-500 to-blue-600 text-white">
                            <div className="flex items-center gap-2">
                                <MessageCircle size={18} />
                                <span className="font-semibold">Ask about my projects</span>
                            </div>
                            <button
                                type="button"
                                onClick={handleToggle}
                                className="p-1 rounded-full hover:bg-white/20 transition"
                                aria-label="Close chat"
                            >
                                <X size={16} />
                            </button>
                        </div>

                        <div className="flex flex-col h-96">
                            <div className="flex-1 overflow-y-auto p-4 space-y-3 bg-gray-50">
                                {messages.map((msg, index) => (
                                    <div
                                        key={`${msg.role}-${index}`}
                                        className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                                    >
                                        <div
                                            className={`max-w-[80%] rounded-2xl px-3 py-2 text-sm ${
                                                msg.role === 'user'
                                                    ? 'bg-blue-600 text-white'
                                                    : 'bg-white border border-gray-200 text-gray-800'
                                            }`}
                                        >
                                            {msg.content}
                                        </div>
                                    </div>
                                ))}
                                {isLoading && (
                                    <div className="flex items-center gap-2 text-gray-500 text-sm">
                                        <Loader2 className="animate-spin" size={16} />
                                        <span>Thinking...</span>
                                    </div>
                                )}
                                {error && <p className="text-red-500 text-sm">{error}</p>}
                            </div>

                            <div className="p-3 border-t border-gray-200 bg-white">
                                <div className="flex items-center gap-2">
                                    <textarea
                                        rows={1}
                                        value={input}
                                        onChange={(e) => setInput(e.target.value)}
                                        onKeyDown={handleKeyDown}
                                        className="flex-1 resize-none rounded-xl border border-gray-300 focus:border-blue-500 focus:ring-blue-200 text-sm px-3 py-2 bg-gray-50"
                                        placeholder="Ask about projects, skills, timeline..."
                                    />
                                    <button
                                        type="button"
                                        onClick={sendMessage}
                                        disabled={isLoading}
                                        className="inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-blue-500 to-blue-600 text-white px-3 py-2 shadow-sm hover:shadow-md transition disabled:opacity-60"
                                        aria-label="Send message"
                                    >
                                        <Send size={16} />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                <button
                    type="button"
                    onClick={handleToggle}
                    className="w-14 h-14 rounded-full bg-gradient-to-r from-blue-500 to-blue-600 text-white shadow-lg hover:shadow-xl flex items-center justify-center transition focus:outline-none focus:ring-2 focus:ring-blue-300"
                    aria-label="Open chat"
                >
                    {isOpen ? <X size={22} /> : <MessageCircle size={22} />}
                </button>
            </div>
        </>
    );
};

export default ChatWidget;

