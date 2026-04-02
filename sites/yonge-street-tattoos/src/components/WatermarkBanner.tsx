'use client';

export default function WatermarkBanner() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-brand-gold text-brand-black text-center py-2 text-sm font-semibold tracking-wide">
      PREVIEW ONLY &mdash; Built by{' '}
      <a
        href="https://sesh.co"
        target="_blank"
        rel="noopener noreferrer"
        className="underline hover:no-underline"
      >
        Sesh
      </a>{' '}
      for Yonge Street Tattoos
    </div>
  );
}
