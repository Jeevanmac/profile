import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './HeroSection.module.css';
import { ArrowRight } from 'lucide-react';

const expertiseList = [
  "Flutter Applications",
  "AI Workflows",
  "REST API Systems",
  "Machine Learning",
  "UI/UX Experiences",
  "Data Visualization"
];

export const HeroSection = ({ setActiveTab }) => {
  const [expertiseIndex, setExpertiseIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setExpertiseIndex((prev) => (prev + 1) % expertiseList.length);
    }, 2500); // slightly faster cycle for elegant feel
    return () => clearInterval(interval);
  }, []);

  return (
    <section className={styles.heroContainer}>
      <div className={styles.splitLayout}>
        {/* Left Side */}
        <motion.div 
          className={styles.leftContent}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <h1 className={styles.heading}>
            Hello — <br/> I'm Jeevan.
          </h1>
          <h2 className={styles.subheading}>
            Cross-Platform Developer Crafting <span className="gradient-text">Modern Digital Experiences.</span>
          </h2>
          
          <div className={styles.expertiseContainer}>
            <AnimatePresence mode="wait">
              <motion.p
                key={expertiseIndex}
                className={styles.expertiseText}
                initial={{ opacity: 0, filter: 'blur(10px)', y: 10 }}
                animate={{ opacity: 1, filter: 'blur(0px)', y: 0 }}
                exit={{ opacity: 0, filter: 'blur(10px)', y: -10 }}
                transition={{ duration: 0.5 }}
              >
                {expertiseList[expertiseIndex]}
              </motion.p>
            </AnimatePresence>
          </div>

          <p className={styles.descriptionText}>
            Building scalable applications, intelligent systems and seamless user experiences.
          </p>

          <div className={styles.ctaGroup}>
            <button className={styles.primaryBtn} onClick={() => setActiveTab('Projects')}>
              View Projects
              <ArrowRight size={16} className={styles.btnIcon} />
            </button>
            <button className={styles.secondaryBtn} onClick={() => setActiveTab('Contact')}>
              Contact Me
            </button>
          </div>
        </motion.div>

        {/* Right Side */}
        <motion.div 
          className={styles.rightContent}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className={styles.imageCardContainer}>
            <div className={styles.glowEffect}></div>
            <div className={styles.imageCard}>
              <img src="/profile.png" alt="Jeevan Ganga" className={styles.profileImage} />
              <div className={styles.cardOverlay}></div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
