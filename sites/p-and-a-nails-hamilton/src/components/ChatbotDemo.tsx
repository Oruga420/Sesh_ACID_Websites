'use client';

import { useState } from 'react';
import { BRAND } from '@/lib/brand-tokens';

export default function ChatbotDemo() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Array<{ from: 'bot' | 'user'; text: string }>>([
    {
      from: 'bot',
      text: `Hi! I'm P & A Nails' AI assistant. I can help you with booking appointments, service info, and questions about our salon. How can I help?`,
    },
  ]);
  const [input, setInput] = useState('');

  function handleSend() {
    if (!input.trim()) return;
    const userMsg = input.trim();
    setMessages((prev) => [
      ...prev,
      { from: 'user', text: userMsg },
      {
        from: 'bot',
        text: "This is a demo preview. Once activated, I'll be powered by AI to handle real bookings, answer FAQs, and assist your customers 24/7.",
      },
    ]);
    setInput('');
  }

  return (
    <>
      {/* Floating button */}
      <button
        onClick={() => setOpen(!open)}
        className="fixed right-5 bottom-5 z-50 flex h-[60px] w-[60px] items-center justify-center rounded-full shadow-lg transition-transform hover:scale-105"
        style={{ backgroundColor: BRAND.colors.primary }}
        aria-label="Open chat"
      >
        <svg width="28" height="28" viewBox="0 0 24 24" fill="#ffffff">
          <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H6l-2 2V4h16v12z" />
        </svg>
      </button>

      {/* Chat window */}
      {open && (
        <div
          className="fixed right-5 bottom-20 z-50 flex w-[360px] flex-col overflow-hidden rounded-lg shadow-2xl"
          style={{ height: '480px' }}
        >
          {/* Header */}
          <div
            className="flex items-center justify-between px-4 py-3"
            style={{ backgroundColor: BRAND.colors.primary }}
          >
            <span className="text-sm font-bold text-white">
              AI Assistant — P &amp; A Nails
            </span>
            <button
              onClick={() => setOpen(false)}
              className="text-white/80 hover:text-white"
              aria-label="Close chat"
            >
              &#10005;
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 space-y-3 overflow-y-auto bg-white p-4">
            {messages.map((msg, i) => (
              <div
                key={i}
                className={`max-w-[80%] rounded-lg px-3 py-2 text-sm ${
                  msg.from === 'bot'
                    ? 'bg-brand-secondary text-brand-text-body'
                    : 'ml-auto bg-brand-primary text-white'
                }`}
              >
                {msg.text}
              </div>
            ))}
          </div>

          {/* Input */}
          <div className="flex border-t border-gray-200 bg-white p-3">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSend()}
              placeholder="Type a message..."
              className="flex-1 rounded-l-md border border-gray-200 px-3 py-2 text-sm text-brand-text-body outline-none focus:border-brand-primary"
            />
            <button
              onClick={handleSend}
              className="rounded-r-md px-4 text-sm font-bold text-white"
              style={{ backgroundColor: BRAND.colors.primary }}
            >
              Send
            </button>
          </div>

          {/* Powered by */}
          <div className="bg-white px-4 pb-2 text-center text-[11px] text-brand-text-muted">
            Powered by AI &middot; Sesh
          </div>
        </div>
      )}
    </>
  );
}
