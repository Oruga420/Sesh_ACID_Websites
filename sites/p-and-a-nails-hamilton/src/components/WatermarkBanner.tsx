'use client';

import { useState } from 'react';

export default function WatermarkBanner() {
  const [dismissed, setDismissed] = useState(false);

  if (dismissed) return null;

  return (
    <div className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between bg-black/80 px-4 py-2 text-xs text-white backdrop-blur-sm">
      <p className="mx-auto text-center">
        UNOFFICIAL PREVIEW — This site was built by Sesh ACID as a complimentary
        redesign preview for P &amp; A Nails Hamilton Mountain. Not affiliated
        with P &amp; A Nails Hamilton Mountain.
      </p>
      <button
        onClick={() => setDismissed(true)}
        className="ml-3 flex-shrink-0 text-white/70 hover:text-white"
        aria-label="Dismiss banner"
      >
        &#10005;
      </button>
    </div>
  );
}
