import { BRAND } from "@/lib/brand-tokens";
import { BlurFade } from "@/components/ui/blur-fade";

const GALLERY_ITEMS = [
  { label: "Signature Facial", gradient: `linear-gradient(135deg, ${BRAND.colors.primary}, ${BRAND.colors.accent})`, size: "large" },
  { label: "Relaxation Massage", gradient: `linear-gradient(135deg, ${BRAND.colors.secondary}, ${BRAND.colors.bgDark})`, size: "small" },
  { label: "Shellac Manicure", gradient: `linear-gradient(135deg, ${BRAND.colors.accent}, ${BRAND.colors.primary})`, size: "small" },
  { label: "Laser Treatment", gradient: `linear-gradient(135deg, ${BRAND.colors.bgDark}, ${BRAND.colors.secondary})`, size: "medium" },
  { label: "Spa Pedicure", gradient: `linear-gradient(135deg, ${BRAND.colors.primary}CC, ${BRAND.colors.warmNeutral})`, size: "medium" },
  { label: "Bridal Styling", gradient: `linear-gradient(135deg, ${BRAND.colors.accent}, #B8956A)`, size: "large" },
  { label: "Microdermabrasion", gradient: `linear-gradient(135deg, ${BRAND.colors.secondary}, ${BRAND.colors.primary})`, size: "small" },
  { label: "Hair Coloring", gradient: `linear-gradient(135deg, ${BRAND.colors.warmNeutral}, ${BRAND.colors.accent})`, size: "small" },
];

export default function GalleryPage() {
  return (
    <>
      <section className="relative flex items-end min-h-[40vh] px-6 pb-12" style={{ background: `linear-gradient(135deg, ${BRAND.colors.bgDark} 0%, ${BRAND.colors.secondary} 100%)`, paddingTop: "140px" }}>
        <div className="max-w-7xl mx-auto w-full">
          <BlurFade delay={0.1}>
            <p className="text-[11px] tracking-[0.3em] uppercase mb-3" style={{ color: BRAND.colors.accent, fontWeight: 500 }}>Our Work</p>
            <h1 className="font-heading text-5xl md:text-[5.5rem] leading-[0.92]" style={{ color: BRAND.colors.textLight, textShadow: "0 2px 12px rgba(0,0,0,0.3)" }}>Gallery</h1>
          </BlurFade>
        </div>
      </section>

      <section className="py-8 md:py-12" style={{ backgroundColor: BRAND.colors.bgDark }}>
        <div className="max-w-[1600px] mx-auto px-2 md:px-4">
          <div className="columns-2 md:columns-3 lg:columns-4 gap-2 md:gap-3">
            {GALLERY_ITEMS.map((item, i) => (
              <BlurFade key={i} delay={0.05 + i * 0.05}>
                <div className="mb-2 md:mb-3 overflow-hidden group relative break-inside-avoid" style={{ borderRadius: "8px", aspectRatio: item.size === "large" ? "3/4" : item.size === "medium" ? "1/1" : "4/3" }}>
                  <div className="w-full h-full transition-transform duration-500 group-hover:scale-110" style={{ background: item.gradient }} />
                  <div className="absolute inset-0 flex items-end p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ background: "linear-gradient(180deg, transparent 40%, rgba(44,62,53,0.8) 100%)" }}>
                    <p className="text-sm font-semibold tracking-wide" style={{ color: BRAND.colors.textLight }}>{item.label}</p>
                  </div>
                </div>
              </BlurFade>
            ))}
          </div>
        </div>
        <div className="text-center mt-12 pb-8">
          <p className="text-sm mb-6" style={{ color: BRAND.colors.textMuted }}>Follow us for our latest transformations</p>
          <a href={BRAND.business.instagram} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 px-8 py-3.5 text-sm tracking-[0.08em] uppercase transition-all duration-200 hover:opacity-90" style={{ backgroundColor: BRAND.colors.primary, color: BRAND.colors.textLight, borderRadius: BRAND.spacing.radiusButtons, fontWeight: 500 }}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
            @hanhsalonandspa2024
          </a>
        </div>
      </section>
    </>
  );
}
