'use client';

import { useState } from 'react';
import { BRAND } from '@/lib/brand-tokens';

export default function ChatbotDemo() {
  const [isOpen, setIsOpen] = useState(false);
  const [userMessage, setUserMessage] = useState('');
  const [messages, setMessages] = useState<{ role: 'bot' | 'user'; text: string }[]>([
    {
      role: 'bot',
      text: "Hi! I'm West Endz Hair Salon's AI assistant. I can help you with booking appointments, questions about our services, and more. How can I help? \u{1F916}",
    },
  ]);

  const handleSend = () => {
    if (!userMessage.trim()) return;
    const newMessages = [
      ...messages,
      { role: 'user' as const, text: userMessage },
      {
        role: 'bot' as const,
        text: "This is a demo preview. Once activated, I'll be powered by AI to handle real bookings, answer FAQs, and assist your customers 24/7 in English.",
      },
    ];
    setMessages(newMessages);
    setUserMessage('');
  };

  return (
    <>
      {/* Floating Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-50 rounded-full flex items-center justify-center transition-transform hover:scale-110"
        style={{
          width: '60px',
          height: '60px',
          backgroundColor: BRAND.colors.primary,
          boxShadow: BRAND.elevation.lg,
        }}
        aria-label="Open AI chat assistant"
      >
        <svg width="28" height="28" viewBox="0 0 24 24" fill="white">
          <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H6l-2 2V4h16v12z" />
        </svg>
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div
          className="fixed bottom-20 right-6 z-50 flex flex-col overflow-hidden"
          style={{
            width: '380px',
            height: '500px',
            borderRadius: BRAND.spacing.radiusCards,
            boxShadow: BRAND.elevation.xl,
            backgroundColor: BRAND.colors.bgCard,
          }}
        >
          {/* Chat Header */}
          <div
            className="flex items-center justify-between px-4 py-3"
            style={{ backgroundColor: BRAND.colors.primary }}
          >
            <span className="text-white text-sm font-semibold" style={{ fontFamily: `${BRAND.fonts.body}` }}>
              AI Assistant — West Endz Hair Salon
            </span>
            <button
              onClick={() => setIsOpen(false)}
              className="text-white/80 hover:text-white"
              aria-label="Close chat"
            >
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                <path d="M14 4L4 14M4 4l10 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              </svg>
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 flex flex-col gap-3">
            {messages.map((msg, i) => (
              <div
                key={i}
                className={`max-w-[85%] px-3 py-2 text-sm leading-relaxed ${
                  msg.role === 'bot' ? 'self-start' : 'self-end'
                }`}
                style={{
                  backgroundColor: msg.role === 'bot' ? BRAND.colors.bgAlt : BRAND.colors.primary,
                  color: msg.role === 'bot' ? BRAND.colors.textBody : '#FFFFFF',
                  borderRadius: '12px',
                  fontFamily: `${BRAND.fonts.body}`,
                }}
              >
                {msg.text}
              </div>
            ))}
          </div>

          {/* Input */}
          <div className="border-t px-3 py-3 flex gap-2" style={{ borderColor: BRAND.colors.bgAlt }}>
            <input
              type="text"
              value={userMessage}
              onChange={(e) => setUserMessage(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSend()}
              placeholder="Type a message..."
              className="flex-1 px-3 py-2 text-sm rounded-lg border outline-none focus:ring-2"
              style={{
                borderColor: BRAND.colors.bgAlt,
                fontFamily: `${BRAND.fonts.body}`,
                color: BRAND.colors.textBody,
              }}
            />
            <button
              onClick={handleSend}
              className="px-4 py-2 text-sm font-semibold text-white rounded-lg transition-opacity hover:opacity-90"
              style={{ backgroundColor: BRAND.colors.primary }}
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
