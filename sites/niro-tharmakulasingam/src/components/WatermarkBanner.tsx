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
      className="fixed top-0 left-0 right-0 z-[100] flex items-center justify-center px-4 py-2 text-center"
      style={{
        backgroundColor: 'rgba(10, 22, 40, 0.92)',
        color: '#FFFFFF',
        fontSize: '12px',
        lineHeight: '1.4',
      }}
    >
      <p className="max-w-4xl">
        <strong>UNOFFICIAL PREVIEW</strong> — This site was built by Sesh ACID as a complimentary redesign preview for Niro Tharmakulasingam - RE/MAX Community Realty. Not affiliated with Niro Tharmakulasingam - RE/MAX Community Realty.
      </p>
      <button
        onClick={() => setDismissed(true)}
        className="ml-4 flex-shrink-0 hover:opacity-80 transition-opacity"
        aria-label="Dismiss banner"
        style={{ color: '#FFFFFF', fontSize: '16px', lineHeight: '1' }}
      >
        &#x2715;
      </button>
    </div>
  );
}
