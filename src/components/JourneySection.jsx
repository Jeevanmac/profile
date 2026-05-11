import React from 'react';
import { motion } from 'framer-motion';
import styles from './JourneySection.module.css';

export const JourneySection = () => {
  return (
    <section className={styles.journeySection} id="experience">
      <motion.div 
        className={styles.header}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.6 }}
      >
        <h2 className={styles.heading}>Personal Journey</h2>
        <p className={styles.subheading}>From an IT student to a specialized developer.</p>
      </motion.div>

      <div className={styles.content}>
        <motion.div 
          className={styles.storyBlock}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <p className={styles.paragraph}>
            My journey into software engineering began during my Information Technology studies, where I discovered a passion for building products that people can interact with. I quickly gravitated towards frontend technologies and cross-platform mobile development, finding my niche in <strong>Flutter</strong>.
          </p>
          <p className={styles.paragraph}>
            Over time, I expanded my focus into the world of Artificial Intelligence. Learning how to integrate machine learning models and build intelligent workflows gave me a product-building mindset. I realized that a great application isn't just about a beautiful UI—it's about how smart, responsive, and scalable the underlying systems are.
          </p>
          <p className={styles.paragraph}>
            Today, I focus on bridging the gap between elegant user experiences and powerful data-driven backends, constantly learning through real-world projects and hands-on experimentation.
          </p>
        </motion.div>
      </div>
    </section>
  );
};
