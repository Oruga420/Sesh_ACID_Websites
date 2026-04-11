'use client';

import { useState } from 'react';
import { BRAND } from '@/lib/brand-tokens';

export default function WatermarkBanner() {
  const [dismissed, setDismissed] = useState(false);

  if (dismissed) return null;

  return (
    <div className="fixed top-0 right-0 left-0 z-[100] flex items-center justify-center gap-4 bg-black/85 px-4 py-2 text-center text-xs text-white/90 backdrop-blur-sm">
      <p>
        UNOFFICIAL PREVIEW — This site was built by Sesh ACID as a complimentary redesign preview for{' '}
        {BRAND.business.name}. Not affiliated with {BRAND.business.name}.
      </p>
      <button
        onClick={() => setDismissed(true)}
        className="shrink-0 text-white/60 transition-colors hover:text-white"
        aria-label="Dismiss banner"
      >
        ✕
      </button>
    </div>
  );
}
