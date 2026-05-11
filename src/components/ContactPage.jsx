import React from 'react';
import { motion } from 'framer-motion';
import { ContactCards } from './ContactCards';
import { ContactForm } from './ContactForm';
import { OpenForCards } from './OpenForCards';
import styles from './ContactPage.module.css';

export const ContactPage = () => {
  return (
    <div className={styles.pageWrapper}>
      {/* Hero Section */}
      <section className={styles.heroSection}>
        <div className={styles.animatedBackground}>
          <div className={styles.gridOverlay}></div>
        </div>
        <motion.div 
          className={styles.heroContent}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <h1 className={styles.heading}>Let’s Build Something Meaningful.</h1>
          <p className={styles.subheading}>
            Open to Flutter, Frontend, AI and creative product opportunities.
          </p>
        </motion.div>
      </section>

      {/* Main Split Layout */}
      <section className={styles.contactSection}>
        <div className={styles.splitLayout}>
          {/* Left Side: Cards */}
          <div className={styles.leftColumn}>
            <ContactCards />
          </div>

          {/* Right Side: Form */}
          <div className={styles.rightColumn}>
            <ContactForm />
          </div>
        </div>
      </section>

      {/* Open For Section */}
      <section className={styles.openForSection}>
        <OpenForCards />
      </section>
    </div>
  );
};
