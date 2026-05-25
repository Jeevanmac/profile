import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, CheckCircle } from 'lucide-react';
import styles from './ContactCards.module.css';

import githubIcon from '../assets/icons/github.svg';
import linkedinIcon from '../assets/icons/linkedin.svg';
import gmailIcon from '../assets/icons/gmail.svg';

const contactInfo = [
  { icon: <img src={gmailIcon} alt="Email" width="20" height="20" />, title: 'Email', value: 'gmac010102@gmail.com', link: 'mailto:gmac010102@gmail.com' },
  { icon: <img src={linkedinIcon} alt="LinkedIn" width="20" height="20" />, title: 'LinkedIn', value: 'linkedin.com/in/jeevan-g', link: 'https://www.linkedin.com/in/jeevan-g-18321b1ab' },
  { icon: <img src={githubIcon} alt="GitHub" width="20" height="20" />, title: 'GitHub', value: 'github.com/Jeevanmac', link: 'https://github.com/Jeevanmac' },
  { icon: <MapPin size={20} />, title: 'Location', value: 'Hyderabad, India', link: null }
];

export const ContactCards = () => {
  return (
    <div className={styles.cardsContainer}>
      <motion.div 
        className={styles.statusCard}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <div className={styles.statusIcon}>
          <CheckCircle size={20} />
        </div>
        <div>
          <h3 className={styles.statusTitle}>Availability Status</h3>
          <p className={styles.statusText}>Open to full-time roles & freelance projects.</p>
        </div>
      </motion.div>

      <div className={styles.infoGrid}>
        {contactInfo.map((info, index) => {
          const isLink = !!info.link;
          const CardComponent = isLink ? motion.a : motion.div;
          const extraProps = isLink 
            ? { href: info.link, target: '_blank', rel: 'noopener noreferrer' } 
            : {};

          return (
            <CardComponent 
              key={index}
              className={`${styles.infoCard} ${isLink ? styles.clickableCard : ''}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              {...extraProps}
            >
              <div className={styles.iconWrapper}>
                {info.icon}
              </div>
              <div className={styles.infoContent}>
                <h4 className={styles.infoTitle}>{info.title}</h4>
                <span className={isLink ? styles.infoValueLink : styles.infoValue}>
                  {info.value}
                </span>
              </div>
            </CardComponent>
          );
        })}
      </div>
    </div>
  );
};
