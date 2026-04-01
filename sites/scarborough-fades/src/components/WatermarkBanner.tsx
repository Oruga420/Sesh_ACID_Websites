"use client";

import { useState } from "react";

export default function WatermarkBanner() {
  const [dismissed, setDismissed] = useState(false);

  if (dismissed) return null;

  return (
    <div className="fixed top-0 left-0 right-0 z-50 bg-yellow-500/90 text-black text-xs py-2 px-4 flex items-center justify-between backdrop-blur-sm">
      <p className="text-center flex-1">
        <span className="mr-1">&#9888;&#65039;</span>
        <strong>UNOFFICIAL PREVIEW</strong> — This site was built by Sesh ACID
        as a complimentary redesign preview for Scarborough Fades. Not
        affiliated with Scarborough Fades.
      </p>
      <button
        onClick={() => setDismissed(true)}
        className="ml-4 text-black/60 hover:text-black text-lg leading-none font-bold shrink-0 cursor-pointer"
        aria-label="Dismiss banner"
      >
        &times;
      </button>
    </div>
  );
}
