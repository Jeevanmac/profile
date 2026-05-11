import React from 'react';
import { motion } from 'framer-motion';
import styles from './SkillsJourney.module.css';

const skills = [
  { name: 'Flutter Development', level: 90 },
  { name: 'AI & Machine Learning', level: 75 },
  { name: 'UI/UX Design', level: 85 },
  { name: 'Frontend Development', level: 80 },
  { name: 'REST APIs', level: 85 }
];

export const SkillsJourney = () => {
  return (
    <section className={styles.skillsSection}>
      <div className={styles.header}>
        <h2 className={styles.heading}>Skills Journey</h2>
        <p className={styles.subheading}>Continuous progression across technical domains.</p>
      </div>

      <div className={styles.skillsContainer}>
        {skills.map((skill, index) => (
          <div key={index} className={styles.skillItem}>
            <div className={styles.skillHeader}>
              <span className={styles.skillName}>{skill.name}</span>
            </div>
            <div className={styles.progressBarBg}>
              <motion.div 
                className={styles.progressBarFill}
                initial={{ width: 0 }}
                whileInView={{ width: `${skill.level}%` }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: index * 0.1, ease: "easeOut" }}
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
