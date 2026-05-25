import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '../context/ThemeProvider';
import { Moon, Sun, ChevronLeft, ChevronRight } from 'lucide-react';
import styles from './Navbar.module.css';
import clsx from 'clsx';
import logo from '../assets/logo.png';
import lightLogo from '../assets/light_mode_logo.png';

const navItems = ['Home', 'About', 'Projects', 'Experience', 'Certificates', 'Contact'];

export const Navbar = ({ activeTab, setActiveTab }) => {
  const { theme, toggleTheme } = useTheme();
  const [isLogoOpen, setIsLogoOpen] = useState(false);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(false);
  const navLinksRef = useRef(null);
  const logoSrc = theme === 'light' ? lightLogo : logo;

  const handleScroll = () => {
    if (navLinksRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = navLinksRef.current;
      setShowLeftArrow(scrollLeft > 5);
      setShowRightArrow(scrollLeft < scrollWidth - clientWidth - 5);
    }
  };

  const scrollLeft = () => {
    if (navLinksRef.current) {
      navLinksRef.current.scrollBy({
        left: -120,
        behavior: 'smooth'
      });
    }
  };

  const scrollRight = () => {
    if (navLinksRef.current) {
      navLinksRef.current.scrollBy({
        left: 120,
        behavior: 'smooth'
      });
    }
  };

  // Handle scroll checks on mount and window resize
  useEffect(() => {
    const timer = setTimeout(handleScroll, 100);
    window.addEventListener('resize', handleScroll);
    return () => {
      clearTimeout(timer);
      window.removeEventListener('resize', handleScroll);
    };
  }, []);

  // Handle auto-scrolling active tab into view and checking scroll indicators
  useEffect(() => {
    if (navLinksRef.current) {
      const activeEl = navLinksRef.current.querySelector('.' + styles.activeText);
      if (activeEl) {
        activeEl.scrollIntoView({
          behavior: 'smooth',
          block: 'nearest',
          inline: 'center'
        });
      }
    }
    const timer = setTimeout(handleScroll, 400); // Check after smooth scrolling finishes
    return () => clearTimeout(timer);
  }, [activeTab]);

  // Handle body scroll locking
  useEffect(() => {
    if (isLogoOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isLogoOpen]);

  // Handle ESC key to close
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setIsLogoOpen(false);
      }
    };
    if (isLogoOpen) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isLogoOpen]);

  return (
    <header className={styles.header}>
      <nav className={clsx('glass', styles.nav)}>
        <div 
          className={styles.logo}
          onClick={() => setIsLogoOpen(true)}
          role="button"
          tabIndex={0}
          aria-label="View enlarged profile logo"
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              e.preventDefault();
              setIsLogoOpen(true);
            }
          }}
          style={{ cursor: 'pointer' }}
        >
          <img src={logoSrc} alt="Logo" style={{ width: '48px', height: '48px', borderRadius: '50%', display: 'block' }} />
        </div>
        
        {/* Left Scroll Arrow */}
        <button 
          className={clsx(styles.scrollArrow, !showLeftArrow && styles.arrowDisabled)}
          onClick={scrollLeft}
          disabled={!showLeftArrow}
          aria-label="Scroll navigation left"
        >
          <ChevronLeft size={16} />
        </button>

        {/* Center Scrollable Links */}
        <div className={styles.scrollWrapper}>
          <ul 
            ref={navLinksRef} 
            className={styles.navLinks} 
            onScroll={handleScroll}
          >
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
        </div>

        {/* Right Scroll Arrow */}
        <button 
          className={clsx(styles.scrollArrow, !showRightArrow && styles.arrowDisabled)}
          onClick={scrollRight}
          disabled={!showRightArrow}
          aria-label="Scroll navigation right"
        >
          <ChevronRight size={16} />
        </button>
        
        <button onClick={toggleTheme} className={styles.themeToggle} aria-label="Toggle theme">
          {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
        </button>
      </nav>

      {/* Centered macOS-style Popup */}
      <AnimatePresence>
        {isLogoOpen && (
          <motion.div
            className={styles.modalOverlay}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            onClick={() => setIsLogoOpen(false)}
            aria-modal="true"
            role="dialog"
            aria-label="Logo preview modal"
          >
            <motion.div
              className={styles.modalContent}
              initial={{ opacity: 0, scale: 0.85, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.85, y: 10 }}
              transition={{
                duration: 0.4,
                ease: [0.16, 1, 0.3, 1], // macOS-style premium easing
              }}
              onClick={(e) => e.stopPropagation()}
            >
              <button 
                className={styles.modalCloseButton} 
                onClick={() => setIsLogoOpen(false)}
                aria-label="Close modal"
              >
                &times;
              </button>
              
              <div className={styles.modalImageWrapper}>
                <img src={logoSrc} alt="Enlarged Logo" className={styles.modalImage} />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
