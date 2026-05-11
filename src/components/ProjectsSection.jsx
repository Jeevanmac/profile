import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Code, ArrowRight } from 'lucide-react';
import { projectsData } from '../data/projectsData';
import styles from './ProjectsSection.module.css';

export const ProjectsSection = ({ setActiveTab }) => {
  // Show only the first 2 projects on the home page
  const homeProjects = projectsData.slice(0, 2);

  return (
    <section className={styles.projectsSection} id="projects">
      <div className={styles.header}>
        <h2 className={styles.heading}>Selected Work</h2>
        <p className={styles.subheading}>A look at some of my recent projects.</p>
      </div>

      <div className={styles.projectsGrid}>
        {homeProjects.map((project, index) => (
          <motion.div 
            key={index} 
            className={styles.projectCard}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            whileHover={{ y: -8, scale: 1.02 }}
            onClick={() => {
              setActiveTab('Projects');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          >
            <div className={styles.imageContainer}>
              <img src={project.image} alt={project.title} className={styles.projectImage} />
              <div className={styles.imageOverlay}>
                <div className={styles.links}>
                  <a href={project.links.live} className={styles.linkIcon} aria-label="View live site">
                    <ExternalLink size={20} />
                  </a>
                  <a href={project.links.github} className={styles.linkIcon} aria-label="View source code">
                    <Code size={20} />
                  </a>
                </div>
              </div>
            </div>
            <div className={styles.content}>
              <h3 className={styles.projectTitle}>{project.title}</h3>
              <p className={styles.projectDescription}>{project.shortDescription}</p>
              <div className={styles.tags}>
                {project.tags.slice(0, 3).map(tag => (
                  <span key={tag} className={styles.tag}>{tag}</span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <div className={styles.footerActions}>
        <button 
          className={styles.viewMoreBtn}
          onClick={() => {
            setActiveTab('Projects');
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
        >
          View All Projects <ArrowRight size={18} />
        </button>
      </div>
    </section>
  );
};
