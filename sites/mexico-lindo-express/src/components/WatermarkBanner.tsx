'use client'

import { useState } from 'react'

export default function WatermarkBanner() {
  const [visible, setVisible] = useState(true)

  if (!visible) return null

  return (
    <div className="fixed top-0 left-0 right-0 z-50 flex items-center justify-center bg-blue-600 text-white h-8 text-sm font-medium">
      <span>Preview by Sesh</span>
      <button
        onClick={() => setVisible(false)}
        className="absolute right-3 text-white hover:text-white/70 text-lg leading-none"
        aria-label="Dismiss banner"
      >
        &times;
      </button>
    </div>
  )
}
