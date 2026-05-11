import React from 'react';
import styles from './Footer.module.css';

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.availabilityBadge}>
          <span className={styles.statusDot}></span>
          <span className={styles.statusText}>Open to Flutter, Frontend & AI Roles</span>
        </div>
        
        <div className={styles.bottomBar}>
          <p className={styles.copyright}>
            © {new Date().getFullYear()} Jeevan. All rights reserved.
          </p>
          <p className={styles.madeWith}>
            Designed with minimal aesthetics & built with React.
          </p>
        </div>
      </div>
    </footer>
  );
};
