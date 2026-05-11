import React from 'react';
import { motion } from 'framer-motion';
import styles from './TechStackSection.module.css';

const techStack = [
  {
    category: 'Mobile Development',
    items: ['Flutter', 'Dart', 'Firebase', 'SQLite']
  },
  {
    category: 'Frontend',
    items: ['React', 'Tailwind CSS', 'Framer Motion']
  },
  {
    category: 'AI & Data',
    items: ['Python', 'Machine Learning', 'EDA', 'Streamlit']
  },
  {
    category: 'Backend & APIs',
    items: ['Flask', 'REST APIs', 'JSON', 'SQL']
  },
  {
    category: 'Tools',
    items: ['Git', 'Android Studio', 'VS Code', 'Figma']
  }
];

export const TechStackSection = () => {
  return (
    <section className={styles.techSection} id="tech-stack">
      <div className={styles.header}>
        <h2 className={styles.heading}>Tech Stack</h2>
        <p className={styles.subheading}>Tools and technologies I use to build digital experiences.</p>
      </div>

      <div className={styles.grid}>
        {techStack.map((stack, index) => (
          <motion.div 
            key={index}
            className={styles.categoryCard}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <h3 className={styles.categoryTitle}>{stack.category}</h3>
            <div className={styles.itemsContainer}>
              {stack.items.map((item, i) => (
                <span key={i} className={styles.techItem}>{item}</span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
