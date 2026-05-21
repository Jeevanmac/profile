import React from 'react';
import { motion } from 'framer-motion';
import styles from './EducationSection.module.css';

const educationData = [
  {
    degree: 'B.Tech – Information Technology',
    institution: 'Sri Venkateswara College of Engineering, Tirupati',
    university: 'JNTUA University',
    year: '2023'
  },
  {
    degree: 'Intermediate (MPC)',
    institution: 'Narayana Junior College',
    university: '',
    year: '2019'
  },
  {
    degree: 'Secondary Education',
    institution: 'Sri Chaitanya Techno School',
    university: '',
    year: '2017'
  }
];

export const EducationSection = () => {
  return (
    <section className={styles.educationSection} id="education">
      <div className={styles.header}>
        <h2 className={styles.heading}>Education</h2>
        <p className={styles.subheading}>My academic background.</p>
      </div>

      <div className={styles.timeline}>
        {educationData.map((item, index) => (
          <motion.div 
            key={index} 
            className={styles.timelineItem}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: index * 0.15 }}
          >
            <div className={styles.timelineDot}></div>
            {index !== educationData.length - 1 && <div className={styles.timelineConnector}></div>}
            
            <div className={styles.card}>
              <h3 className={styles.degree}>{item.degree}</h3>
              <p className={styles.institution}>{item.institution}</p>
              {item.university && <p className={styles.university}>{item.university}</p>}
              <div className={styles.scoreBadge}>Passed Out: {item.year}</div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
