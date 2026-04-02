interface MapEmbedProps {
  query: string;
  title: string;
}

export default function MapEmbed({ query, title }: MapEmbedProps) {
  return (
    <div className="rounded-lg overflow-hidden border border-dark-lighter">
      <iframe
        title={title}
        src={`https://www.google.com/maps?q=${encodeURIComponent(query)}&output=embed`}
        width="100%"
        height="300"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </div>
  );
}
