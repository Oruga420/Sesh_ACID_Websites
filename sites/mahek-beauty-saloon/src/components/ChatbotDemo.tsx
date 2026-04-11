'use client';

import { useState } from 'react';
import { BRAND } from '@/lib/brand-tokens';

export default function ChatbotDemo() {
  const [isOpen, setIsOpen] = useState(false);
  const [userMsg, setUserMsg] = useState('');
  const [messages, setMessages] = useState<{ role: 'bot' | 'user'; text: string }[]>([
    {
      role: 'bot',
      text: `Hi! I'm ${BRAND.business.name}'s AI assistant. I can help you with bookings, service info, and questions about our salon. How can I help?`,
    },
  ]);

  const handleSend = () => {
    if (!userMsg.trim()) return;
    const newMessages = [
      ...messages,
      { role: 'user' as const, text: userMsg },
      {
        role: 'bot' as const,
        text: "This is a demo preview. Once activated, I'll be powered by AI to handle real bookings, answer FAQs, and assist your customers 24/7.",
      },
    ];
    setMessages(newMessages);
    setUserMsg('');
  };

  return (
    <>
      {/* Chat Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed right-5 bottom-5 z-50 flex h-[60px] w-[60px] items-center justify-center shadow-lg transition-transform hover:scale-105"
        style={{ backgroundColor: BRAND.colors.secondary, borderRadius: '50%' }}
        aria-label="Open chat"
      >
        <svg width="28" height="28" viewBox="0 0 24 24" fill="white">
          <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H6l-2 2V4h16v12z" />
        </svg>
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div
          className="fixed right-5 bottom-20 z-50 flex flex-col overflow-hidden shadow-2xl"
          style={{ width: '380px', height: '500px', borderRadius: '0px', maxWidth: 'calc(100vw - 40px)' }}
        >
          {/* Header */}
          <div
            className="flex items-center justify-between px-4 py-3"
            style={{ backgroundColor: BRAND.colors.secondary }}
          >
            <span className="text-sm font-semibold text-white" style={{ fontFamily: 'var(--font-heading)' }}>
              AI Assistant — {BRAND.business.name}
            </span>
            <button onClick={() => setIsOpen(false)} className="text-white/80 hover:text-white" aria-label="Close chat">
              ✕
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 space-y-3 overflow-y-auto bg-brand-bg-alt p-4">
            {messages.map((msg, i) => (
              <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div
                  className={`max-w-[80%] px-3 py-2 text-sm ${
                    msg.role === 'user'
                      ? 'bg-brand-primary text-white'
                      : 'bg-brand-bg-card text-brand-text-body shadow-sm'
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}
          </div>

          {/* Input */}
          <div className="flex items-center gap-2 border-t bg-white px-3 py-2">
            <input
              type="text"
              value={userMsg}
              onChange={(e) => setUserMsg(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSend()}
              placeholder="Type a message..."
              className="flex-1 border border-brand-text-muted/30 px-3 py-2 text-sm text-brand-text-body outline-none focus:border-brand-secondary"
              style={{ fontFamily: 'var(--font-body)' }}
            />
            <button
              onClick={handleSend}
              className="px-3 py-2 text-sm font-semibold text-white"
              style={{ backgroundColor: BRAND.colors.secondary }}
            >
              Send
            </button>
          </div>

          {/* Powered by */}
          <div className="bg-white py-1.5 text-center text-[10px] text-brand-text-muted">
            Powered by AI &middot; Sesh
          </div>
        </div>
      )}
    </>
  );
}
