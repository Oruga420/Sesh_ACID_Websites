'use client';

import { useState, useRef, useEffect } from 'react';
import { BRAND } from '@/lib/brand-tokens';

interface Message {
  role: 'assistant' | 'user';
  text: string;
}

export default function ChatbotDemo() {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<Message[]>([
    {
      role: 'assistant',
      text: `Hi! I'm ${BRAND.business.name}'s AI assistant. I can help you with appointments, service info, and questions about our salon. How can I help?`,
    },
  ]);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleSend = () => {
    if (!input.trim()) return;
    const userMsg: Message = { role: 'user', text: input.trim() };
    const demoReply: Message = {
      role: 'assistant',
      text: "This is a demo preview. Once activated, I'll be powered by AI to handle real appointments, answer FAQs, and assist your customers 24/7 in English.",
    };
    setMessages((prev) => [...prev, userMsg, demoReply]);
    setInput('');
  };

  return (
    <>
      {/* Floating button */}
      <button
        onClick={() => setOpen(!open)}
        className="fixed bottom-6 right-6 z-50 w-[60px] h-[60px] rounded-full flex items-center justify-center shadow-lg transition-transform hover:scale-105"
        style={{
          backgroundColor: BRAND.colors.primary,
          boxShadow: '0 4px 20px rgba(194,24,91,0.35)',
        }}
        aria-label="Open chat"
      >
        {open ? (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#FFF" strokeWidth="2">
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        ) : (
          <svg width="28" height="28" viewBox="0 0 24 24" fill="#FFF">
            <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H6l-2 2V4h16v12z" />
          </svg>
        )}
      </button>

      {/* Chat window */}
      {open && (
        <div
          className="fixed bottom-24 right-6 z-50 w-[360px] rounded-2xl overflow-hidden shadow-2xl animate-fade-in-up"
          style={{ height: '480px', boxShadow: '0 12px 40px rgba(45,27,48,0.2)' }}
        >
          {/* Header */}
          <div
            className="px-5 py-4 flex items-center justify-between"
            style={{ backgroundColor: BRAND.colors.primary }}
          >
            <div>
              <p className="text-white font-body font-semibold text-sm">
                AI Assistant
              </p>
              <p className="text-white/70 text-xs">{BRAND.business.name}</p>
            </div>
            <button
              onClick={() => setOpen(false)}
              className="text-white/70 hover:text-white transition-colors"
              aria-label="Close chat"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>
          </div>

          {/* Messages */}
          <div
            className="flex-1 overflow-y-auto px-4 py-4 space-y-3"
            style={{
              backgroundColor: BRAND.colors.bgMain,
              height: 'calc(480px - 64px - 64px)',
            }}
          >
            {messages.map((msg, i) => (
              <div
                key={i}
                className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className="max-w-[80%] px-4 py-2.5 rounded-xl text-sm"
                  style={{
                    backgroundColor: msg.role === 'user' ? BRAND.colors.primary : '#FFFFFF',
                    color: msg.role === 'user' ? '#FFFFFF' : BRAND.colors.textBody,
                    borderRadius: '16px',
                    boxShadow: msg.role === 'assistant' ? '0 1px 4px rgba(45,27,48,0.06)' : 'none',
                  }}
                >
                  {msg.text}
                </div>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div
            className="flex items-center gap-2 px-4 py-3 border-t"
            style={{
              backgroundColor: '#FFFFFF',
              borderTopColor: BRAND.colors.bgAlt,
            }}
          >
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSend()}
              placeholder="Type a message..."
              className="flex-1 text-sm px-3 py-2 rounded-lg outline-none"
              style={{
                backgroundColor: BRAND.colors.bgAlt,
                color: BRAND.colors.textBody,
              }}
            />
            <button
              onClick={handleSend}
              className="p-2 rounded-lg transition-colors"
              style={{ backgroundColor: BRAND.colors.primary }}
              aria-label="Send message"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="#FFF">
                <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" />
              </svg>
            </button>
          </div>

          {/* Powered by */}
          <div
            className="text-center py-1.5 text-[10px]"
            style={{
              backgroundColor: '#FFFFFF',
              color: BRAND.colors.textMuted,
            }}
          >
            Powered by AI &middot; Sesh
          </div>
        </div>
      )}
    </>
  );
}
