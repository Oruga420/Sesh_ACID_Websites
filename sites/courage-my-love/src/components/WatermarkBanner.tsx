"use client";

import { useState } from "react";

export default function WatermarkBanner({
  businessName,
}: {
  businessName: string;
}) {
  const [visible, setVisible] = useState(true);

  if (!visible) return null;

  return (
    <div className="fixed top-0 left-0 right-0 z-50 bg-brand-espresso/90 text-white text-center text-xs py-2 px-4 backdrop-blur-sm">
      <span>
        UNOFFICIAL PREVIEW — This site was built by Sesh ACID as a
        complimentary redesign preview for {businessName}. Not affiliated with{" "}
        {businessName}.
      </span>
      <button
        onClick={() => setVisible(false)}
        className="ml-4 text-white/70 hover:text-white font-bold"
        aria-label="Dismiss banner"
      >
        ✕
      </button>
    </div>
  );
}
