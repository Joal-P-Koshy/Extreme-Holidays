
import { useEffect, useState } from "react";
import { motion } from "motion/react";
import { gallery } from "../../data/siteData";
import "./Gallery.css";

const INITIAL_COUNT = 6;

const leftVariants = {
  hidden: { opacity: 0, x: -70 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

const gridVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.08 },
  },
};

const imageVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.35, ease: "easeOut" },
  },
};

export default function Gallery() {
  const tabs = Object.keys(gallery);

  const [tab, setTab] = useState(tabs[0]);
  const [showAll, setShowAll] = useState(false);
  const [active, setActive] = useState(null);

  const photos = gallery[tab];
  const mainPhotos = photos.slice(0, INITIAL_COUNT);

  const closeAllPhotos = () => setShowAll(false);

  const handleTabChange = (newTab) => {
    setTab(newTab);
    setShowAll(false);
  };

  // Close the popup using the Escape key.
  useEffect(() => {
    if (!showAll && !active) return;

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        if (active) {
          setActive(null);
        } else {
          setShowAll(false);
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [showAll, active]);

  // Prevent the page behind the popup from scrolling.
  useEffect(() => {
    if (!showAll && !active) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [showAll, active]);

  return (
    <section id="gallery" className="section gallery">
      <div className="container">
        <motion.h2
          className="section-title"
          variants={leftVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.5 }}
        >
          Gallery
        </motion.h2>

        {/* Category tabs */}
        <div className="gallery__tabs" role="tablist">
          {tabs.map((t) => (
            <button
              key={t}
              type="button"
              role="tab"
              aria-selected={t === tab}
              className={t === tab ? "is-active" : ""}
              onClick={() => handleTabChange(t)}
            >
              {t}
            </button>
          ))}
        </div>

        {/* Main gallery: first six photos */}
        <motion.ul
          className="gallery__grid"
          key={`main-${tab}`}
          initial="hidden"
          animate="visible"
          variants={gridVariants}
        >
          {mainPhotos.map((src, i) => (
            <motion.li
              key={`${tab}-${src}-${i}`}
              variants={imageVariants}
            >
              <button
                type="button"
                onClick={() => setActive(src)}
                aria-label={`Open ${tab} photo ${i + 1}`}
              >
                <img
                  src={src}
                  alt={`${tab} photo ${i + 1}`}
                  loading="lazy"
                />
              </button>
            </motion.li>
          ))}
        </motion.ul>

        {/* Open all photos popup */}
        {photos.length > INITIAL_COUNT && (
          <div className="gallery__actions">
            <button
              type="button"
              className="gallery__load-more"
              onClick={() => setShowAll(true)}
            >
              Explore More Photos
              <span aria-hidden="true"> ↓</span>
            </button>
          </div>
        )}
      </div>

      {/* All photos popup */}
      {showAll && (
        <motion.div
          className="gallery__modal"
          role="dialog"
          aria-modal="true"
          aria-label={`All ${tab} photos`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={closeAllPhotos}
        >
          <motion.div
            className="gallery__modal-content"
            initial={{ opacity: 0, y: 30, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            onClick={(event) => event.stopPropagation()}
          >
            {/* Fixed close button */}
            <button
              type="button"
              className="gallery__modal-close"
              onClick={closeAllPhotos}
              aria-label="Close all photos"
              autoFocus
            >
              <span aria-hidden="true">×</span>
            </button>

            <h3 className="gallery__modal-title">
              Explore All {tab} Photos
            </h3>

            <motion.ul
              className="gallery__grid gallery__modal-grid"
              key={`modal-${tab}`}
              initial="hidden"
              animate="visible"
              variants={gridVariants}
            >
              {photos.map((src, i) => (
                <motion.li
                  key={`all-${tab}-${src}-${i}`}
                  variants={imageVariants}
                >
                  <button
                    type="button"
                    onClick={() => setActive(src)}
                    aria-label={`View ${tab} photo ${i + 1}`}
                  >
                    <img
                      src={src}
                      alt={`${tab} photo ${i + 1}`}
                      loading="lazy"
                    />
                  </button>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>
        </motion.div>
      )}

      {/* Individual photo lightbox */}
      {active && (
        <div
          className="gallery__lightbox"
          role="dialog"
          aria-modal="true"
          aria-label="Gallery photo viewer"
          onClick={() => setActive(null)}
        >
          <button
            type="button"
            className="gallery__close"
            aria-label="Close photo"
            onClick={() => setActive(null)}
          >
            ×
          </button>

          <img
            src={active}
            alt="Selected gallery photo"
            onClick={(event) => event.stopPropagation()}
          />
        </div>
      )}
    </section>
  );
}
