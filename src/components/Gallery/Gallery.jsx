import { useState } from "react";
import { gallery } from "../../data/siteData";
import "./Gallery.css";

export default function Gallery() {
  const tabs = Object.keys(gallery);
  const [tab, setTab] = useState(tabs[0]);
  const [active, setActive] = useState(null);

  return (
    <section id="gallery" className="section gallery">
      <div className="container">
        <h2 className="section-title">Gallery</h2>
        <div className="gallery__tabs" role="tablist">
          {tabs.map((t) => (
            <button key={t} role="tab" aria-selected={t === tab} className={t === tab ? "is-active" : ""} onClick={() => setTab(t)}>{t} posts</button>
          ))}
        </div>
        <ul className="gallery__grid">
          {gallery[tab].map((src, i) => (
            <li key={src}>
              <button onClick={() => setActive(src)} aria-label={`Open ${tab} photo ${i + 1}`}>
                <img src={src} alt={`${tab} photo ${i + 1}`} loading="lazy" />
              </button>
            </li>
          ))}
        </ul>
      </div>
      {active && (
        <div className="gallery__lightbox" role="dialog" aria-modal="true" onClick={() => setActive(null)}>
          <button className="gallery__close" aria-label="Close photo">Close</button>
          <img src={active} alt="" />
        </div>
      )}
    </section>
  );
}
