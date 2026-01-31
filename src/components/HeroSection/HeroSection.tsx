import { heroSection } from '../../config/components/home-page';
import '../../styles/components/HeroSection.css'

export function HeroSection() {
  const { h1, subtitle, img, ctaButtons} = heroSection;
  const {url, alt} = img;
  return (
    <section className="hero-section">
      <div className="hs-container consistent-padding-x">
        <div className="text-section">
          <h1>{h1}</h1>
          <p className="hero-subtitle">
            {subtitle}
          </p>
          <div className="hero-cta-section">
            
            {ctaButtons.map((i, idx) => <a key={idx} href={i.link} className={"btn " + i.variant}>{i.label}</a>)}
          </div>
        </div>
        <img
          className="hero-image"
          src={url}
          alt={alt}
        />
      </div>
    </section>
  );
}
