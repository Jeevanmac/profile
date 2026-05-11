import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, Code, FileText, Layout, PenTool, Zap, Smartphone, ArrowRight } from 'lucide-react';
import styles from './ProjectModal.module.css';

export const ProjectModal = ({ project, onClose }) => {
  const [activeImage, setActiveImage] = useState(project.image);
  
  // Update active image if project changes
  useEffect(() => {
    setActiveImage(project.image);
  }, [project]);

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => { document.body.style.overflow = 'auto'; };
  }, []);

  const allImages = project.gallery ? [project.image, ...project.gallery] : [project.image];

  return (
    <motion.div 
      className={styles.modalOverlay}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className={styles.modalBackdrop} onClick={onClose}></div>
      
      <motion.div 
        layoutId={`card-${project.id}`}
        className={styles.modalContent}
      >
        <div className={styles.modalHeader}>
          <div className={styles.headerInfo}>
             <span className={styles.projectCategory}>{project.category}</span>
             <div className={styles.statusBadge}>
                <span className={styles.statusDot}></span>
                {project.status || 'Live'}
             </div>
          </div>
          <button className={styles.closeBtn} onClick={onClose}>
            <X size={24} />
          </button>
        </div>

        <div className={styles.modalBody}>
          <div className={styles.heroColumn}>
            {/* Main Product-style Display */}
            <div className={styles.productDisplay}>
              <motion.div 
                className={styles.mainImageWrapper}
                key={activeImage}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              >
                {activeImage.endsWith('.mp4') ? (
                  <video 
                    src={activeImage} 
                    className={styles.mainImage} 
                    autoPlay 
                    loop 
                    muted 
                    playsInline 
                  />
                ) : (
                  <img src={activeImage} alt={project.title} className={styles.mainImage} />
                )}
              </motion.div>

              {project.gallery && (
                <div className={styles.thumbnailRow}>
                   {allImages.map((img, idx) => (
                     <button 
                       key={idx} 
                       className={`${styles.thumbnail} ${activeImage === img ? styles.activeThumb : ''}`}
                       onClick={() => setActiveImage(img)}
                     >
                       {img.endsWith('.mp4') ? (
                         <video src={img} muted playsInline className={styles.thumbnailVideo} />
                       ) : (
                         <img src={img} alt={`Thumbnail ${idx}`} />
                       )}
                     </button>
                   ))}
                </div>
              )}
            </div>

            <div className={styles.caseStudySections}>
               <div className={styles.section}>
                  <h3><Zap size={20} /> The Overview</h3>
                  <p>{project.overview}</p>
               </div>

               <div className={styles.sectionGrid}>
                  <div className={styles.gridItem}>
                     <h3><Layout size={18} /> The Process</h3>
                     <p>{project.process || 'Research, Design, Development, Testing'}</p>
                  </div>
                  <div className={styles.gridItem}>
                     <h3><PenTool size={18} /> Design Thinking</h3>
                     <p>{project.uiUXStrategy || 'Focus on accessibility and clean hierarchy.'}</p>
                  </div>
               </div>

               <div className={styles.section}>
                  <h3>Core Features</h3>
                  <div className={styles.featureGrid}>
                     {project.features.map((feature, idx) => (
                        <div key={idx} className={styles.featureItem}>
                           <CheckCircleIcon />
                           <span>{feature}</span>
                        </div>
                     ))}
                  </div>
               </div>

               {project.wireframing && (
                  <div className={styles.section}>
                     <h3>Wireframing Approach</h3>
                     <p>{project.wireframing}</p>
                  </div>
               )}
            </div>
          </div>

          <div className={styles.sidebarColumn}>
            <motion.h2 layoutId={`title-${project.id}`} className={styles.modalTitle}>
              {project.title}
            </motion.h2>
            
            <div className={styles.tagsContainer}>
              {project.tags.map((tag, idx) => (
                <span key={idx} className={styles.tagChip}>{tag}</span>
              ))}
            </div>

            <div className={styles.projectActions}>
               {project.links.live && (
                 <a href={project.links.live} className={styles.primaryAction} target="_blank" rel="noopener noreferrer">
                    View Live Project <ExternalLink size={18} />
                 </a>
               )}
               {project.links.github && (
                 <a href={project.links.github} className={styles.secondaryAction} target="_blank" rel="noopener noreferrer">
                    Source Code <Code size={18} />
                 </a>
               )}
            </div>

            <div className={styles.metaInfo}>
               <div className={styles.metaItem}>
                  <label>Problem</label>
                  <p>{project.problem}</p>
               </div>
               <div className={styles.metaItem}>
                  <label>Role</label>
                  <p>{project.category === 'UI/UX' ? 'UI/UX Designer' : 'Lead Developer'}</p>
               </div>
               <div className={styles.metaItem}>
                  <label>Deliverable</label>
                  <p>{project.category === 'UI/UX' ? 'Interactive Prototype' : 'Functional Web App'}</p>
               </div>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

const CheckCircleIcon = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="10" cy="10" r="10" fill="#10B981" fillOpacity="0.1"/>
    <path d="M14 7L8.5 12.5L6 10" stroke="#10B981" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);
