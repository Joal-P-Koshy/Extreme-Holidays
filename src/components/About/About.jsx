import { about } from "../../data/siteData";
import "./About.css";

export default function About() {
  return (
    <section id="about" className="section about">
      <div className="container">
        <div className="about__intro">
          <div>
            <h2 className="section-title">Concept and introduction</h2>
            {about.intro.map((p, i) => <p key={i}>{p}</p>)}
          </div>
          <img className="about__image" src={about.image} alt="Travellers on an Extreme Holidays trip" loading="lazy" />
        </div>

        <div className="about__statements">
          <article>
            <h3>Our vision</h3>
            <p>{about.vision}</p>
          </article>
          <article>
            <h3>Mission statement</h3>
            <p>{about.mission}</p>
          </article>
        </div>

        <h3 className="about__values-title">Our values</h3>
        <p className="section-lead">Our values represent our company, our brand and our people.</p>
        <dl className="about__values">
          {about.values.map((v) => (
            <div key={v.name}>
              <dt>{v.name}</dt>
              <dd>{v.text}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
