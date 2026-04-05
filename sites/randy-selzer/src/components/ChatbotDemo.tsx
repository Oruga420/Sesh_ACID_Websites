'use client';

import { useState } from 'react';
import { BRAND } from '@/lib/brand-tokens';

export default function ChatbotDemo() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      role: 'assistant',
      text: "Hi! I'm Randy Selzer's AI assistant. I can help you with property searches, market updates, and questions about buying or selling in Mississauga. How can I help? \uD83E\uDD16",
    },
  ]);
  const [input, setInput] = useState('');

  const handleSend = () => {
    if (!input.trim()) return;
    const userMsg = { role: 'user', text: input };
    const botMsg = {
      role: 'assistant',
      text: "This is a demo preview. Once activated, I'll be powered by AI to handle real property inquiries, schedule viewings, answer market questions, and assist your clients 24/7.",
    };
    setMessages((prev) => [...prev, userMsg, botMsg]);
    setInput('');
  };

  return (
    <>
      {/* Chat Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-50 w-[60px] h-[60px] rounded-full shadow-lg flex items-center justify-center transition-transform hover:scale-105"
        style={{ backgroundColor: BRAND.colors.primary }}
        aria-label="Open chat"
      >
        <svg width="28" height="28" viewBox="0 0 24 24" fill="white">
          <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H6l-2 2V4h16v12z" />
        </svg>
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-20 right-6 z-50 w-[380px] max-w-[calc(100vw-48px)] rounded-card shadow-2xl overflow-hidden border border-brand-border bg-white flex flex-col" style={{ height: '500px' }}>
          {/* Header */}
          <div
            className="px-4 py-3 flex items-center justify-between shrink-0"
            style={{ backgroundColor: BRAND.colors.primary }}
          >
            <span className="text-white font-body text-sm font-semibold">
              AI Assistant — Randy Selzer
            </span>
            <button onClick={() => setIsOpen(false)} className="text-white/80 hover:text-white text-lg" aria-label="Close chat">
              &times;
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-3">
            {messages.map((msg, i) => (
              <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div
                  className={`max-w-[80%] px-3 py-2 rounded-lg text-sm font-body ${
                    msg.role === 'user'
                      ? 'bg-brand-primary text-white'
                      : 'bg-brand-bgAlt text-brand-textBody'
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}
          </div>

          {/* Input */}
          <div className="shrink-0 border-t border-brand-border p-3 flex gap-2">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSend()}
              placeholder="Type a message..."
              className="flex-1 px-3 py-2 border border-brand-border rounded-btn text-sm font-body focus:outline-none focus:border-brand-primary"
            />
            <button
              onClick={handleSend}
              className="px-4 py-2 rounded-btn text-white text-sm font-semibold"
              style={{ backgroundColor: BRAND.colors.primary }}
            >
              Send
            </button>
          </div>

          {/* Powered by */}
          <div className="text-center text-xs text-brand-textMuted py-1 border-t border-brand-border/50">
            Powered by AI &middot; Sesh
          </div>
        </div>
      )}
    </>
  );
}
