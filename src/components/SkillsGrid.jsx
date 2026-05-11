import React from 'react';
import { motion } from 'framer-motion';
import { Smartphone, BrainCircuit, Layout, Server } from 'lucide-react';
import styles from './SkillsGrid.module.css';

const skills = [
  { name: 'Mobile Development', icon: <Smartphone size={24} />, description: 'Building high-performance, cross-platform mobile experiences with Flutter.' },
  { name: 'AI & Data', icon: <BrainCircuit size={24} />, description: 'Integrating intelligent workflows, machine learning models, and data pipelines.' },
  { name: 'Frontend', icon: <Layout size={24} />, description: 'Crafting responsive, modern web interfaces using React and modern CSS frameworks.' },
  { name: 'Backend & APIs', icon: <Server size={24} />, description: 'Designing robust RESTful APIs and scalable backend architectures.' },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

export const SkillsGrid = () => {
  return (
    <section className={styles.skillsSection} id="about">
      <div className={styles.header}>
        <h2 className={styles.heading}>Featured Skills</h2>
        <p className={styles.subheading}>Core technologies driving my development process.</p>
      </div>

      <motion.div 
        className={styles.grid}
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
      >
        {skills.map((skill, index) => (
          <motion.div key={index} variants={itemVariants} className={styles.card}>
            <div className={styles.iconWrapper}>
              {skill.icon}
            </div>
            <h3 className={styles.cardTitle}>{skill.name}</h3>
            <p className={styles.cardDescription}>{skill.description}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};
