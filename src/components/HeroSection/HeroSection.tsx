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
            <a href={ctaButtons[0].link} className="btn primary">{ctaButtons[0].label}</a>
            <a href={ctaButtons[1].link} className="btn outlined" aria-label={"Learn more about what TrivIQ is and how it works."}>
              Learn More <div className="sr-only">and how TrivIQ works</div>
            </a>
          </div>
        </div>
        <img
          className="hero-image"
          src={url}
          alt={alt}
          fetchPriority='high'
          decoding='async'
        />
      </div>
    </section>
  );
}
