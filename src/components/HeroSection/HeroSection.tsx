import '../../styles/components/HeroSection.css'

export function HeroSection() {
  return (
    <section className="hero-section">
      <div className="hs-container consistent-padding-x">
        <div className="text-section">
          <h1>Test your knowledge against players worldwide</h1>
          <p className="hero-subtitle">
            Challenge friends in real-time trivia battles. Compete across
            categories, climb the rankings, and prove you know more than anyone
            else.
          </p>
          <div className="hero-cta-section">
            <a href="/lobby" className='btn primary'>Play</a>
            <a href="/about" className='btn outlined'>Learn More</a>
          </div>
        </div>
        <img
          className="hero-image"
          src="https://cdn.pixabay.com/photo/2025/11/28/14/40/sea-9983074_1280.jpg"
          alt=""
        />
      </div>
    </section>
  );
}
