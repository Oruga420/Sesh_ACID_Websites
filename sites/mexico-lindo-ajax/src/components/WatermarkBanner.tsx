'use client'

import { useState } from 'react'

export default function WatermarkBanner() {
  const [visible, setVisible] = useState(true)

  if (!visible) return null

  return (
    <div className="fixed top-0 left-0 right-0 z-50 flex items-center justify-center bg-black/80 text-white h-8 text-xs font-medium px-8">
      <span className="text-center">
        UNOFFICIAL PREVIEW — Built by Sesh ACID as a complimentary redesign preview for Mexico Lindo Ajax. Not affiliated with Mexico Lindo Ajax.
      </span>
      <button
        onClick={() => setVisible(false)}
        className="absolute right-3 text-white/70 hover:text-white text-lg leading-none"
        aria-label="Dismiss banner"
      >
        &times;
      </button>
    </div>
  )
}
