import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { projectsData } from '../data/projectsData';
import { ProjectModal } from './ProjectModal';
import styles from './ProjectsPage.module.css';

const filters = ['All', 'Full-Stack', 'UI/UX', 'Frontend', 'Flutter', 'AI/ML'];

export const ProjectsPage = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const [selectedProject, setSelectedProject] = useState(null);

  const filteredProjects = projectsData.filter(project => {
    if (activeFilter === 'All') return true;
    return project.category === activeFilter;
  });

  return (
    <div className={styles.pageWrapper}>
      {/* Hero Section */}
      <section className={styles.heroSection}>
        <div className={styles.animatedBackground}>
          <div className={styles.gridOverlay}></div>
          <div className={styles.gradientMesh}></div>
        </div>
        <motion.div 
          className={styles.heroContent}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <h1 className={styles.heading}>Selected Work</h1>
          <p className={styles.subheading}>
            A collection of applications, intelligent systems and digital experiences built with modern technologies.
          </p>
        </motion.div>
      </section>

      {/* Filter System */}
      <section className={styles.filterSection}>
        <div className={styles.filterContainer}>
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`${styles.filterBtn} ${activeFilter === filter ? styles.active : ''}`}
            >
              {activeFilter === filter && (
                <motion.div
                  layoutId="activeFilterIndicator"
                  className={styles.filterIndicator}
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}
              <span className={styles.filterText}>{filter}</span>
            </button>
          ))}
        </div>
      </section>

      {/* Project Grid */}
      <section className={styles.gridSection}>
        <motion.div layout className={styles.projectGrid}>
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                layout
                layoutId={`card-${project.id}`}
                key={project.id}
                className={styles.projectCard}
                onClick={() => setSelectedProject(project)}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9, transition: { duration: 0.2 } }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                whileHover="hover"
              >
                <div className={styles.imageWrapper}>
                  <motion.img 
                    layoutId={`image-${project.id}`}
                    src={project.image} 
                    alt={project.title} 
                    className={styles.cardImage}
                    variants={{
                      hover: { scale: 1.05 }
                    }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                  />
                  <div className={styles.imageOverlay}></div>
                </div>
                
                <div className={styles.cardContent}>
                  <div className={styles.cardHeader}>
                     <span className={styles.cardCategory}>{project.category}</span>
                     <div className={styles.statusBadge}>
                        <span className={styles.statusDot}></span>
                        {project.status}
                     </div>
                  </div>
                  <motion.h3 layoutId={`title-${project.id}`} className={styles.cardTitle}>
                    {project.title}
                  </motion.h3>
                  <p className={styles.cardDescription}>{project.shortDescription}</p>
                  
                  <div className={styles.tagsContainer}>
                    {project.tags.slice(0, 3).map((tag, idx) => (
                      <span key={idx} className={styles.tag}>{tag}</span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </section>

      {/* Fullscreen Modal */}
      <AnimatePresence>
        {selectedProject && (
          <ProjectModal 
            project={selectedProject} 
            onClose={() => setSelectedProject(null)} 
          />
        )}
      </AnimatePresence>
    </div>
  );
};
