export function WatermarkBanner() {
  return (
    <div className="bg-brand-espresso text-brand-offwhite text-center py-2 text-sm font-[family-name:var(--font-body)]">
      Preview by{" "}
      <a
        href="https://sesh.com.co"
        target="_blank"
        rel="noopener noreferrer"
        className="text-brand-gold underline hover:text-brand-gold-dark transition-colors duration-300"
      >
        Sesh
      </a>{" "}
      — Not the live site
    </div>
  );
}
