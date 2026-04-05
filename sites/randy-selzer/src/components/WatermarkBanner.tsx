'use client';

import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';

export default function WatermarkBanner() {
  const [dismissed, setDismissed] = useState(false);
  const pathname = usePathname();

  // Reappear on page change
  useEffect(() => {
    setDismissed(false);
  }, [pathname]);

  if (dismissed) return <div className="h-10" />;

  return (
    <div className="fixed top-0 left-0 right-0 z-50 bg-black/85 backdrop-blur-sm text-white text-xs text-center py-2.5 px-4 flex items-center justify-center gap-2">
      <span className="font-body">
        UNOFFICIAL PREVIEW — This site was built by Sesh ACID as a complimentary redesign preview for Randy Selzer. Not affiliated with Randy Selzer or Sutton Group.
      </span>
      <button
        onClick={() => setDismissed(true)}
        className="ml-2 text-white/70 hover:text-white transition-colors text-lg leading-none"
        aria-label="Dismiss banner"
      >
        &times;
      </button>
    </div>
  );
}
