"use client";

export default function WatermarkBanner() {
  return (
    <div className="bg-burnt-red text-white text-center py-2 text-sm font-medium tracking-wide">
      <p>
        DEMO SITE by{" "}
        <a
          href="https://seshwebdesign.com"
          target="_blank"
          rel="noopener noreferrer"
          className="underline font-bold hover:text-cream transition-colors"
        >
          Sesh Web Design
        </a>{" "}
        &mdash; Not affiliated with 905 INK Tattoo Facility
      </p>
    </div>
  );
}
