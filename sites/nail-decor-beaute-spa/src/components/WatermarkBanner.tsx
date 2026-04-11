"use client";

import { useState } from "react";

export default function WatermarkBanner() {
  const [dismissed, setDismissed] = useState(false);

  if (dismissed) return null;

  return (
    <div
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-center px-4 py-2 text-center"
      style={{
        backgroundColor: "rgba(45, 27, 27, 0.88)",
        backdropFilter: "blur(8px)",
      }}
    >
      <p className="text-[11px] md:text-xs text-white/90 tracking-wide">
        <span className="font-semibold">UNOFFICIAL PREVIEW</span> — This site was built by
        Sesh ACID as a complimentary redesign preview for Nail Decor Beaute & Spa.
        Not affiliated with Nail Decor Beaute & Spa.
      </p>
      <button
        onClick={() => setDismissed(true)}
        className="ml-4 text-white/60 hover:text-white transition-colors text-lg leading-none"
        aria-label="Dismiss banner"
      >
        &times;
      </button>
    </div>
  );
}
