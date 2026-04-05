'use client';

import { useState } from 'react';
import { BRAND } from '@/lib/brand-tokens';

export default function ChatbotDemo() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      role: 'bot',
      text: `Hi! I'm ${BRAND.business.name}'s AI assistant. I can help you with mortgage questions, pre-approval inquiries, and finding the right lending solution for your situation. How can I help?`,
    },
  ]);
  const [input, setInput] = useState('');

  const handleSend = () => {
    if (!input.trim()) return;
    const newMessages = [
      ...messages,
      { role: 'user' as const, text: input },
      {
        role: 'bot' as const,
        text: "This is a demo preview. Once activated, I'll be powered by AI to handle real mortgage inquiries, answer FAQs about credit requirements, and assist your clients 24/7 in English.",
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
        className="fixed bottom-6 right-6 z-50 rounded-full shadow-lg flex items-center justify-center transition-transform hover:scale-105"
        style={{
          width: 60,
          height: 60,
          backgroundColor: BRAND.colors.primary,
        }}
        aria-label="Open chat"
      >
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
        </svg>
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div
          className="fixed bottom-24 right-6 z-50 rounded-xl shadow-2xl overflow-hidden flex flex-col"
          style={{
            width: 380,
            height: 500,
            maxWidth: 'calc(100vw - 48px)',
            maxHeight: 'calc(100vh - 140px)',
            backgroundColor: BRAND.colors.bgCard,
            border: `1px solid ${BRAND.colors.border}`,
          }}
        >
          {/* Header */}
          <div
            className="flex items-center justify-between px-4 py-3"
            style={{ backgroundColor: BRAND.colors.primary }}
          >
            <span className="text-sm font-semibold" style={{ color: BRAND.colors.textLight }}>
              AI Assistant — AIAC Mortgages
            </span>
            <button onClick={() => setIsOpen(false)} aria-label="Close chat">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                <path d="M18 6L6 18M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-3">
            {messages.map((msg, i) => (
              <div
                key={i}
                className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className="max-w-[80%] px-3 py-2 rounded-lg text-sm"
                  style={{
                    backgroundColor: msg.role === 'user' ? BRAND.colors.primary : BRAND.colors.bgAlt,
                    color: msg.role === 'user' ? BRAND.colors.textLight : BRAND.colors.textBody,
                    borderRadius: BRAND.spacing.radiusCards,
                  }}
                >
                  {msg.text}
                </div>
              </div>
            ))}
          </div>

          {/* Input */}
          <div className="border-t p-3 flex gap-2" style={{ borderColor: BRAND.colors.border }}>
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSend()}
              placeholder="Ask about mortgage options..."
              className="flex-1 px-3 py-2 text-sm rounded border outline-none focus:ring-2"
              style={{
                borderColor: BRAND.colors.border,
                borderRadius: BRAND.spacing.radiusButtons,
                color: BRAND.colors.textBody,
              }}
            />
            <button
              onClick={handleSend}
              className="px-4 py-2 rounded text-sm font-semibold transition-opacity hover:opacity-90"
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
          <div className="text-center py-1.5 text-xs" style={{ color: BRAND.colors.textMuted }}>
            Powered by AI &middot; Sesh
          </div>
        </div>
      )}
    </>
  );
}
