'use client';

import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';

export default function WatermarkBanner() {
  const [dismissed, setDismissed] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setDismissed(false);
  }, [pathname]);

  if (dismissed) return null;

  return (
    <div
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-center px-4 py-2 text-xs text-center"
      style={{
        backgroundColor: 'rgba(13, 33, 55, 0.92)',
        color: 'rgba(255,255,255,0.85)',
        backdropFilter: 'blur(4px)',
      }}
    >
      <span>
        UNOFFICIAL PREVIEW — This site was built by Sesh ACID as a complimentary redesign preview for Any Income Any Credit Mortgages. Not affiliated with Any Income Any Credit Mortgages.
      </span>
      <button
        onClick={() => setDismissed(true)}
        className="ml-4 p-1 hover:opacity-80 transition-opacity shrink-0"
        aria-label="Dismiss banner"
      >
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M18 6L6 18M6 6l12 12" />
        </svg>
      </button>
    </div>
  );
}
