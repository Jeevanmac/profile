import React from 'react';
import { motion } from 'framer-motion';
import { Trophy } from 'lucide-react';
import styles from './AchievementsGrid.module.css';

const achievements = [
  'Built scalable cross-platform Flutter applications',
  'Developed intelligent ML recommendation systems',
  'Designed comprehensive UI/UX prototypes in Figma',
  'Crafted modern, visually stunning web designs prioritizing responsive UX/UI layouts',
  'Developed intermediate-level, high-performance web applications using robust front-end practices',
  'Integrated secure REST APIs in production apps'
];

export const AchievementsGrid = () => {
  return (
    <section className={styles.achievementsSection}>
      <div className={styles.header}>
        <h2 className={styles.heading}>Key Achievements</h2>
        <p className={styles.subheading}>Milestones in my development journey.</p>
      </div>

      <div className={styles.grid}>
        {achievements.map((achievement, index) => (
          <motion.div 
            key={index}
            className={styles.card}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <div className={styles.iconWrapper}>
              <Trophy size={18} />
            </div>
            <p className={styles.text}>{achievement}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
