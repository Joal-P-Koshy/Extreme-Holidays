
import { useState } from "react";
import { holidays } from "../../data/siteData";
import ServiceCard from "../ServiceCard/ServiceCard";
import PackageModal from "../PackageModal/PackageModal";
import "./Holidays.css";

export default function Holidays() {
  const [selectedPackage, setSelectedPackage] = useState(null);

  return (
    <section id="holidays" className="section holidays">
      <div className="container">
        <h2 className="section-title">Holidays</h2>

        <p className="section-lead">
          From the backwaters of Kerala to the islands of
          Lakshadweep and Andaman, and on to the open sea.
        </p>

        <div className="holidays__grid">
          {holidays.map((h) => (
            <ServiceCard
              key={h.title}
              {...h}
              cta="Enquire about this package"
              onEnquire={() => setSelectedPackage(h)}
            />
          ))}
        </div>
      </div>

      {selectedPackage && (
        <PackageModal
          packageData={selectedPackage}
          onClose={() => setSelectedPackage(null)}
        />
      )}
    </section>
  );
}











// import { holidays } from "../../data/siteData";
// import ServiceCard from "../ServiceCard/ServiceCard";
// import "./Holidays.css";

// export default function Holidays() {
//   return (
//     <section id="holidays" className="section holidays">
//       <div className="container">
//         <h2 className="section-title">Holidays</h2>
//         <p className="section-lead">From the backwaters of Kerala to the islands of Lakshadweep and Andaman, and on to the open sea.</p>
//         <div className="holidays__grid">
//           {holidays.map((h) => (
//             <ServiceCard key={h.title} {...h} cta={h.link ? "View packages" : "Enquire about this package"} />
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }
