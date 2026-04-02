export default function WatermarkBanner() {
  return (
    <div className="bg-gold-500 text-dark-900 text-center py-2 px-4 text-sm font-semibold tracking-wide">
      <span>
        Demo site by{" "}
        <a
          href="https://www.linkedin.com/in/amorac/"
          target="_blank"
          rel="noopener noreferrer"
          className="underline hover:text-dark-700"
        >
          Sesh Design Studio
        </a>{" "}
        &mdash; Not affiliated with Chameleon Studio
      </span>
    </div>
  );
}
