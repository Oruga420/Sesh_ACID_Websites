'use client';

import { useState } from 'react';
import { BRAND } from '@/lib/brand-tokens';

export default function ChatbotDemo() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{ text: string; sender: 'bot' | 'user' }[]>([
    {
      text: "Hi! I'm Niro's AI assistant. I can help you with property searches, home evaluations, booking consultations, and answering questions about buying or selling in the GTA. How can I help?",
      sender: 'bot',
    },
  ]);
  const [input, setInput] = useState('');

  const handleSend = () => {
    if (!input.trim()) return;
    const newMessages = [
      ...messages,
      { text: input, sender: 'user' as const },
      {
        text: "This is a demo preview. Once activated, I'll be powered by AI to handle real property inquiries, schedule showings, answer FAQs about buying and selling, and assist your clients 24/7.",
        sender: 'bot' as const,
      },
    ];
    setMessages(newMessages);
    setInput('');
  };

  return (
    <>
      {/* Floating Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-50 flex items-center justify-center rounded-full shadow-lg transition-transform hover:scale-105"
        style={{
          width: '60px',
          height: '60px',
          backgroundColor: BRAND.colors.primary,
        }}
        aria-label="Open chat"
      >
        <svg width="28" height="28" viewBox="0 0 24 24" fill="white">
          <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H5.17L4 17.17V4h16v12z"/>
          <path d="M7 9h2v2H7zm4 0h2v2h-2zm4 0h2v2h-2z"/>
        </svg>
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div
          className="fixed bottom-24 right-6 z-50 flex flex-col rounded-lg shadow-2xl overflow-hidden"
          style={{ width: '380px', height: '500px', maxWidth: 'calc(100vw - 48px)', maxHeight: 'calc(100vh - 140px)' }}
        >
          {/* Header */}
          <div className="flex items-center justify-between px-4 py-3" style={{ backgroundColor: BRAND.colors.primary }}>
            <span className="text-sm font-semibold" style={{ color: BRAND.colors.textLight, fontFamily: BRAND.fonts.heading }}>
              AI Assistant — Niro Tharmakulasingam
            </span>
            <button onClick={() => setIsOpen(false)} className="hover:opacity-80" style={{ color: BRAND.colors.textLight }} aria-label="Close chat">
              &#x2715;
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-3" style={{ backgroundColor: BRAND.colors.bgAlt }}>
            {messages.map((msg, i) => (
              <div key={i} className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div
                  className="max-w-[80%] rounded-lg px-4 py-2 text-sm"
                  style={{
                    backgroundColor: msg.sender === 'user' ? BRAND.colors.primary : BRAND.colors.bgCard,
                    color: msg.sender === 'user' ? BRAND.colors.textLight : BRAND.colors.textBody,
                    border: msg.sender === 'bot' ? `1px solid ${BRAND.colors.border}` : 'none',
                  }}
                >
                  {msg.text}
                </div>
              </div>
            ))}
          </div>

          {/* Input */}
          <div className="flex items-center gap-2 px-4 py-3" style={{ backgroundColor: BRAND.colors.bgCard, borderTop: `1px solid ${BRAND.colors.border}` }}>
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSend()}
              placeholder="Type a message..."
              className="flex-1 text-sm px-3 py-2 rounded-md outline-none"
              style={{
                border: `1px solid ${BRAND.colors.border}`,
                color: BRAND.colors.textBody,
                fontFamily: BRAND.fonts.body,
              }}
            />
            <button
              onClick={handleSend}
              className="px-4 py-2 rounded-md text-sm font-semibold transition-opacity hover:opacity-90"
              style={{
                backgroundColor: BRAND.colors.primary,
                color: BRAND.colors.textLight,
                borderRadius: BRAND.spacing.radiusButtons,
              }}
            >
              Send
            </button>
          </div>

          {/* Powered By */}
          <div className="text-center py-1.5" style={{ backgroundColor: BRAND.colors.bgCard, borderTop: `1px solid ${BRAND.colors.border}` }}>
            <span className="text-xs" style={{ color: BRAND.colors.textMuted }}>
              Powered by AI &middot; Sesh
            </span>
          </div>
        </div>
      )}
    </>
  );
}
