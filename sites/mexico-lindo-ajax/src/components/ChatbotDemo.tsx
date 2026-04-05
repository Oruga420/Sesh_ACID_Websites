'use client'

import { useState, useRef, useEffect } from 'react'

interface Message {
  readonly role: 'assistant' | 'user'
  readonly text: string
}

const INITIAL_MESSAGES: readonly Message[] = [
  {
    role: 'assistant',
    text: '¡Hola! Welcome to México Lindo Ajax! I can help you with our menu, hours, reservations, and delivery options.',
  },
  {
    role: 'assistant',
    text: 'Soy el asistente de México Lindo. ¿En qué te puedo ayudar hoy? / How can I help you today?',
  },
]

const DEMO_REPLY =
  "This is a demo preview. Once activated, I'll be powered by AI to answer real questions about our menu, hours, specials, and handle orders — 24/7 in English and Spanish."

export default function ChatbotDemo() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<readonly Message[]>(INITIAL_MESSAGES)
  const [input, setInput] = useState('')
  const messagesEndRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages])

  function handleSend() {
    if (!input.trim()) return
    const userMsg: Message = { role: 'user', text: input.trim() }
    const botReply: Message = { role: 'assistant', text: DEMO_REPLY }
    setMessages((prev) => [...prev, userMsg, botReply])
    setInput('')
  }

  return (
    <>
      {/* Floating button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-[9999] w-[60px] h-[60px] rounded-full shadow-lg flex items-center justify-center transition-transform duration-200 hover:scale-105 bg-[#C0533A]"
        aria-label="Open chat assistant"
      >
        <svg width="28" height="28" viewBox="0 0 24 24" fill="white">
          <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H6l-2 2V4h16v12z" />
        </svg>
      </button>

      {/* Chat window */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 z-[9999] w-[380px] max-w-[calc(100vw-2rem)] h-[500px] max-h-[calc(100vh-8rem)] bg-white rounded-xl shadow-2xl flex flex-col overflow-hidden border border-[#E0D0B8]">
          {/* Header */}
          <div className="flex items-center justify-between px-4 py-3 text-white shrink-0 bg-[#2C3A1E]">
            <div>
              <span className="font-bold text-sm">AI Assistant — México Lindo Ajax</span>
              <p className="text-white/60 text-xs">Bilingual · English &amp; Español</p>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              aria-label="Close chat"
              className="text-white/80 hover:text-white transition-colors"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
              </svg>
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-3 bg-[#F7F0E6]">
            {messages.map((msg, i) => (
              <div
                key={i}
                className={`max-w-[85%] px-3 py-2 rounded-lg text-sm leading-relaxed ${
                  msg.role === 'assistant'
                    ? 'bg-white text-[#3A2A1A] border border-[#E0D0B8] self-start'
                    : 'ml-auto text-white'
                }`}
                style={
                  msg.role === 'user'
                    ? { backgroundColor: '#C0533A' }
                    : undefined
                }
              >
                {msg.text}
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="border-t border-[#E0D0B8] p-3 bg-white shrink-0">
            <div className="flex gap-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter') handleSend()
                }}
                placeholder="Ask about our menu..."
                className="flex-1 border border-[#E0D0B8] rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#C0533A]/30 text-[#3A2A1A]"
              />
              <button
                onClick={handleSend}
                className="px-4 py-2 rounded-lg text-white text-sm font-semibold transition-colors bg-[#C0533A] hover:bg-[#9E3D24]"
              >
                Send
              </button>
            </div>
            <p className="text-center text-xs text-[#7A6A5A] mt-2">
              Powered by AI &middot; Sesh
            </p>
          </div>
        </div>
      )}
    </>
  )
}
