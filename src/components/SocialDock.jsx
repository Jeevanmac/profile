import React, { useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import styles from './SocialDock.module.css';

import githubIcon from '../assets/icons/github.svg';
import linkedinIcon from '../assets/icons/linkedin.svg';
import gmailIcon from '../assets/icons/gmail.svg';
import instagramIcon from '../assets/icons/instagram.svg';
import kaggleIcon from '../assets/icons/kaggle.svg';

const socialLinks = [
  { name: 'GitHub', icon: <img src={githubIcon} alt="GitHub" width="24" height="24" />, url: 'https://github.com/Jeevanmac', color: '#333' },
  { name: 'LinkedIn', icon: <img src={linkedinIcon} alt="LinkedIn" width="24" height="24" />, url: 'https://www.linkedin.com/in/jeevan-g-18321b1ab', color: '#0077b5' },
  { name: 'Email', icon: <img src={gmailIcon} alt="Email" width="24" height="24" />, url: 'mailto:gmac010102@gmail.com', color: '#EA4335' },
  { name: 'Instagram', icon: <img src={instagramIcon} alt="Instagram" width="24" height="24" />, url: 'https://instagram.com/jeevan._.ganga', color: '#e1306c' },
  { name: 'Kaggle', icon: <img src={kaggleIcon} alt="Kaggle" width="24" height="24" />, url: 'https://kaggle.com/jeevanganga', color: '#20BEFF' }
];

const DockItem = ({ item, mouseX }) => {
  const ref = useRef(null);
  
  const distance = useTransform(mouseX, (val) => {
    const bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 };
    return val - bounds.x - bounds.width / 2;
  });

  const widthSync = useTransform(distance, [-150, 0, 150], [50, 80, 50]);
  const width = useSpring(widthSync, { mass: 0.1, stiffness: 150, damping: 12 });

  return (
    <motion.a
      ref={ref}
      href={item.url}
      target="_blank"
      rel="noopener noreferrer"
      className={styles.dockItem}
      style={{ width, height: width }}
      whileHover={{ y: -10 }}
    >
      <div className={styles.iconContainer} style={{ '--hover-color': item.color }}>
        {item.icon}
      </div>
      <span className={styles.tooltip}>{item.name}</span>
    </motion.a>
  );
};

export const SocialDock = () => {
  const mouseX = useMotionValue(Infinity);

  return (
    <div className={styles.dockContainer}>
      <motion.div
        className={styles.dock}
        onMouseMove={(e) => mouseX.set(e.pageX)}
        onMouseLeave={() => mouseX.set(Infinity)}
      >
        {socialLinks.map((item, index) => (
          <DockItem key={index} item={item} mouseX={mouseX} />
        ))}
      </motion.div>
    </div>
  );
};
