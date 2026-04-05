'use client';

import { useState } from 'react';

export default function WatermarkBanner() {
  const [dismissed, setDismissed] = useState(false);

  if (dismissed) return null;

  return (
    <div className="fixed top-0 left-0 right-0 z-50 flex items-center justify-center px-4 py-2"
      style={{ backgroundColor: 'rgba(0,0,0,0.85)' }}>
      <p className="text-white text-xs text-center max-w-4xl">
        UNOFFICIAL PREVIEW — This site was built by Sesh ACID as a complimentary redesign preview for Upperside Real Estate Limited. Not affiliated with Upperside Real Estate Limited.
      </p>
      <button
        onClick={() => setDismissed(true)}
        className="ml-4 text-white opacity-70 hover:opacity-100 transition-opacity flex-shrink-0"
        aria-label="Dismiss banner"
      >
        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
          <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>
        </svg>
      </button>
    </div>
  );
}
