
import { useEffect, useState } from "react";
import { motion } from "motion/react";
import { heroSlides } from "../../data/siteData";
import "./Hero.css";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
};

export default function Hero() {
  const [index, setIndex] = useState(0);

  // Automatically change background slides
  useEffect(() => {
    if (!heroSlides || heroSlides.length === 0) return;

    const timer = setInterval(() => {
      setIndex((current) => (current + 1) % heroSlides.length);
    }, 3000);

    return () => clearInterval(timer);
  }, []);

  // Prevent rendering if there are no slides
  if (!heroSlides || heroSlides.length === 0) {
    return (
      <section id="home" className="hero" aria-label="Welcome">
        <div className="container hero__content">
          <h1 className="hero__title">
            Vacate your life. Bring back the memories.
          </h1>
        </div>
      </section>
    );
  }

  return (
    <section id="home" className="hero" aria-label="Welcome">

      {/* Animated background slideshow */}
      {heroSlides.map((slide, i) => (
        <motion.div
          key={slide.title}
          className="hero__slide"
          style={{
            backgroundImage: `url(${slide.image})`,
            zIndex: i === index ? 0 : -1,
          }}
          initial={false}
          animate={{
            opacity: i === index ? 1 : 0,
          }}
          transition={{
            duration: 1.2,
            ease: "easeInOut",
          }}
          aria-hidden="true"
        />
      ))}

      {/* Dark overlay */}
      <div className="hero__shade" />

      {/* Hero content animation */}
      <motion.div
        className="container hero__content"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{
          once: false,
          amount: 0.3,
        }}
      >
        <motion.h1
          className="hero__title"
          variants={itemVariants}
        >
          Vacate your life. Bring back the memories.
        </motion.h1>

        <motion.p
          className="hero__text"
          variants={itemVariants}
        >
          Adventure and holiday packages from Kochi, Kerala:
          scuba diving, trekking, cycling, backwater fishing and island escapes.
        </motion.p>

        {/* Action buttons */}
        <motion.div
          className="hero__actions"
          variants={itemVariants}
        >
          <motion.a
            href="#adventure"
            className="btn btn-1"
            whileHover={{
              scale: 1.06,
              y: -3,
            }}
            whileTap={{
              scale: 0.96,
            }}
          >
            Explore adventures
          </motion.a>

          <motion.a
            href="#holidays"
            className="btn btn-ghost btn-2"
            whileHover={{
              scale: 1.06,
              y: -3,
            }}
            whileTap={{
              scale: 0.96,
            }}
          >
            See holidays
          </motion.a>
        </motion.div>

        {/* Slideshow navigation dots */}
        <motion.div
          className="hero__dots"
          variants={itemVariants}
        >
          {heroSlides.map((slide, i) => (
            <motion.button
              key={slide.title}
              type="button"
              className={i === index ? "is-active" : ""}
              onClick={() => setIndex(i)}
              aria-label={`Show ${slide.title}`}
              aria-pressed={i === index}
              animate={{
                scale: i === index ? 1.25 : 1,
                opacity: i === index ? 1 : 0.65,
              }}
              whileHover={{
                scale: 1.3,
              }}
              transition={{
                duration: 0.25,
              }}
            />
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}




// import { useEffect, useState } from "react";
// import { heroSlides } from "../../data/siteData";
// import "./Hero.css";

// export default function Hero() {
//   const [index, setIndex] = useState(0);

//   useEffect(() => {
//     const t = setInterval(() => setIndex((i) => (i + 1) % heroSlides.length), 3000);
//     return () => clearInterval(t);
//   }, []);

//   return (
//     <section id="home" className="hero" aria-label="Welcome">
//       {heroSlides.map((s, i) => (
//         <div key={s.title} className={`hero__slide ${i === index ? "is-active" : ""}`} 
//               style={{ backgroundImage: `url(${s.image})` }} aria-hidden="true" />
//       ))}
//       <div className="hero__shade" />
//       <div className="container hero__content">
//         <h1 className="hero__title">Vacate your life. Bring back the memories.</h1>
//         <p className="hero__text">Adventure and holiday packages from Kochi, Kerala: 
//           scuba diving, trekking, cycling, backwater fishing, Ayurveda and island escapes.</p>
//         <div className="hero__actions">
//           <a href="#adventure" className="btn btn-1">Explore adventures</a>
//           <a href="#holidays" className="btn btn-ghost btn-2">See holidays</a>
//         </div>
//         {/* <p className="hero__now" aria-live="polite">Now showing: {heroSlides[index].title}</p> */}
//         <div className="hero__dots">
//           {heroSlides.map((s, i) => (
//             <button key={s.title} className={i === index ? "is-active" : ""} 
//             onClick={() => setIndex(i)} aria-label={`Show ${s.title}`} />
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }
