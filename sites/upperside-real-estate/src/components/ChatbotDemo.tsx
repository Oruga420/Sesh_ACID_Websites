'use client';

import { useState } from 'react';
import { BRAND } from '@/lib/brand-tokens';

export default function ChatbotDemo() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{ text: string; isUser: boolean }[]>([
    {
      text: `Hi! I'm ${BRAND.business.shortName}'s AI assistant. I can help you find properties, connect with an agent, or answer questions about buying and selling in the GTA. How can I help?`,
      isUser: false,
    },
  ]);
  const [input, setInput] = useState('');

  const handleSend = () => {
    if (!input.trim()) return;
    const newMessages = [
      ...messages,
      { text: input, isUser: true },
      {
        text: "This is a demo preview. Once activated, I'll be powered by AI to handle property inquiries, schedule viewings, answer FAQs, and assist your clients 24/7.",
        isUser: false,
      },
    ];
    setMessages(newMessages);
    setInput('');
  };

  return (
    <>
      {/* Chat Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-50 rounded-full shadow-lg flex items-center justify-center transition-transform duration-300 hover:scale-110"
        style={{
          width: '60px',
          height: '60px',
          backgroundColor: BRAND.colors.gold,
        }}
        aria-label="Open chat"
      >
        <svg width="28" height="28" viewBox="0 0 24 24" fill="white">
          <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H6l-2 2V4h16v12z"/>
        </svg>
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div
          className="fixed bottom-20 right-6 z-50 shadow-2xl flex flex-col overflow-hidden"
          style={{
            width: '380px',
            height: '500px',
            borderRadius: '12px',
            backgroundColor: '#ffffff',
            maxWidth: 'calc(100vw - 48px)',
            maxHeight: 'calc(100vh - 120px)',
          }}
        >
          {/* Header */}
          <div
            className="flex items-center justify-between px-4 py-3"
            style={{ backgroundColor: BRAND.colors.gold }}
          >
            <span className="text-white font-heading font-semibold text-sm">
              AI Assistant — {BRAND.business.shortName}
            </span>
            <button onClick={() => setIsOpen(false)} className="text-white opacity-80 hover:opacity-100" aria-label="Close chat">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>
              </svg>
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-3" style={{ backgroundColor: '#f9f9f9' }}>
            {messages.map((msg, i) => (
              <div key={i} className={`flex ${msg.isUser ? 'justify-end' : 'justify-start'}`}>
                <div
                  className="max-w-[80%] px-3 py-2 text-sm"
                  style={{
                    backgroundColor: msg.isUser ? BRAND.colors.gold : '#ffffff',
                    color: msg.isUser ? '#ffffff' : BRAND.colors.textBody,
                    borderRadius: msg.isUser ? '12px 12px 0 12px' : '12px 12px 12px 0',
                    boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
                  }}
                >
                  {msg.text}
                </div>
              </div>
            ))}
          </div>

          {/* Input */}
          <div className="p-3 border-t" style={{ borderColor: BRAND.colors.border }}>
            <div className="flex gap-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Type a message..."
                className="flex-1 px-3 py-2 text-sm border rounded-lg outline-none focus:ring-1"
                style={{ borderColor: BRAND.colors.border }}
              />
              <button
                onClick={handleSend}
                className="px-3 py-2 rounded-lg text-white text-sm font-medium"
                style={{ backgroundColor: BRAND.colors.gold }}
              >
                Send
              </button>
            </div>
            <p className="text-center text-xs mt-2" style={{ color: BRAND.colors.textMuted }}>
              Powered by AI &middot; Sesh
            </p>
          </div>
        </div>
      )}
    </>
  );
}
