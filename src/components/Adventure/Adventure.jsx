
import { useState } from "react";
import { motion } from "motion/react";
import { adventures } from "../../data/siteData";
import ServiceCard from "../ServiceCard/ServiceCard";
import PackageModal from "../PackageModal/PackageModal";
import "./Adventure.css";

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

export default function Adventure() {
  const [selectedPackage, setSelectedPackage] = useState(null);

  return (
    <section id="adventure" className="section adventure">
      <div className="container">

        {/* Water-drop title and description */}
        <motion.div
          className="adventure__intro"
          variants={introVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
        >
          <motion.h2
            className="section-title"
            variants={waterDropVariants}
          >
            Adventure
          </motion.h2>

          <motion.p
            className="section-lead"
            variants={waterDropVariants}
          >
            Activities you always wanted to try but never knew how or
            where. Our team plans the route, the gear and the guides.
          </motion.p>
        </motion.div>

        {/* Staggered fade-up cards */}
        <motion.div
          className="adventure__grid"
          variants={introVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.15 }}
        >
          {adventures.map((a) => (
            <motion.div
              key={a.title}
              className="adventure__item"
              variants={cardVariants}
            >
              <ServiceCard
                {...a}
                onEnquire={() => setSelectedPackage(a)}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Keep the existing enquiry modal */}
      {selectedPackage && (
        <PackageModal
          packageData={selectedPackage}
          onClose={() => setSelectedPackage(null)}
        />
      )}
    </section>
  );
}
