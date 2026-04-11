'use client';

import { useState } from 'react';

export default function WatermarkBanner() {
  const [dismissed, setDismissed] = useState(false);

  if (dismissed) return null;

  return (
    <div className="fixed top-0 left-0 right-0 z-[100] bg-black/80 text-white text-center text-xs py-2 px-4 backdrop-blur-sm">
      <span>
        UNOFFICIAL PREVIEW — This site was built by Sesh ACID as a complimentary
        redesign preview for TAYA Hair Salon. Not affiliated with TAYA Hair Salon.
      </span>
      <button
        onClick={() => setDismissed(true)}
        className="ml-4 text-white/70 hover:text-white font-bold"
        aria-label="Dismiss banner"
      >
        ✕
      </button>
    </div>
  );
}
