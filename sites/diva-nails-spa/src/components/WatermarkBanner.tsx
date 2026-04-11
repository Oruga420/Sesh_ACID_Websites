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
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-center gap-4 px-4 py-2 text-center"
      style={{
        backgroundColor: 'rgba(45, 34, 38, 0.92)',
        backdropFilter: 'blur(4px)',
      }}
    >
      <p className="text-xs text-white/90 max-w-3xl">
        <span className="font-semibold">UNOFFICIAL PREVIEW</span> — This site was built by Sesh ACID
        as a complimentary redesign preview for Diva Nails &amp; Head Spa. Not affiliated with Diva
        Nails &amp; Head Spa.
      </p>
      <button
        onClick={() => setDismissed(true)}
        className="text-white/60 hover:text-white transition-colors flex-shrink-0 text-lg leading-none"
        aria-label="Dismiss banner"
      >
        &times;
      </button>
    </div>
  );
}
