'use client';
import { useState } from 'react';
import { BRAND } from '@/lib/brand-tokens';

export default function ChatbotDemo() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{ text: string; isUser: boolean }[]>([]);
  const [input, setInput] = useState('');

  const handleSend = () => {
    if (!input.trim()) return;
    setMessages((p) => [...p, { text: input.trim(), isUser: true }, { text: "This is a demo preview. Once activated, I'll be powered by AI to handle real bookings, answer FAQs, and assist your customers 24/7 in English and Spanish.", isUser: false }]);
    setInput('');
  };

  return (
    <>
      <button onClick={() => setIsOpen(!isOpen)} className="fixed bottom-6 right-6 z-50 w-[60px] h-[60px] rounded-full shadow-lg flex items-center justify-center transition-transform hover:scale-110" style={{ background: `linear-gradient(135deg, ${BRAND.colors.primary}, ${BRAND.colors.accent})` }} aria-label="Open chat">
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" /></svg>
      </button>
      {isOpen && (
        <div className="fixed bottom-24 right-6 z-50 w-[380px] max-w-[calc(100vw-48px)] rounded-2xl shadow-2xl overflow-hidden flex flex-col" style={{ height: '500px', backgroundColor: BRAND.colors.bgCard }}>
          <div className="flex items-center justify-between px-4 py-3" style={{ background: `linear-gradient(135deg, ${BRAND.colors.primary}, ${BRAND.colors.accent})` }}>
            <span className="text-sm font-bold text-white">AI Assistant — Dania Latina</span>
            <button onClick={() => setIsOpen(false)} className="text-lg font-bold text-white/80 hover:text-white">✕</button>
          </div>
          <div className="flex-1 overflow-y-auto p-4 space-y-3">
            <div className="rounded-xl p-3 text-sm max-w-[85%]" style={{ backgroundColor: BRAND.colors.bgAlt, color: BRAND.colors.textBody }}>
              Hi! I&apos;m Dania Latina&apos;s AI assistant. I can help with bookings, services, and questions. How can I help?
            </div>
            <div className="rounded-xl p-3 text-sm max-w-[85%]" style={{ backgroundColor: BRAND.colors.bgAlt, color: BRAND.colors.textBody }}>
              Hola! Soy el asistente de IA de Dania Latina. Puedo ayudarte con reservas, servicios y preguntas.
            </div>
            {messages.map((msg, i) => (
              <div key={i} className={`rounded-xl p-3 text-sm max-w-[85%] ${msg.isUser ? 'ml-auto' : ''}`} style={{ backgroundColor: msg.isUser ? BRAND.colors.primary : BRAND.colors.bgAlt, color: msg.isUser ? '#fff' : BRAND.colors.textBody }}>{msg.text}</div>
            ))}
          </div>
          <div className="border-t p-3 flex gap-2" style={{ borderColor: BRAND.colors.accentSoft }}>
            <input type="text" value={input} onChange={(e) => setInput(e.target.value)} onKeyDown={(e) => e.key === 'Enter' && handleSend()} placeholder="Type a message..." className="flex-1 text-sm px-3 py-2 rounded-full border outline-none" style={{ borderColor: BRAND.colors.accentSoft, color: BRAND.colors.textBody, backgroundColor: BRAND.colors.bgMain }} />
            <button onClick={handleSend} className="px-4 py-2 rounded-full text-sm font-bold text-white" style={{ background: `linear-gradient(135deg, ${BRAND.colors.primary}, ${BRAND.colors.accent})` }}>Send</button>
          </div>
          <div className="text-center py-1 text-[10px]" style={{ color: BRAND.colors.textMuted }}>Powered by AI &middot; Sesh</div>
        </div>
      )}
    </>
  );
}
