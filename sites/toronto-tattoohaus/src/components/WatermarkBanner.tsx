"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

export default function WatermarkBanner() {
  const [dismissed, setDismissed] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setDismissed(false);
  }, [pathname]);

  if (dismissed) return null;

  return (
    <div className="fixed top-0 left-0 right-0 z-[60] bg-black/80 backdrop-blur-sm text-white text-center text-xs py-2 px-4 font-body font-medium tracking-wide flex items-center justify-center">
      <span>
        UNOFFICIAL PREVIEW — This site was built by Sesh ACID as a complimentary redesign preview for Toronto Tattoohaus. Not affiliated with Toronto Tattoohaus.
      </span>
      <button
        onClick={() => setDismissed(true)}
        className="ml-4 text-white/60 hover:text-white transition-colors flex-shrink-0"
        aria-label="Dismiss banner"
      >
        ✕
      </button>
    </div>
  );
}
