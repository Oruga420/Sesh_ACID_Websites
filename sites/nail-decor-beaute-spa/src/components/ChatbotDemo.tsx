"use client";

import { useState } from "react";
import { BRAND } from "@/lib/brand-tokens";

export default function ChatbotDemo() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Array<{ from: "bot" | "user"; text: string }>>([
    {
      from: "bot",
      text: `Hi! I'm Nail Decor Beaute & Spa's AI assistant. I can help you with appointments, services, pricing, and questions about our treatments. How can I help?`,
    },
  ]);
  const [input, setInput] = useState("");

  const handleSend = () => {
    if (!input.trim()) return;
    const userMsg = { from: "user" as const, text: input };
    const botReply = {
      from: "bot" as const,
      text: "This is a demo preview. Once activated, I'll be powered by AI to handle real appointment bookings, answer FAQs about services and pricing, and assist your customers 24/7 in English.",
    };
    setMessages((prev) => [...prev, userMsg, botReply]);
    setInput("");
  };

  return (
    <>
      {/* Floating Button */}
      <button
        onClick={() => setOpen(!open)}
        className="fixed bottom-6 right-6 z-50 rounded-full shadow-lg transition-transform hover:scale-105"
        style={{
          width: 60,
          height: 60,
          backgroundColor: BRAND.colors.primary,
        }}
        aria-label="Open chat"
      >
        <svg
          width="28"
          height="28"
          viewBox="0 0 24 24"
          fill="white"
          className="mx-auto"
        >
          <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H5.17L4 17.17V4h16v12z" />
          <path d="M7 9h2v2H7zm4 0h2v2h-2zm4 0h2v2h-2z" />
        </svg>
      </button>

      {/* Chat Window */}
      {open && (
        <div
          className="fixed bottom-20 right-6 z-50 rounded-2xl shadow-2xl overflow-hidden flex flex-col"
          style={{
            width: 380,
            height: 500,
            maxWidth: "calc(100vw - 2rem)",
            maxHeight: "calc(100vh - 8rem)",
            backgroundColor: BRAND.colors.bgMain,
          }}
        >
          {/* Header */}
          <div
            className="flex items-center justify-between px-5 py-4"
            style={{ backgroundColor: BRAND.colors.primary }}
          >
            <div>
              <p className="text-white font-semibold text-sm">
                AI Assistant — Nail Decor Beaute & Spa
              </p>
              <p className="text-white/70 text-[11px]">Online now</p>
            </div>
            <button
              onClick={() => setOpen(false)}
              className="text-white/80 hover:text-white text-xl leading-none"
              aria-label="Close chat"
            >
              &times;
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto px-4 py-4 space-y-3">
            {messages.map((msg, i) => (
              <div
                key={i}
                className={`flex ${msg.from === "user" ? "justify-end" : "justify-start"}`}
              >
                <div
                  className="max-w-[80%] px-4 py-3 text-sm leading-relaxed"
                  style={{
                    backgroundColor:
                      msg.from === "user" ? BRAND.colors.primary : BRAND.colors.bgAlt,
                    color:
                      msg.from === "user"
                        ? BRAND.colors.textLight
                        : BRAND.colors.textBody,
                    borderRadius:
                      msg.from === "user"
                        ? "16px 16px 4px 16px"
                        : "16px 16px 16px 4px",
                  }}
                >
                  {msg.text}
                </div>
              </div>
            ))}
          </div>

          {/* Input */}
          <div
            className="px-4 py-3 flex gap-2"
            style={{ borderTop: `1px solid ${BRAND.colors.accent}` }}
          >
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSend()}
              placeholder="Type a message..."
              className="flex-1 px-4 py-2.5 text-sm rounded-full outline-none"
              style={{
                backgroundColor: BRAND.colors.bgAlt,
                color: BRAND.colors.textBody,
                border: `1px solid ${BRAND.colors.accent}`,
              }}
            />
            <button
              onClick={handleSend}
              className="rounded-full w-10 h-10 flex items-center justify-center transition-opacity hover:opacity-80"
              style={{ backgroundColor: BRAND.colors.primary }}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="white">
                <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" />
              </svg>
            </button>
          </div>

          {/* Powered By */}
          <p
            className="text-center text-[10px] pb-2"
            style={{ color: BRAND.colors.textMuted }}
          >
            Powered by AI &middot; Sesh
          </p>
        </div>
      )}
    </>
  );
}
