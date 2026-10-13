import "./ServiceCard.css";

export default function ServiceCard({ title, image, text, link, cta = "Enquire about this package" }) {
  return (
    <article className="service-card">
      <img src={image} alt={title} loading="lazy" />
      <div className="service-card__body">
        <h3>{title}</h3>
        <p>{text}</p>
        <a className="service-card__cta" href={link || "#contact"}>{cta}</a>
      </div>
    </article>
  );
}
