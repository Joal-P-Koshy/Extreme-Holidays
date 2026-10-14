
import { useState } from "react";
import { motion } from "motion/react";
import { gallery } from "../../data/siteData";
import "./Gallery.css";

const INITIAL_COUNT = 6;
const LOAD_COUNT = 6;

const leftVariants = {
  hidden: {
    opacity: 0,
    x: -70,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.7,
      ease: "easeOut",
    },
  },
};

const tabsVariants = {
  hidden: {
    opacity: 1,
    x: 0,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const tabButtonVariants = {
  hidden: {
    opacity: 0,
    x: -50,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const imageVariants = {
  hidden: {
    opacity: 0,
    y: 70,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

export default function Gallery() {
  const tabs = Object.keys(gallery);

  const [tab, setTab] = useState(tabs[0]);
  const [active, setActive] = useState(null);
  const [visibleCount, setVisibleCount] = useState(INITIAL_COUNT);

  const photos = gallery[tab];
  const visiblePhotos = photos.slice(0, visibleCount);
  const hasMore = visibleCount < photos.length;

  const handleTabChange = (newTab) => {
    setTab(newTab);
    setVisibleCount(INITIAL_COUNT);
  };

  const handleLoadMore = () => {
    setVisibleCount((count) =>
      Math.min(count + LOAD_COUNT, photos.length)
    );
  };

  const handleShowLess = () => {
    setVisibleCount(INITIAL_COUNT);
  };

  return (
    <section id="gallery" className="section gallery">
      <div className="container">
        {/* Gallery title */}
        <motion.h2
          className="section-title"
          variants={leftVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.5 }}
        >
          Gallery
        </motion.h2>

        {/* Category buttons */}
        <motion.div
          className="gallery__tabs"
          role="tablist"
          variants={tabsVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
        >
          {tabs.map((t) => (
            <motion.button
              key={t}
              role="tab"
              aria-selected={t === tab}
              className={t === tab ? "is-active" : ""}
              onClick={() => handleTabChange(t)}
              variants={tabButtonVariants}
            >
              {t}
            </motion.button>
          ))}
        </motion.div>

        {/* Gallery images */}
        <motion.ul
          className="gallery__grid"
          key={`${tab}-${visibleCount}`}
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.12,
              },
            },
          }}
        >
          {visiblePhotos.map((src, i) => (
            <motion.li key={`${tab}-${src}-${i}`} variants={imageVariants}>
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

        {/* Load More / Show Less */}
        {photos.length > INITIAL_COUNT && (
          <div className="gallery__actions">
            {hasMore ? (
              <button
                type="button"
                className="gallery__load-more"
                onClick={handleLoadMore}
              >
                Load More
                <span aria-hidden="true"> ↓</span>
              </button>
            ) : (
              <button
                type="button"
                className="gallery__load-more"
                onClick={handleShowLess}
              >
                Show Less
                <span aria-hidden="true"> ↑</span>
              </button>
            )}
          </div>
        )}
      </div>

      {/* Image lightbox */}
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
            Close
          </button>

          <img
            src={active}
            alt=""
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </section>
  );
}
