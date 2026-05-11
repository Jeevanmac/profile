import React from 'react';
import { motion } from 'framer-motion';
import { ExperienceTimeline } from './ExperienceTimeline';
import { SkillsJourney } from './SkillsJourney';
import { AchievementsGrid } from './AchievementsGrid';
import styles from './ExperiencePage.module.css';

export const ExperiencePage = () => {
  return (
    <div className={styles.pageWrapper}>
      {/* Hero Section */}
      <section className={styles.heroSection}>
        <div className={styles.animatedBackground}>
          <div className={styles.textureOverlay}></div>
        </div>
        <motion.div 
          className={styles.heroContent}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <h1 className={styles.heading}>Experience & Journey</h1>
          <p className={styles.subheading}>
            Building scalable applications, solving problems and growing through real-world development experience.
          </p>
        </motion.div>
      </section>

      {/* Main Content Sections */}
      <div className={styles.contentSections}>
        <ExperienceTimeline />
        <SkillsJourney />
        <AchievementsGrid />
      </div>
    </div>
  );
};
