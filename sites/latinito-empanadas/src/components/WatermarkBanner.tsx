export function WatermarkBanner() {
  return (
    <div className="bg-brand-dark text-white text-center py-2 text-sm font-body">
      Preview by{" "}
      <a
        href="https://www.seshdigital.ca"
        target="_blank"
        rel="noopener noreferrer"
        className="underline text-brand-yellow hover:text-white transition-colors"
      >
        Sesh Digital
      </a>{" "}
      &mdash; Not the live site
    </div>
  );
}
