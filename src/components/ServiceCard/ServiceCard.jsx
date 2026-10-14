
import "./ServiceCard.css";

export default function ServiceCard({
  title,
  image,
  text,
  onEnquire,
  cta = "Enquire about this package",
}) {
  return (
    <article className="service-card">
      <img src={image} alt={title} loading="lazy" />

      <div className="service-card__body">
        <h3>{title}</h3>
        <p>{text}</p>

        <button
          type="button"
          className="service-card__enquire"
          onClick={onEnquire}
        >
          {cta}
        </button>
      </div>
    </article>
  );
}











// import "./ServiceCard.css";

// export default function ServiceCard({
//   title,
//   image,
//   text,
//   onEnquire,
// }) {
//   return (
//     <article className="service-card">
//       <img src={image} alt={title} loading="lazy" />
//       <div className="service-card__body">
//         <h3>{title}</h3>
//         <p>{text}</p>

//         <button
//           type="button"
//           className="service-card__enquire"
//           onClick={onEnquire}
//         >
//           Enquire about this package
//         </button>

//         {/* <a className="service-card__cta" href={link || "#contact"}>{cta}</a> */}
//       </div>
//     </article>
//   );
// }
