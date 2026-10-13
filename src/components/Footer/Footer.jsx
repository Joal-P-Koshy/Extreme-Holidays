import { company, navLinks } from "../../data/siteData";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div>
          <strong className="footer__name">{company.name}</strong>
          <p>Kochi, Kerala</p>
        </div>
        <nav aria-label="Footer">
          {navLinks.map((l) => <a key={l.href} href={l.href}>{l.label}</a>)}
        </nav>
      </div>
      <div className="container footer__legal">
        &copy; {new Date().getFullYear()} {company.legalName} All rights reserved.
      </div>
    </footer>
  );
}
