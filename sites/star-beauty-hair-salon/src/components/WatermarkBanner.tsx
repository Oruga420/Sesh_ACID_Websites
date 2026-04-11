'use client';

import { useState } from 'react';

interface WatermarkBannerProps {
  businessName: string;
}

export default function WatermarkBanner({ businessName }: WatermarkBannerProps) {
  const [dismissed, setDismissed] = useState(false);

  if (dismissed) return null;

  return (
    <div
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-center gap-4 px-4 py-2 text-xs text-white text-center"
      style={{ backgroundColor: 'rgba(45,27,48,0.88)', backdropFilter: 'blur(8px)' }}
    >
      <span>
        UNOFFICIAL PREVIEW — This site was built by Sesh ACID as a complimentary
        redesign preview for {businessName}. Not affiliated with {businessName}.
      </span>
      <button
        onClick={() => setDismissed(true)}
        className="shrink-0 w-5 h-5 flex items-center justify-center rounded-full hover:bg-white/20 transition-colors"
        aria-label="Dismiss banner"
      >
        ✕
      </button>
    </div>
  );
}
