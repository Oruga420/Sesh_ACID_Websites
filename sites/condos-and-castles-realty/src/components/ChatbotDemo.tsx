'use client';

import { useState } from 'react';
import { BRAND } from '@/lib/brand-tokens';

export default function ChatbotDemo() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{ role: string; text: string }[]>([
    {
      role: 'bot',
      text: "Hi! I'm Condos & Castles' AI assistant. I can help you with property searches, scheduling viewings, and answering questions about Toronto real estate. How can I help? 🏠",
    },
  ]);
  const [input, setInput] = useState('');

  const handleSend = () => {
    if (!input.trim()) return;
    setMessages((prev) => [
      ...prev,
      { role: 'user', text: input },
      {
        role: 'bot',
        text: "This is a demo preview. Once activated, I'll be powered by AI to handle property inquiries, schedule viewings, answer FAQs about neighborhoods, and assist your clients 24/7.",
      },
    ]);
    setInput('');
  };

  return (
    <>
      {/* Floating Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-50 w-[60px] h-[60px] rounded-full shadow-lg flex items-center justify-center transition-transform hover:scale-110"
        style={{ backgroundColor: BRAND.colors.primary }}
        aria-label="Open chat"
      >
        <svg width="28" height="28" viewBox="0 0 24 24" fill="white">
          <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H6l-2 2V4h16v12z" />
        </svg>
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 z-50 w-[380px] max-w-[calc(100vw-48px)] rounded-lg shadow-2xl overflow-hidden font-body"
          style={{ border: `1px solid ${BRAND.colors.border}` }}
        >
          {/* Header */}
          <div
            className="flex items-center justify-between px-4 py-3"
            style={{ backgroundColor: BRAND.colors.primary }}
          >
            <span className="text-white text-sm font-semibold">
              AI Assistant — Condos &amp; Castles
            </span>
            <button
              onClick={() => setIsOpen(false)}
              className="text-white/70 hover:text-white"
              aria-label="Close chat"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M6 6l12 12M6 18L18 6" />
              </svg>
            </button>
          </div>

          {/* Messages */}
          <div className="h-[350px] overflow-y-auto p-4 space-y-3" style={{ backgroundColor: '#F8F6F1' }}>
            {messages.map((msg, i) => (
              <div
                key={i}
                className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className="max-w-[80%] px-3 py-2 rounded-lg text-sm"
                  style={{
                    backgroundColor: msg.role === 'user' ? BRAND.colors.primary : '#FFFFFF',
                    color: msg.role === 'user' ? '#FFFFFF' : BRAND.colors.textBody,
                    border: msg.role === 'bot' ? `1px solid ${BRAND.colors.border}` : 'none',
                  }}
                >
                  {msg.text}
                </div>
              </div>
            ))}
          </div>

          {/* Input */}
          <div className="flex items-center gap-2 p-3 bg-white border-t" style={{ borderColor: BRAND.colors.border }}>
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSend()}
              placeholder="Type a message..."
              className="flex-1 text-sm px-3 py-2 rounded border outline-none focus:ring-1"
              style={{ borderColor: BRAND.colors.border, color: BRAND.colors.textBody }}
            />
            <button
              onClick={handleSend}
              className="px-3 py-2 rounded text-white text-sm font-semibold"
              style={{ backgroundColor: BRAND.colors.primary }}
            >
              Send
            </button>
          </div>

          {/* Powered by */}
          <div className="text-center py-1 text-[10px] bg-white" style={{ color: BRAND.colors.textMuted }}>
            Powered by AI &middot; Sesh
          </div>
        </div>
      )}
    </>
  );
}
