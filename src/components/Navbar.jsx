import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../context/ThemeProvider';
import { Moon, Sun } from 'lucide-react';
import styles from './Navbar.module.css';
import clsx from 'clsx';
import logo from '../assets/logo.png';
import lightLogo from '../assets/light_mode_logo.png';

const navItems = ['Home', 'About', 'Projects', 'Experience', 'Certificates', 'Contact'];

export const Navbar = ({ activeTab, setActiveTab }) => {
  const { theme, toggleTheme } = useTheme();
  const logoSrc = theme === 'light' ? lightLogo : logo;

  return (
    <header className={styles.header}>
      <nav className={clsx('glass', styles.nav)}>
        <div className={styles.logo}>
          <img src={logoSrc} alt="Logo" style={{ width: '40px', height: '40px', borderRadius: '50%', display: 'block' }} />
        </div>
        
        <ul className={styles.navLinks}>
          {navItems.map((item) => (
            <li key={item} className={styles.navItem}>
              <button
                onClick={() => setActiveTab(item)}
                className={clsx(styles.navButton, activeTab === item && styles.activeText)}
              >
                {activeTab === item && (
                  <motion.div
                    layoutId="activeTabIndicator"
                    className={styles.activeIndicator}
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
                <span className={styles.navText}>{item}</span>
              </button>
            </li>
          ))}
        </ul>
        
        <button onClick={toggleTheme} className={styles.themeToggle} aria-label="Toggle theme">
          {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
        </button>
      </nav>
    </header>
  );
};
