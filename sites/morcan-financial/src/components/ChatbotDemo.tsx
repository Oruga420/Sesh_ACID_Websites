'use client';

import { useState } from 'react';
import { BRAND } from '@/lib/brand-tokens';

export default function ChatbotDemo() {
  const [isOpen, setIsOpen] = useState(false);
  const [userMessage, setUserMessage] = useState('');
  const [messages, setMessages] = useState<Array<{ role: 'bot' | 'user'; text: string }>>([
    {
      role: 'bot',
      text: "Hi! I'm MorCan Financial's AI assistant. I can help you with mortgage questions, pre-approvals, and connecting you with Joe Taibi's team. How can I help? 🏠",
    },
  ]);

  const handleSend = () => {
    if (!userMessage.trim()) return;
    const newMessages = [
      ...messages,
      { role: 'user' as const, text: userMessage },
      {
        role: 'bot' as const,
        text: "This is a demo preview. Once activated, I'll be powered by AI to handle real mortgage inquiries, answer FAQs about rates and programs, and assist your clients 24/7.",
      },
    ];
    setMessages(newMessages);
    setUserMessage('');
  };

  return (
    <>
      {/* Chat Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-50 rounded-full shadow-lg flex items-center justify-center transition-transform hover:scale-105"
        style={{
          width: '60px',
          height: '60px',
          backgroundColor: BRAND.colors.primary,
        }}
        aria-label="Open chat assistant"
      >
        <svg width="28" height="28" viewBox="0 0 24 24" fill="white">
          <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H5.17L4 17.17V4h16v12z" />
          <path d="M7 9h2v2H7zm4 0h2v2h-2zm4 0h2v2h-2z" />
        </svg>
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div
          className="fixed bottom-20 right-6 z-50 rounded-xl shadow-2xl overflow-hidden flex flex-col"
          style={{ width: '380px', height: '500px', maxHeight: '80vh' }}
        >
          {/* Header */}
          <div
            className="flex items-center justify-between px-4 py-3 shrink-0"
            style={{ backgroundColor: BRAND.colors.primary }}
          >
            <span className="text-white font-semibold text-sm">AI Assistant — MorCan Financial</span>
            <button
              onClick={() => setIsOpen(false)}
              className="text-white/80 hover:text-white"
              aria-label="Close chat"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
              </svg>
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-3" style={{ backgroundColor: '#F8FAFC' }}>
            {messages.map((msg, i) => (
              <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div
                  className="max-w-[80%] rounded-lg px-3 py-2 text-sm"
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
          <div className="shrink-0 border-t bg-white p-3 flex gap-2" style={{ borderColor: BRAND.colors.border }}>
            <input
              type="text"
              value={userMessage}
              onChange={(e) => setUserMessage(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSend()}
              placeholder="Type a message..."
              className="flex-1 text-sm px-3 py-2 rounded border outline-none focus:ring-2"
              style={{
                borderColor: BRAND.colors.border,
              }}
            />
            <button
              onClick={handleSend}
              className="px-3 py-2 rounded text-white text-sm font-medium"
              style={{ backgroundColor: BRAND.colors.primary, borderRadius: BRAND.spacing.radiusButtons }}
            >
              Send
            </button>
          </div>

          {/* Powered by */}
          <div className="text-center py-1.5 text-xs bg-white" style={{ color: BRAND.colors.textMuted }}>
            Powered by AI &middot; Sesh
          </div>
        </div>
      )}
    </>
  );
}
