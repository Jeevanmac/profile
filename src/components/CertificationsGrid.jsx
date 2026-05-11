import React from 'react';
import { motion } from 'framer-motion';
import { Award } from 'lucide-react';
import styles from './CertificationsGrid.module.css';

const certifications = [
  'Data Science Certification – ExcelR Solutions',
  'Google Kaggle Python Certificate',
  'HackerRank Java Certification',
  'Microsoft Excel – Coursera',
  'Python Programming – Coursera',
  'TCS iON Career Edge',
  'HTML & CSS Certification',
  'AMCAT Qualification Certificate'
];

export const CertificationsGrid = () => {
  return (
    <section className={styles.certSection} id="certifications">
      <div className={styles.header}>
        <h2 className={styles.heading}>Certifications</h2>
        <p className={styles.subheading}>Continuous learning and skill validation.</p>
      </div>

      <div className={styles.grid}>
        {certifications.map((cert, index) => (
          <motion.div 
            key={index}
            className={styles.card}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ y: -4, backgroundColor: 'var(--bg-secondary)' }}
          >
            <Award className={styles.icon} size={20} />
            <span className={styles.certText}>{cert}</span>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
