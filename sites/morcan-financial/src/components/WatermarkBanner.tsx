'use client';

import { useState } from 'react';

export default function WatermarkBanner() {
  const [dismissed, setDismissed] = useState(false);

  if (dismissed) return null;

  return (
    <div
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-center px-4 py-2 text-xs text-white text-center"
      style={{ backgroundColor: 'rgba(15, 36, 64, 0.92)' }}
    >
      <span>
        UNOFFICIAL PREVIEW — This site was built by{' '}
        <strong>Sesh ACID</strong> as a complimentary redesign preview for MorCan Financial Inc. Not affiliated with MorCan Financial Inc.
      </span>
      <button
        onClick={() => setDismissed(true)}
        className="ml-4 text-white/70 hover:text-white font-bold text-sm shrink-0"
        aria-label="Dismiss banner"
      >
        ✕
      </button>
    </div>
  );
}
