'use client';

import { useState } from 'react';

export default function WatermarkBanner() {
  const [dismissed, setDismissed] = useState(false);

  if (dismissed) return null;

  return (
    <div className="fixed top-0 left-0 right-0 z-[100] bg-black/80 text-white text-center py-2 px-4 text-xs font-body">
      <span>
        UNOFFICIAL PREVIEW — This site was built by Sesh ACID as a complimentary
        redesign preview for EFX Salon and Spa. Not affiliated with EFX Salon and Spa.
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
