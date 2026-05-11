import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { BookOpen, CheckCircle, ExternalLink, Calendar, Award, X, ChevronRight, GraduationCap } from 'lucide-react';
import styles from './TrainingSection.module.css';
import excelrCert from '../assets/certificates/ExcelR.png';

const trainingData = {
  institute: "ExcelR",
  course: "Data Science and Analysis",
  duration: "1st Oct 2023 - 7th Feb 2024",
  skills: ["Python", "EDA", "PowerBI", "Machine Learning", "SQL", "Statistics"],
  description: "Advanced training in the ML Project Life Cycle, from problem formulation and data collection to model deployment and cross-validation.",
  highlights: [
    "25+ Assignments & Live Projects",
    "Blended Learning Model (Live & Recorded)",
    "365 Days Jumbo Pass Access",
    "Focus on Generative AI & LLMs",
    "Industry-Standard Tool Coverage"
  ],
  modules: [
    { title: "ML Project Life Cycle", content: "Problem definition, data collection, EDA, cleaning, transformation, partitioning, model fitting, cross-validation, metrics, and deployment." },
    { title: "Fundamentals of Stats", content: "Data types, central tendency, spread, distribution shapes (histogram, skewness, kurtosis)." },
    { title: "Advanced Stats", content: "Probability, Normal Distribution, and Hypothesis Testing." },
    { title: "Core Python", content: "Fundamentals, loops, functions, and scientific libraries like Numpy & Pandas." },
    { title: "Supervised Learning", content: "Linear Regression, Logistic Regression, Decision Trees, SVM, and Ensemble Techniques." },
    { title: "Unsupervised Learning", content: "Clustering, Recommendation Systems (Collaborative & Content-Based Filtering)." },
    { title: "Advanced Techniques", content: "Boosting methods, Regularization, Model Validation, and Time Series Forecasting." }
  ],
  tools: ["Python", "R", "SQL", "Tableau", "Hadoop", "Spark", "MySQL", "Anaconda"]
};

const TrainingModal = ({ onClose }) => {
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => { document.body.style.overflow = 'auto'; };
  }, []);

  return (
    <motion.div className={styles.modalOverlay} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
      <div className={styles.modalBackdrop} onClick={onClose}></div>
      <motion.div className={styles.modalContent} initial={{ scale: 0.9, y: 20 }} animate={{ scale: 1, y: 0 }} exit={{ scale: 0.9, y: 20 }}>
        <div className={styles.modalHeader}>
          <div className={styles.headerTitle}>
            <Award size={24} />
            <h2>ExcelR Certificate & Curriculum</h2>
          </div>
          <button className={styles.closeBtn} onClick={onClose}><X size={24} /></button>
        </div>

        <div className={styles.modalBody}>
          <div className={styles.certPreviewFull}>
            <img src={excelrCert} alt="ExcelR Certificate" className={styles.fullCertImg} />
          </div>

          <div className={styles.detailedInfo}>
            <div className={styles.infoSection}>
              <h3><Calendar size={18} /> Duration</h3>
              <p>{trainingData.duration}</p>
            </div>

            <div className={styles.infoSection}>
              <h3><GraduationCap size={18} /> Curriculum Highlights</h3>
              <div className={styles.moduleGrid}>
                {trainingData.modules.map((module, i) => (
                  <div key={i} className={styles.moduleItem}>
                    <h4>{module.title}</h4>
                    <p>{module.content}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className={styles.infoSection}>
              <h3><ExternalLink size={18} /> Tools & Technologies</h3>
              <div className={styles.toolsCloud}>
                {trainingData.tools.map((tool, i) => <span key={i} className={styles.toolTag}>{tool}</span>)}
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export const TrainingSection = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <section className={styles.trainingSection} id="training">
      <div className={styles.header}>
        <h2 className={styles.heading}>Professional Training</h2>
        <p className={styles.subheading}>Specialized industry-led training and certification.</p>
      </div>

      <div className={styles.card}>
        <div className={styles.cardContent}>
          <div className={styles.mainInfo}>
            <div className={styles.instituteBadge}>
              <BookOpen size={20} />
              <span>{trainingData.institute}</span>
            </div>
            <h3 className={styles.courseTitle}>{trainingData.course}</h3>
            <div className={styles.dateInfo}>
              <Calendar size={16} />
              <span>{trainingData.duration}</span>
            </div>
            <p className={styles.description}>{trainingData.description}</p>
            
            <div className={styles.skillsGrid}>
              {trainingData.skills.map((skill, index) => (
                <div key={index} className={styles.skillItem}>
                  <CheckCircle size={14} className={styles.checkIcon} />
                  <span>{skill}</span>
                </div>
              ))}
            </div>
          </div>

          <div className={styles.certificateAction}>
            <div className={styles.certificatePreview} onClick={() => setShowModal(true)}>
               <img src={excelrCert} alt="ExcelR Preview" className={styles.previewImg} />
               <div className={styles.previewOverlay}>
                  <ExternalLink size={24} />
                  <span>Expand Certificate</span>
               </div>
            </div>
            <button className={styles.viewBtn} onClick={() => setShowModal(true)}>
              Full Certificate Details
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {showModal && <TrainingModal onClose={() => setShowModal(false)} />}
      </AnimatePresence>
    </section>
  );
};
