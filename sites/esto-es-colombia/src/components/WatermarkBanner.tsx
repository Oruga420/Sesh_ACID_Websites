export default function WatermarkBanner() {
  return (
    <div className="bg-brand-yellow text-brand-black text-center py-2 text-sm font-[family-name:var(--font-montserrat)] font-semibold tracking-wide uppercase">
      Preview by{" "}
      <a
        href="https://seshdesign.ca"
        target="_blank"
        rel="noopener noreferrer"
        className="underline hover:no-underline"
      >
        Sesh
      </a>{" "}
      &mdash; Not the live site
    </div>
  );
}
