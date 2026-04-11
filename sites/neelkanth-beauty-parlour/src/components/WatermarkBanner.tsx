'use client';

import { useState } from 'react';

export default function WatermarkBanner() {
  const [dismissed, setDismissed] = useState(false);

  if (dismissed) return null;

  return (
    <div className="fixed top-0 left-0 right-0 z-50 bg-black/85 text-white text-center text-xs py-2 px-4 backdrop-blur-sm">
      <span className="font-nav tracking-wide">
        UNOFFICIAL PREVIEW — This site was built by Sesh ACID as a complimentary redesign preview for Neelkanth Beauty Parlour. Not affiliated with Neelkanth Beauty Parlour.
      </span>
      <button
        onClick={() => setDismissed(true)}
        className="absolute right-3 top-1/2 -translate-y-1/2 text-white/70 hover:text-white transition-colors text-sm font-bold"
        aria-label="Dismiss banner"
      >
        ✕
      </button>
    </div>
  );
}
