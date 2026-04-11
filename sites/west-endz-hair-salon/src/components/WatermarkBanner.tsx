'use client';

import { useState } from 'react';

export default function WatermarkBanner() {
  const [dismissed, setDismissed] = useState(false);

  if (dismissed) return null;

  return (
    <div
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-center px-4 py-2"
      style={{ backgroundColor: 'rgba(26, 26, 26, 0.92)' }}
    >
      <p className="text-xs text-white/90 text-center font-[Lato,Helvetica,sans-serif] tracking-wide">
        UNOFFICIAL PREVIEW — This site was built by Sesh ACID as a complimentary
        redesign preview for West Endz Hair Salon. Not affiliated with West Endz
        Hair Salon.
      </p>
      <button
        onClick={() => setDismissed(true)}
        className="ml-4 text-white/70 hover:text-white transition-colors flex-shrink-0"
        aria-label="Dismiss banner"
      >
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
          <path d="M12 4L4 12M4 4l8 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      </button>
    </div>
  );
}
