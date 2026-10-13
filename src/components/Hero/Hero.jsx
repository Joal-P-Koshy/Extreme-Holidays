import { useEffect, useState } from "react";
import { heroSlides } from "../../data/siteData";
import "./Hero.css";

export default function Hero() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setIndex((i) => (i + 1) % heroSlides.length), 3000);
    return () => clearInterval(t);
  }, []);

  return (
    <section id="home" className="hero" aria-label="Welcome">
      {heroSlides.map((s, i) => (
        <div key={s.title} className={`hero__slide ${i === index ? "is-active" : ""}`} 
              style={{ backgroundImage: `url(${s.image})` }} aria-hidden="true" />
      ))}
      <div className="hero__shade" />
      <div className="container hero__content">
        <h1 className="hero__title">Vacate your life. Bring back the memories.</h1>
        <p className="hero__text">Adventure and holiday packages from Kochi, Kerala: 
          scuba diving, trekking, cycling, backwater fishing, Ayurveda and island escapes.</p>
        <div className="hero__actions">
          <a href="#adventure" className="btn btn-1">Explore adventures</a>
          <a href="#holidays" className="btn btn-ghost btn-2">See holidays</a>
        </div>
        {/* <p className="hero__now" aria-live="polite">Now showing: {heroSlides[index].title}</p> */}
        <div className="hero__dots">
          {heroSlides.map((s, i) => (
            <button key={s.title} className={i === index ? "is-active" : ""} 
            onClick={() => setIndex(i)} aria-label={`Show ${s.title}`} />
          ))}
        </div>
      </div>
    </section>
  );
}
