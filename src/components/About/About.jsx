
import { motion } from "motion/react";
import { about } from "../../data/siteData";
import "./About.css";


const fadeUp = {
  hidden: { opacity: 0, y: 25 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
};


export default function About() {
  return (
    <section id="about" className="section about">
      <div className="container">
        <motion.div
          className="about__intro"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.05 }}
          variants={{
            hidden: {},
            visible: {
              transition: { staggerChildren: 0.08 },
            },
          }}
        >

          <motion.div
            variants={{
              hidden: { opacity: 0, x: -60 },
              visible: {
                opacity: 1,
                x: 0,
                transition: {
                  duration: 0.9,
                  ease: "easeOut",
                  staggerChildren: 0.18,
                },
              },
            }}
          >
            <motion.h2
              className="section-title"
              variants={{
                hidden: { opacity: 0, x: -30 },
                visible: {
                  opacity: 1,
                  x: 0,
                  transition: { duration: 0.7, ease: "easeOut" },
                },
              }}
            >
              Concept and introduction
            </motion.h2>

            {about.intro.map((p, i) => (
              <motion.p
                key={i}
                variants={{
                  hidden: { opacity: 0, x: -30 },
                  visible: {
                    opacity: 1,
                    x: 0,
                    transition: { duration: 0.7, ease: "easeOut" },
                  },
                }}
              >
                {p}
              </motion.p>
            ))}
          </motion.div>





          <div className="about__image-hover">
            <motion.div
              className="about__image-wrapper"
              variants={{
                hidden: { opacity: 0, x: 60 },
                visible: {
                  opacity: 1,
                  x: 0,
                  transition: {
                    duration: 0.9,
                    ease: "easeOut",
                  },
                },
              }}
            >
              <img
                className="about__image"
                src={about.image}
                alt="Travellers on an Extreme Holidays trip"
                loading="lazy"
              />
            </motion.div>
          </div>



        </motion.div>


        <motion.div
          className="about__statements"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.05 }}
          variants={{
            hidden: {},
            visible: {
              transition: { staggerChildren: 0.1 },
            },
          }}
        >
          <motion.article variants={fadeUp}>
            <div className="about__statement-inner">
              <h3>Our vision</h3>
              <p>{about.vision}</p>
            </div>
          </motion.article>

          <motion.article variants={fadeUp}>
            <div className="about__statement-inner">
              <h3>Mission statement</h3>
              <p>{about.mission}</p>
            </div>
          </motion.article>
        </motion.div>


        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.05 }}
          variants={fadeUp}
        >
          <h3 className="about__values-title">Our values</h3>
          <p className="section-lead">
            Our values represent our company, our brand and our people.
          </p>
        </motion.div>

        <motion.dl
          className="about__values"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.05 }}
          variants={{
            hidden: {},
            visible: {
              transition: { staggerChildren: 0.08 },
            },
          }}
        >
          {about.values.map((v) => (
            <motion.div key={v.name} variants={fadeUp}>
              <dt>{v.name}</dt>
              <dd>{v.text}</dd>
            </motion.div>
          ))}
        </motion.dl>
      </div>
    </section>
  );
}




