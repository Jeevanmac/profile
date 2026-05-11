import React from 'react';
import { motion } from 'framer-motion';
import { Smartphone, Layout, PenTool, BrainCircuit } from 'lucide-react';
import styles from './OpenForCards.module.css';

const openForServices = [
  { icon: <Smartphone size={24} />, title: 'Flutter Development' },
  { icon: <Layout size={24} />, title: 'Frontend Projects' },
  { icon: <PenTool size={24} />, title: 'UI/UX Collaboration' },
  { icon: <BrainCircuit size={24} />, title: 'AI/ML Projects' }
];

export const OpenForCards = () => {
  return (
    <div className={styles.sectionContainer}>
      <h3 className={styles.sectionTitle}>Currently Open For</h3>
      
      <div className={styles.cardsGrid}>
        {openForServices.map((service, index) => (
          <motion.div 
            key={index}
            className={styles.serviceCard}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
          >
            <div className={styles.iconWrapper}>
              {service.icon}
            </div>
            <span className={styles.serviceTitle}>{service.title}</span>
          </motion.div>
        ))}
      </div>
    </div>
  );
};
