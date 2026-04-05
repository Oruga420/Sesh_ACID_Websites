'use client';

import { useState } from 'react';

export default function WatermarkBanner() {
  const [dismissed, setDismissed] = useState(false);

  if (dismissed) return null;

  return (
    <div className="fixed top-0 left-0 right-0 z-50 bg-black/85 text-white text-xs text-center py-2.5 px-4 font-body backdrop-blur-sm">
      <span className="opacity-90">
        UNOFFICIAL PREVIEW — This site was built by Sesh ACID as a complimentary redesign preview for Executive Real Estate Services Ltd. Not affiliated with Executive Real Estate Services Ltd.
      </span>
      <button
        onClick={() => setDismissed(true)}
        className="ml-4 text-white/70 hover:text-white font-bold text-sm"
        aria-label="Dismiss banner"
      >
        ✕
      </button>
    </div>
  );
}
