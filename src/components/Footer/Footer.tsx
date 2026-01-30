import {
  footerColumns,
  FooterColumnType,
  legalLinks,
  LinkItem,
} from "../../config/components/Footer";
import "../../styles/components/Footer.css";

export function FooterColumn({ item }: { item: FooterColumnType }) {
  return (
    <ul className="footer-col">
      <li>
        <header>{item.heading}</header>
      </li>
      {item.items.map((i: LinkItem, idx: number) => (
        <li key={idx}>
          <a href={i.link}>{i.label}</a>
        </li>
      ))}
    </ul>
  );
}

export function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <section className="footer-main">
          <div className="logo-sec">
            <div className="part1">Triv</div>
            <div className="part2">IQ</div>
          </div>
          <div className="links-sec">
            {footerColumns.map((i: FooterColumnType, idx: number) => (
              <FooterColumn item={i} key={idx} />
            ))}
          </div>
        </section>
        <section className="footer-bottom">
          <div className="copyright-line">
            © 2025 TrivIQ. All rights reserved.
          </div>
          <ul className="legal-links">
            {legalLinks.map((i, idx) => (
              <li key={idx}>
                <a href={i.link}>{i.label}</a>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </footer>
  );
}
