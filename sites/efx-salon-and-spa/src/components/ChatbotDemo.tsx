'use client';

import { useState } from 'react';
import { BRAND } from '@/lib/brand-tokens';

export default function ChatbotDemo() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{ text: string; from: 'bot' | 'user' }[]>([
    {
      text: "Hi! I'm EFX Salon and Spa's AI assistant. I can help you with booking appointments, questions about our services, and more. How can I help?",
      from: 'bot',
    },
  ]);
  const [input, setInput] = useState('');

  const handleSend = () => {
    if (!input.trim()) return;
    const newMessages = [
      ...messages,
      { text: input, from: 'user' as const },
      {
        text: "This is a demo preview. Once activated, I'll be powered by AI to handle real bookings, answer FAQs, and assist your customers 24/7.",
        from: 'bot' as const,
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
        className="fixed bottom-6 right-6 z-50 w-[60px] h-[60px] rounded-full shadow-lg flex items-center justify-center transition-transform hover:scale-105"
        style={{ backgroundColor: BRAND.colors.primary }}
        aria-label="Open chat assistant"
      >
        <svg width="28" height="28" viewBox="0 0 24 24" fill="white">
          <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H5.17L4 17.17V4h16v12z" />
          <path d="M7 9h2v2H7zm4 0h2v2h-2zm4 0h2v2h-2z" />
        </svg>
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 z-50 w-[380px] max-h-[500px] bg-white rounded-card shadow-2xl flex flex-col overflow-hidden border border-gray-100">
          {/* Chat Header */}
          <div
            className="px-5 py-4 flex items-center justify-between"
            style={{ backgroundColor: BRAND.colors.primary }}
          >
            <span className="text-white font-heading text-sm font-semibold">
              AI Assistant — EFX Salon and Spa
            </span>
            <button
              onClick={() => setIsOpen(false)}
              className="text-white/80 hover:text-white text-lg"
              aria-label="Close chat"
            >
              ✕
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-3 max-h-[340px]">
            {messages.map((msg, i) => (
              <div
                key={i}
                className={`max-w-[85%] px-4 py-2.5 text-sm font-body leading-relaxed ${
                  msg.from === 'bot'
                    ? 'bg-gray-100 text-brand-textBody rounded-tr-xl rounded-br-xl rounded-bl-xl'
                    : 'bg-brand-primary text-white rounded-tl-xl rounded-bl-xl rounded-br-xl ml-auto'
                }`}
                style={
                  msg.from === 'user'
                    ? { backgroundColor: BRAND.colors.primary }
                    : undefined
                }
              >
                {msg.text}
              </div>
            ))}
          </div>

          {/* Input */}
          <div className="border-t border-gray-100 px-4 py-3 flex gap-2">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSend()}
              placeholder="Type a message..."
              className="flex-1 px-3 py-2 text-sm font-body border border-gray-200 rounded focus:outline-none focus:border-brand-primary"
            />
            <button
              onClick={handleSend}
              className="px-4 py-2 text-sm font-heading font-semibold text-white rounded"
              style={{
                backgroundColor: BRAND.colors.primary,
                borderRadius: BRAND.spacing.radiusButtons,
              }}
            >
              Send
            </button>
          </div>

          {/* Powered By */}
          <div className="px-4 pb-2 text-center">
            <span className="text-[10px] text-brand-textMuted font-body">
              Powered by AI &middot; Sesh
            </span>
          </div>
        </div>
      )}
    </>
  );
}
