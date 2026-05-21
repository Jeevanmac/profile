import React, { useState } from 'react';
import { motion } from 'framer-motion';
import styles from './AboutHero.module.css';

import educationImg from '../assets/about/education.png';
import experienceImg from '../assets/about/experience.png';
import internshipsImg from '../assets/about/internships.png';
import certificationsImg from '../assets/about/certifications.png';

const cards = [
  { id: 'education', title: 'Education', subtitle: 'Academic Background', image: educationImg },
  { id: 'experience', title: 'Experience', subtitle: 'Professional Journey', image: experienceImg },
  { id: 'training', title: 'Internships', subtitle: 'Hands-on Learning', image: internshipsImg },
  { id: 'certifications', title: 'Certifications', subtitle: 'Skill Validation', image: certificationsImg }
];

export const AboutHero = () => {
  const [hoveredCard, setHoveredCard] = useState('education');

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className={styles.aboutHeroContainer}>
      <div className={styles.splitLayout}>
        {/* Left Side */}
        <motion.div 
          className={styles.leftContent}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <h1 className={styles.heading}>
            Learn.<br/>Build.<br/><span className="gradient-text">Grow.</span>
          </h1>
          <h2 className={styles.subheading}>
            Flutter developer passionate about scalable applications, intelligent systems and modern digital experiences.
          </h2>
          <p className={styles.descriptionText}>
            Specializing in cross-platform mobile development, I blend my passion for UI/UX with a strong foundation in scalable backend systems. My growing interest in AI/ML drives me to create intelligent workflows that not only look premium but perform exceptionally well.
          </p>
        </motion.div>

        {/* Right Side - Interactive Cards */}
        <motion.div 
          className={styles.rightContent}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className={styles.cardsContainer}>
            {cards.map((card) => {
              const isHovered = hoveredCard === card.id;
              
              return (
                <motion.div
                  key={card.id}
                  className={styles.verticalCard}
                  onMouseEnter={() => setHoveredCard(card.id)}
                  onClick={() => scrollToSection(card.id)}
                  animate={{
                    flex: isHovered ? 3 : 1,
                  }}
                  transition={{ type: 'spring', stiffness: 200, damping: 25 }}
                >
                  {/* Background Image */}
                  <div 
                    className={styles.cardBg} 
                    style={{ backgroundImage: `url(${card.image})` }}
                  >
                    <div className={styles.cardOverlay}></div>
                  </div>

                  <div className={styles.cardContent}>
                    <motion.div 
                      className={styles.cardTextContainer}
                      animate={{ 
                        rotate: isHovered ? 0 : -90,
                        x: isHovered ? 0 : -10, // Move left when collapsed
                        y: isHovered ? 0 : -40  // Bring up when collapsed
                      }}
                      transition={{ duration: 0.4, ease: "easeOut" }}
                    >
                      <h3 className={styles.cardTitle}>{card.title}</h3>
                      {isHovered && (
                        <motion.p 
                          className={styles.cardSubtitle}
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.2 }}
                        >
                          {card.subtitle}
                        </motion.p>
                      )}
                    </motion.div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
