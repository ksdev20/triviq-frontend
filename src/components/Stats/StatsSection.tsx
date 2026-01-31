import '../../styles/components/stats-section.css';

export function StatsSection() {
  return (
    <section className="stats-section consistent-padding-x consistent-padding-y">
      <div className="stats-text">
        <h2>Millions of players trust us for their trivia fix</h2>
        <p>Our community grows stronger every day. Players worldwide compete, learn, and connect through trivia battles that matter.</p>
      </div>
      <div className="start-cards">
        <div className="stat-card">
          <div className="sc-head">2M+</div>
          <div className="sc-title">Active players monthly</div>
          <div className="sc-subtitle">Competing in real-time matches</div>
        </div>
        <div className="stat-card">
          <div className="sc-head">50K+</div>
          <div className="sc-title">Trivia questions available</div>
          <div className="sc-subtitle">Across dozens of categories</div>
        </div>
        <div className="stat-card">
          <div className="sc-head">100M+</div>
          <div className="sc-title">Games played total</div>
          <div className="sc-subtitle">Since our platform launched</div>
        </div>
      </div>
    </section>
  );
}
