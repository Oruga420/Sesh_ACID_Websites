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
      text: "Hi! I'm Diva Nails & Head Spa's AI assistant. I can help you book appointments, answer questions about our services, and more. How can I help?",
    },
    {
      role: 'assistant',
      text: 'Xin chao! Toi la tro ly AI cua Diva Nails & Head Spa. Toi co the giup ban dat lich hen va tra loi cac cau hoi.',
    },
  ]);
  const endRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleSend = () => {
    if (!input.trim()) return;
    const userMsg = input.trim();
    setInput('');
    const newMessages: Message[] = [
      ...messages,
      { role: 'user', text: userMsg },
      {
        role: 'assistant',
        text: "This is a demo preview. Once activated, I'll be powered by AI to handle real bookings, answer FAQs, and assist your customers 24/7 in English and Vietnamese.",
      },
    ];
    setMessages(newMessages);
  };

  return (
    <>
      {/* Floating Button */}
      <button
        onClick={() => setOpen(!open)}
        className="fixed bottom-6 right-6 z-50 rounded-full flex items-center justify-center shadow-lg transition-transform duration-200 hover:scale-105"
        style={{
          width: '60px',
          height: '60px',
          backgroundColor: BRAND.colors.primary,
        }}
        aria-label="Open chat"
      >
        {open ? (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="white">
            <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
          </svg>
        ) : (
          <svg width="28" height="28" viewBox="0 0 24 24" fill="white">
            <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H6l-2 2V4h16v12z" />
          </svg>
        )}
      </button>

      {/* Chat Window */}
      {open && (
        <div
          className="fixed bottom-24 right-6 z-50 flex flex-col shadow-2xl overflow-hidden"
          style={{
            width: '380px',
            height: '500px',
            borderRadius: '16px',
            maxWidth: 'calc(100vw - 48px)',
            maxHeight: 'calc(100vh - 140px)',
          }}
        >
          {/* Header */}
          <div
            className="flex items-center justify-between px-5 py-4"
            style={{ backgroundColor: BRAND.colors.primary }}
          >
            <div>
              <p className="text-white font-semibold text-sm">AI Assistant</p>
              <p className="text-white/80 text-xs">Diva Nails &amp; Head Spa</p>
            </div>
            <button
              onClick={() => setOpen(false)}
              className="text-white/70 hover:text-white transition-colors"
              aria-label="Close chat"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
              </svg>
            </button>
          </div>

          {/* Messages */}
          <div
            className="flex-1 overflow-y-auto p-4 space-y-3"
            style={{ backgroundColor: BRAND.colors.bgMain }}
          >
            {messages.map((msg, i) => (
              <div
                key={i}
                className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className="max-w-[80%] rounded-2xl px-4 py-2.5 text-sm"
                  style={{
                    backgroundColor: msg.role === 'user' ? BRAND.colors.primary : '#FFFFFF',
                    color: msg.role === 'user' ? '#FFFFFF' : BRAND.colors.textBody,
                    boxShadow: msg.role === 'assistant' ? '0 1px 4px rgba(0,0,0,0.06)' : 'none',
                  }}
                >
                  {msg.text}
                </div>
              </div>
            ))}
            <div ref={endRef} />
          </div>

          {/* Input */}
          <div
            className="flex items-center gap-2 p-3 border-t"
            style={{ backgroundColor: '#FFFFFF', borderColor: BRAND.colors.bgAlt }}
          >
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSend()}
              placeholder="Type a message..."
              className="flex-1 text-sm outline-none px-3 py-2 rounded-full"
              style={{
                backgroundColor: BRAND.colors.bgAlt,
                color: BRAND.colors.textBody,
              }}
            />
            <button
              onClick={handleSend}
              className="rounded-full p-2 transition-opacity hover:opacity-80"
              style={{ backgroundColor: BRAND.colors.primary }}
              aria-label="Send"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="white">
                <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" />
              </svg>
            </button>
          </div>

          {/* Powered By */}
          <div className="text-center py-1.5" style={{ backgroundColor: '#FFFFFF' }}>
            <p className="text-[10px]" style={{ color: BRAND.colors.textMuted }}>
              Powered by AI &middot; Sesh
            </p>
          </div>
        </div>
      )}
    </>
  );
}
