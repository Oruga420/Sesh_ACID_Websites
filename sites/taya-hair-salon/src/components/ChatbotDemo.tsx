'use client';

import { useState } from 'react';
import { BRAND } from '@/lib/brand-tokens';

export default function ChatbotDemo() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{ text: string; isUser: boolean }[]>([]);
  const [input, setInput] = useState('');
  const [showInitial, setShowInitial] = useState(true);

  const handleSend = () => {
    if (!input.trim()) return;
    const userMsg = input.trim();
    setInput('');
    setMessages((prev) => [
      ...prev,
      { text: userMsg, isUser: true },
      {
        text: "This is a demo preview. Once activated, I'll be powered by AI to handle real bookings, answer FAQs, and assist your customers 24/7 in English and Korean.",
        isUser: false,
      },
    ]);
  };

  return (
    <>
      {/* Floating Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-50 w-[60px] h-[60px] rounded-full shadow-lg flex items-center justify-center transition-transform hover:scale-110"
        style={{ backgroundColor: BRAND.colors.primary }}
        aria-label="Open chat"
      >
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke={BRAND.colors.bgDark} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" />
        </svg>
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div
          className="fixed bottom-24 right-6 z-50 w-[380px] max-w-[calc(100vw-48px)] rounded-lg shadow-2xl overflow-hidden flex flex-col"
          style={{ height: '500px', backgroundColor: BRAND.colors.bgCard }}
        >
          {/* Header */}
          <div
            className="flex items-center justify-between px-4 py-3"
            style={{ backgroundColor: BRAND.colors.primary }}
          >
            <span className="text-sm font-semibold" style={{ color: BRAND.colors.bgDark }}>
              AI Assistant — TAYA Hair Salon
            </span>
            <button
              onClick={() => setIsOpen(false)}
              className="text-lg font-bold hover:opacity-70"
              style={{ color: BRAND.colors.bgDark }}
            >
              ✕
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-3">
            {showInitial && (
              <>
                <div
                  className="rounded-lg p-3 text-sm max-w-[85%]"
                  style={{ backgroundColor: BRAND.colors.bgAlt, color: BRAND.colors.textBody }}
                >
                  Hi! I&apos;m TAYA Hair Salon&apos;s AI assistant. I can help you with bookings,
                  services, and questions about our stylists. How can I help?
                </div>
                <div
                  className="rounded-lg p-3 text-sm max-w-[85%]"
                  style={{ backgroundColor: BRAND.colors.bgAlt, color: BRAND.colors.textBody }}
                >
                  안녕하세요! TAYA 미용실 AI 어시스턴트입니다. 예약, 서비스 및 스타일리스트에 대한 질문을 도와드릴 수 있습니다.
                </div>
              </>
            )}
            {messages.map((msg, i) => (
              <div
                key={i}
                className={`rounded-lg p-3 text-sm max-w-[85%] ${msg.isUser ? 'ml-auto' : ''}`}
                style={{
                  backgroundColor: msg.isUser ? BRAND.colors.primary : BRAND.colors.bgAlt,
                  color: msg.isUser ? BRAND.colors.bgDark : BRAND.colors.textBody,
                }}
              >
                {msg.text}
              </div>
            ))}
          </div>

          {/* Input */}
          <div className="border-t p-3 flex gap-2" style={{ borderColor: BRAND.colors.accentSoft }}>
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSend()}
              placeholder="Type a message..."
              className="flex-1 text-sm px-3 py-2 rounded border outline-none"
              style={{
                borderColor: BRAND.colors.accentSoft,
                color: BRAND.colors.textBody,
                backgroundColor: BRAND.colors.bgMain,
              }}
            />
            <button
              onClick={handleSend}
              className="px-4 py-2 rounded text-sm font-semibold"
              style={{ backgroundColor: BRAND.colors.primary, color: BRAND.colors.bgDark }}
            >
              Send
            </button>
          </div>

          {/* Powered By */}
          <div className="text-center py-1 text-[10px]" style={{ color: BRAND.colors.textMuted }}>
            Powered by AI &middot; Sesh
          </div>
        </div>
      )}
    </>
  );
}
