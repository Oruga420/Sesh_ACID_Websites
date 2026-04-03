export function WatermarkBanner() {
  return (
    <div className="bg-dark text-white text-center py-2 text-sm font-body">
      Preview built by{" "}
      <a
        href="https://seshdesign.ca"
        className="underline text-coral hover:text-secondary"
        target="_blank"
        rel="noopener noreferrer"
      >
        Sesh Design
      </a>{" "}
      — not affiliated with Real Empanada
    </div>
  );
}
