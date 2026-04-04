"use client";

import { useState } from "react";
import { BRAND } from "@/lib/brand-tokens";

export default function ChatbotDemo() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<
    { text: string; sender: "bot" | "user" }[]
  >([
    {
      text: "Hi! I'm Courage My Love's AI assistant. I can help you with store hours, product questions, and directions to our Kensington Market shop. How can I help?",
      sender: "bot",
    },
  ]);
  const [input, setInput] = useState("");

  const handleSend = () => {
    if (!input.trim()) return;
    const newMessages = [
      ...messages,
      { text: input, sender: "user" as const },
      {
        text: "This is a demo preview. Once activated, I'll be powered by AI to handle real questions about vintage finds, bead selection, store hours, and directions to 14 Kensington Ave — 24/7 in English.",
        sender: "bot" as const,
      },
    ];
    setMessages(newMessages);
    setInput("");
  };

  return (
    <>
      {/* Floating Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-50 rounded-full shadow-lg hover:scale-105 transition-transform duration-200 flex items-center justify-center"
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
          stroke="white"
          strokeWidth="0"
        >
          <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" />
        </svg>
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div
          className="fixed bottom-20 right-6 z-50 rounded-lg shadow-2xl overflow-hidden flex flex-col"
          style={{ width: 380, height: 500 }}
        >
          {/* Chat Header */}
          <div
            className="flex items-center justify-between px-4 py-3"
            style={{ backgroundColor: BRAND.colors.primary }}
          >
            <span className="text-white font-semibold text-sm">
              AI Assistant — Courage My Love
            </span>
            <button
              onClick={() => setIsOpen(false)}
              className="text-white/80 hover:text-white"
              aria-label="Close chat"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Messages */}
          <div
            className="flex-1 overflow-y-auto p-4 space-y-3"
            style={{ backgroundColor: BRAND.colors.bgMain }}
          >
            {messages.map((msg, i) => (
              <div
                key={i}
                className={`max-w-[85%] px-3 py-2 rounded-lg text-sm ${
                  msg.sender === "bot"
                    ? "bg-white text-brand-text-body shadow-sm"
                    : "ml-auto text-white"
                }`}
                style={
                  msg.sender === "user"
                    ? { backgroundColor: BRAND.colors.primary }
                    : undefined
                }
              >
                {msg.text}
              </div>
            ))}
          </div>

          {/* Input */}
          <div className="flex border-t border-brand-border bg-white p-2 gap-2">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSend()}
              placeholder="Ask about vintage finds, beads, hours..."
              className="flex-1 px-3 py-2 text-sm border border-brand-border rounded focus:outline-none focus:border-brand-primary"
            />
            <button
              onClick={handleSend}
              className="px-4 py-2 rounded text-white text-sm font-semibold"
              style={{ backgroundColor: BRAND.colors.primary }}
            >
              Send
            </button>
          </div>

          {/* Powered By */}
          <div className="text-center text-[10px] text-brand-text-muted py-1 bg-white">
            Powered by AI &middot; Sesh
          </div>
        </div>
      )}
    </>
  );
}
