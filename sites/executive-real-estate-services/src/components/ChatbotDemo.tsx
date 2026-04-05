'use client';

import { useState } from 'react';
import { BRAND } from '@/lib/brand-tokens';

export default function ChatbotDemo() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{ text: string; from: 'bot' | 'user' }[]>([
    {
      text: `Hi! I'm Executive Real Estate's AI assistant. I can help you with property searches, booking viewings, mortgage questions, and general real estate inquiries. How can I help? 🏠`,
      from: 'bot',
    },
  ]);
  const [input, setInput] = useState('');

  const handleSend = () => {
    if (!input.trim()) return;
    const userMsg = input.trim();
    setInput('');
    setMessages((prev) => [
      ...prev,
      { text: userMsg, from: 'user' },
      {
        text: 'This is a demo preview. Once activated, I\'ll be powered by AI to handle real inquiries, schedule viewings, answer property questions, and assist your clients 24/7.',
        from: 'bot',
      },
    ]);
  };

  return (
    <>
      {/* Chat Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-50 w-[60px] h-[60px] rounded-full shadow-xl flex items-center justify-center hover:scale-105 transition-transform duration-300"
        style={{ backgroundColor: BRAND.colors.primary }}
        aria-label="Open chat"
      >
        <svg width="28" height="28" viewBox="0 0 24 24" fill="white">
          <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H6l-2 2V4h16v12z" />
        </svg>
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 z-50 w-[380px] max-w-[calc(100vw-2rem)] rounded-xl shadow-2xl overflow-hidden font-body"
             style={{ height: '500px', border: `1px solid ${BRAND.colors.border}` }}>
          {/* Header */}
          <div className="flex items-center justify-between px-4 py-3" style={{ backgroundColor: BRAND.colors.primary }}>
            <span className="text-white font-heading font-semibold text-sm">
              AI Assistant — {BRAND.business.name}
            </span>
            <button onClick={() => setIsOpen(false)} className="text-white/80 hover:text-white text-lg" aria-label="Close chat">
              ✕
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-3 bg-white" style={{ height: 'calc(500px - 110px)' }}>
            {messages.map((msg, i) => (
              <div key={i} className={`flex ${msg.from === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div
                  className={`max-w-[80%] px-4 py-2.5 rounded-xl text-sm leading-relaxed ${
                    msg.from === 'user'
                      ? 'text-white rounded-br-sm'
                      : 'bg-gray-100 text-brand-textBody rounded-bl-sm'
                  }`}
                  style={msg.from === 'user' ? { backgroundColor: BRAND.colors.primary } : undefined}
                >
                  {msg.text}
                </div>
              </div>
            ))}
          </div>

          {/* Input */}
          <div className="flex items-center gap-2 p-3 border-t bg-white" style={{ borderColor: BRAND.colors.border }}>
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSend()}
              placeholder="Type a message..."
              className="flex-1 px-3 py-2 text-sm border rounded-lg focus:outline-none focus:ring-2 font-body"
              style={{ borderColor: BRAND.colors.border, outlineColor: BRAND.colors.primary }}
            />
            <button
              onClick={handleSend}
              className="px-4 py-2 text-white text-sm font-semibold rounded-lg transition-colors"
              style={{ backgroundColor: BRAND.colors.primary }}
            >
              Send
            </button>
          </div>

          {/* Powered by */}
          <div className="text-center py-1.5 bg-gray-50 text-[10px] text-gray-400">
            Powered by AI &middot; Sesh
          </div>
        </div>
      )}
    </>
  );
}
