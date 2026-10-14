
import { useState } from "react";
import { motion } from "motion/react";
import { holidays } from "../../data/siteData";
import ServiceCard from "../ServiceCard/ServiceCard";
import PackageModal from "../PackageModal/PackageModal";
import "./Holidays.css";

const introVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.18,
    },
  },
};

const waterDropVariants = {
  hidden: {
    opacity: 0,
    y: -65,
    scale: 0.75,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 180,
      damping: 12,
      mass: 0.8,
    },
  },
};

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 55,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.65,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export default function Holidays() {
  const [selectedPackage, setSelectedPackage] = useState(null);

  return (
    <section id="holidays" className="section holidays">
      <div className="container">

        {/* Water-drop title and description */}
        <motion.div
          className="holidays__intro"
          variants={introVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
        >
          <motion.h2
            className="section-title"
            variants={waterDropVariants}
          >
            Holidays
          </motion.h2>

          <motion.p
            className="section-lead"
            variants={waterDropVariants}
          >
            From the backwaters of Kerala to the islands of
            Lakshadweep and Andaman, and on to the open sea.
          </motion.p>
        </motion.div>

        {/* Scroll-triggered staggered cards */}
        <motion.div
          className="holidays__grid"
          variants={introVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.15 }}
        >
          {holidays.map((h) => (
            <motion.div
              key={h.title}
              className="holidays__item"
              variants={cardVariants}
            >
              <ServiceCard
                {...h}
                cta="Enquire about this package"
                onEnquire={() => setSelectedPackage(h)}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Existing enquiry modal */}
      {selectedPackage && (
        <PackageModal
          packageData={selectedPackage}
          onClose={() => setSelectedPackage(null)}
        />
      )}
    </section>
  );
}
