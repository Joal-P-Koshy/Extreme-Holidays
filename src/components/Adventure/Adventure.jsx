import { adventures } from "../../data/siteData";
import ServiceCard from "../ServiceCard/ServiceCard";
import "./Adventure.css";

export default function Adventure() {
  return (
    <section id="adventure" className="section adventure">
      <div className="container">
        <h2 className="section-title">Adventure</h2>
        <p className="section-lead">Activities you always wanted to try but never knew how or where. Our team plans the route, the gear and the guides.</p>
        <div className="adventure__grid">
          {adventures.map((a) => <ServiceCard key={a.title} {...a} />)}
        </div>
      </div>
    </section>
  );
}
