'use client';

import { useState } from 'react';
import { BRAND } from '@/lib/brand-tokens';

export default function ChatbotDemo() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Array<{ text: string; isBot: boolean }>>([
    {
      text: `Hi! I'm Neelkanth Beauty Parlour's AI assistant. I can help you with bookings, pricing, and questions about our services. How can I help? `,
      isBot: true,
    },
  ]);
  const [input, setInput] = useState('');

  const handleSend = () => {
    if (!input.trim()) return;
    const newMessages = [
      ...messages,
      { text: input, isBot: false },
      {
        text: "This is a demo preview. Once activated, I'll be powered by AI to handle real bookings, answer FAQs, and assist your customers 24/7 in English.",
        isBot: true,
      },
    ];
    setMessages(newMessages);
    setInput('');
  };

  return (
    <>
      {/* Chat Window */}
      {isOpen && (
        <div
          className="fixed bottom-24 right-6 w-[360px] max-w-[calc(100vw-48px)] rounded-xl overflow-hidden shadow-2xl z-50"
          style={{ height: '480px', border: `1px solid ${BRAND.colors.border}` }}
        >
          {/* Chat Header */}
          <div
            className="flex items-center justify-between px-4 py-3"
            style={{ backgroundColor: BRAND.colors.primary }}
          >
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="white">
                  <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z"/>
                </svg>
              </div>
              <span className="text-white text-sm font-semibold">AI Assistant — Neelkanth</span>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-white/80 hover:text-white"
              aria-label="Close chat"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>
              </svg>
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-3 bg-brand-bg-alt" style={{ height: 'calc(100% - 120px)' }}>
            {messages.map((msg, i) => (
              <div key={i} className={`flex ${msg.isBot ? 'justify-start' : 'justify-end'}`}>
                <div
                  className={`max-w-[80%] rounded-lg px-3 py-2 text-sm ${
                    msg.isBot
                      ? 'bg-white text-brand-text-body shadow-sm'
                      : 'text-white'
                  }`}
                  style={msg.isBot ? {} : { backgroundColor: BRAND.colors.primary }}
                >
                  {msg.text}
                </div>
              </div>
            ))}
          </div>

          {/* Input */}
          <div className="p-3 bg-white border-t" style={{ borderColor: BRAND.colors.border }}>
            <div className="flex gap-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Type a message..."
                className="flex-1 px-3 py-2 rounded-md text-sm border bg-brand-bg-alt focus:outline-none focus:ring-1"
                style={{ borderColor: BRAND.colors.border, fontFamily: `${BRAND.fonts.body}, ${BRAND.fonts.bodyFallback}` }}
              />
              <button
                onClick={handleSend}
                className="px-3 py-2 rounded-md text-white text-sm font-semibold"
                style={{ backgroundColor: BRAND.colors.primary }}
              >
                Send
              </button>
            </div>
            <p className="text-[10px] text-center mt-2" style={{ color: BRAND.colors.textMuted }}>
              Powered by AI &middot; Sesh
            </p>
          </div>
        </div>
      )}

      {/* Floating Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 w-[60px] h-[60px] rounded-full shadow-xl z-50 flex items-center justify-center transition-transform hover:scale-110"
        style={{ backgroundColor: BRAND.colors.primary }}
        aria-label="Open chat"
      >
        {isOpen ? (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="white">
            <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>
          </svg>
        ) : (
          <svg width="28" height="28" viewBox="0 0 24 24" fill="white">
            <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H6l-2 2V4h16v12z"/>
          </svg>
        )}
      </button>
    </>
  );
}
