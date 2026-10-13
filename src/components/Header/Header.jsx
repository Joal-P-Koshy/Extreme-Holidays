import { useState } from "react";
import { company, navLinks } from "../../data/siteData";
import "./Header.css";

export default function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="header">
      <div className="container header__bar">
        <a href="#home" className="header__brand" aria-label={`${company.name} home`}>
          <img src={company.logo} alt={company.name} />
        </a>
        <button className="header__toggle" aria-expanded={open} aria-controls="main-nav" onClick={() => setOpen(!open)}>
          {open ? "Close" : "Menu"}
        </button>
        <nav id="main-nav" className={`header__nav ${open ? "is-open" : ""}`} aria-label="Main">
          {navLinks.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)}>{l.label}</a>
          ))}
          <a className="btn btn-1 header__cta" href="#contact" onClick={() => setOpen(false)}>Enquire</a>
        </nav>
      </div>
    </header>
  );
}
