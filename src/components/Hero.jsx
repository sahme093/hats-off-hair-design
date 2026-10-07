import salon from '../salon.config.js';

export default function Hero() {
  const { heroArch, heroSide } = salon.images;
  const { hoursSummary } = salon;
  return (
    <section className="hero" id="top">
      <img src={heroArch.src} alt={heroArch.alt} className="hero-mobile-img mobile-only" style={{ objectPosition: heroArch.position }} />
      <div className="hero-copy">
        <div className="eyebrow">{salon.eyebrow}</div>
        <h1 className="hero-title">
          {salon.heroTitle.lead}<br className="desktop-only" /> <em>{salon.heroTitle.accent}</em>
        </h1>
        <p className="hero-lede">{salon.tagline}</p>
        <div className="hero-ctas desktop-only">
          <a href="#book" className="btn btn-brass btn-lg">Request an appointment</a>
          <a href={`tel:${salon.phone.e164}`} className="btn btn-ghost-light btn-lg">{salon.phone.display}</a>
        </div>
        <div className="hero-facts desktop-only">
          {hoursSummary && <div><div className="fact-label">Open</div>{hoursSummary.open}</div>}
          {hoursSummary && <div><div className="fact-label">Closed</div>{hoursSummary.closed}</div>}
          <div><div className="fact-label">Find us</div>{salon.address.short}</div>
          {!hoursSummary && <div><div className="fact-label">Call or text</div>{salon.phone.display}</div>}
        </div>
        <div className="hero-facts-mobile mobile-only">
          {hoursSummary ? (
            <>
              <span>{hoursSummary.open}</span>
              <span>Closed {hoursSummary.closed}</span>
            </>
          ) : (
            <>
              <span>{salon.address.short}</span>
              <a href={`tel:${salon.phone.e164}`}>{salon.phone.display}</a>
            </>
          )}
        </div>
      </div>

      <div className="hero-media desktop-only">
        <img src={heroArch.src} alt={heroArch.alt} className="hero-arch" style={{ objectPosition: heroArch.position }} />
        <div className="hero-media-col">
          <img src={heroSide.src} alt={heroSide.alt} className="hero-side" style={{ objectPosition: heroSide.position }} />
          <blockquote className="hero-quote">{salon.heroQuote}</blockquote>
        </div>
      </div>
    </section>
  );
}
