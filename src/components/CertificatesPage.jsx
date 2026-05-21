import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Filter, Calendar, Award, ExternalLink, X, BookOpen, Clock, CheckCircle } from 'lucide-react';
import styles from './CertificatesPage.module.css';

// Import images
import agileMethodologyImg from '../assets/certificates/Agile Methodology.png';
import amcatTestImg from '../assets/certificates/Amcat_test.png';
import courseraPythonImg from '../assets/certificates/Coursera_python.png';
import everydayExcelImg from '../assets/certificates/Everyday Excel.png';
import excelRImg from '../assets/certificates/ExcelR.png';
import hackerrankJavaBasicsImg from '../assets/certificates/Hackerrank_java_basics.png';
import jeevanGangaPythonImg from '../assets/certificates/Jeevan Ganga - Python.png';
import suvenConsultantsImg from '../assets/certificates/Suven Consultants.png';
import accentureAiImg from '../assets/certificates/accenture_ai.png';
import codedamnImg from '../assets/certificates/codedamn.png';
import pluralsightImg from '../assets/certificates/pluralsight.png';

const certificatesData = [
  {
    id: 'ai-variant',
    title: 'Data Science Internship Certification',
    issuer: 'AI Variant',
    recipient: 'Jeevan G',
    date: 'Oct 2023 – Jun 2024',
    category: 'Internship',
    image: null,
    pdf: '/src/assets/certificates/Intership_at_AI_Variant.pdf',
    details: 'Completed professional internship focused on Building Recommendation Systems, Exploratory Data Analysis (EDA), Feature Engineering, Machine Learning algorithms, and model testing pipelines.',
    skills: ['Python', 'Machine Learning', 'Data Analysis', 'EDA']
  },
  {
    id: 'excelr-ds',
    title: 'Data Science Certification',
    issuer: 'ExcelR Solutions',
    recipient: 'Mr. G. Jeevan',
    date: 'Feb 7, 2024',
    category: 'Data Science',
    image: excelRImg,
    credentialId: '16553/EXCELR/07022024',
    details: 'Mandated course requirements completed with Distinction. Validating advanced analytics and data-driven business intelligence skills.',
    skills: ['Data Science', 'Statistics', 'R/Python', 'Predictive Modeling']
  },
  {
    id: 'accenture-ai',
    title: 'Digital Skills: Artificial Intelligence',
    issuer: 'Accenture (FutureLearn)',
    recipient: 'Jeevan Ganaga',
    date: 'Jan 5, 2022',
    category: 'AI & ML',
    image: accentureAiImg,
    score: '97% Overall Score',
    details: 'Discovered the potential of Artificial Intelligence (AI) and its impact on the modern workplace. Explored the relationships between humans and AI, automation pathways, and professional industry shifts.',
    skills: ['Artificial Intelligence', 'Digital Skills', 'Future of Work']
  },
  {
    id: 'michigan-python',
    title: 'Programming for Everybody (Getting Started with Python)',
    issuer: 'University of Michigan (Coursera)',
    recipient: 'Jeevan G',
    date: 'Sep 15, 2022',
    category: 'Programming',
    image: courseraPythonImg,
    verifyUrl: 'https://coursera.org/verify/KHL5UGEY8XHM',
    details: 'Authorized online non-credit course covering standard core Python programming constructs including variables, conditions, loops, functions, and structured control flows.',
    skills: ['Python', 'Programming Fundamentals', 'Algorithms']
  },
  {
    id: 'kaggle-python',
    title: 'Kaggle Python Certification',
    issuer: 'Google Kaggle',
    recipient: 'Jeevan Ganga',
    date: 'Jul 29, 2023',
    category: 'Programming',
    image: jeevanGangaPythonImg,
    details: 'Verified expertise in Python syntax, variable declarations, data types, conditional branches, loops, functions, lists, dictionaries, library imports, and scripting best practices.',
    skills: ['Python', 'Kaggle Learn', 'Data Wrangling']
  },
  {
    id: 'hackerrank-java',
    title: 'Java (Basic) Skill Certification',
    issuer: 'HackerRank',
    recipient: 'Jeevan G',
    date: 'Apr 29, 2022',
    category: 'Programming',
    image: hackerrankJavaBasicsImg,
    credentialId: 'E9DBCC33D872',
    details: 'Successfully cleared the standard assessment for the Java (Basic) skill curriculum, validating baseline Object-Oriented Programming (OOP) concepts.',
    skills: ['Java', 'OOPs', 'Basic Syntax', 'HackerRank Verified']
  },
  {
    id: 'boulder-excel',
    title: 'Everyday Excel, Part 1',
    issuer: 'University of Colorado Boulder (Coursera)',
    recipient: 'Jeevan G',
    date: 'Aug 9, 2023',
    category: 'Tools',
    image: everydayExcelImg,
    verifyUrl: 'https://coursera.org/verify/2ULC4NPKWVMK',
    details: 'Covered essential functions, formulas, data visualization, filtering, pivot tables, and spreadsheet organization rules under the supervision of industry practitioners.',
    skills: ['Microsoft Excel', 'Data Management', 'Data Visualization']
  },
  {
    id: 'cognizant-agile',
    title: 'Agile Methodology Virtual Experience',
    issuer: 'Cognizant (Forage)',
    recipient: 'Jeevan G',
    date: 'Oct 18, 2022',
    category: 'Methodology',
    image: agileMethodologyImg,
    credentialId: '7s9Pah7yaIdSTfiKg',
    details: 'Completed practical tasks in: Waterfall vs Agile, User Stories, Role Assignments & Ceremonies, Agile Tools & Concepts, Agile Curve Balls.',
    skills: ['Agile', 'Scrum', 'User Stories', 'Project Management']
  },
  {
    id: 'suven-web',
    title: 'HTML5 & CSS3 Coding Internship',
    issuer: 'Suven Consultants & Technology Pvt. Ltd.',
    recipient: 'Jeevan',
    date: 'Apr 19, 2022',
    category: 'Internship',
    image: suvenConsultantsImg,
    details: 'Completed 2 weeks (70 hrs) intensive HTML5+CSS3 internship. Built projects: 365 Entertainment (Hotstar clone), Blogging App (Medium clone), CSS3 Animations, Voter Registration NVSP form replica.',
    skills: ['HTML5', 'CSS3', 'Web Design', 'UI Layouts']
  },
  {
    id: 'codedamn-web',
    title: 'Learn the Basics of Web - Internet Fundamentals',
    issuer: 'codedamn',
    recipient: 'Jeevan',
    date: 'Jun 2, 2023',
    category: 'Web Development',
    image: codedamnImg,
    details: 'Comprehensive exploration of web mechanics, clients, servers, HTTP protocols, DNS servers, network packets, IP addresses, and secure web flows.',
    skills: ['Internet Fundamentals', 'Web Basics', 'HTTP/DNS']
  },
  {
    id: 'pluralsight-server',
    title: 'Server Management: Hardware Installation & Management',
    issuer: 'Pluralsight',
    recipient: 'Jeevan Ganga',
    date: 'Feb 27, 2026',
    category: 'Systems',
    image: pluralsightImg,
    details: 'Recognized for successfully completing the server management, server hardware installation, configuration, components architecture, and administration course.',
    skills: ['Server Management', 'Hardware', 'System Operations']
  },
  {
    id: 'amcat-employability',
    title: 'AMCAT Employability Certification',
    issuer: 'Aspiring Minds (AMCAT)',
    recipient: 'Jeevan Ganga',
    date: 'Dec 14, 2024',
    category: 'Assessment',
    image: amcatTestImg,
    credentialId: '432007887668463',
    details: 'Certified as employable for Engineering/IT Jobs and Technical Operations. Strongly recommended for Software Engineer - IT Services.',
    skills: ['Employability Test', 'Problem Solving', 'Technical Aptitude']
  }
];

const categories = ['All', 'Data Science & AI', 'Web Development', 'Programming', 'Internship', 'Others'];

export const CertificatesPage = () => {
  const [selectedCert, setSelectedCert] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredCerts = useMemo(() => {
    return certificatesData.filter(cert => {
      const matchesSearch = cert.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        cert.issuer.toLowerCase().includes(searchQuery.toLowerCase()) ||
        cert.skills.some(skill => skill.toLowerCase().includes(searchQuery.toLowerCase()));

      if (activeCategory === 'All') return matchesSearch;
      if (activeCategory === 'Data Science & AI') {
        return matchesSearch && (cert.category === 'Data Science' || cert.category === 'AI & ML');
      }
      if (activeCategory === 'Web Development') {
        return matchesSearch && (cert.category === 'Web Development' || cert.id === 'suven-web');
      }
      return matchesSearch && cert.category === activeCategory;
    });
  }, [searchQuery, activeCategory]);

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
          <h1 className={styles.heading}>Certifications</h1>
          <p className={styles.subheading}>
            Verified credentials, expert training, and academic milestones from global platforms.
          </p>
        </motion.div>
      </section>

      {/* Control Panel: Search & Filter */}
      <section className={styles.controlPanel}>
        <div className={styles.searchWrapper}>
          <Search className={styles.searchIcon} size={18} />
          <input
            type="text"
            placeholder="Search certificates, issuers, or skills..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className={styles.searchInput}
          />
          {searchQuery && (
            <button onClick={() => setSearchQuery('')} className={styles.clearSearch} aria-label="Clear Search">
              <X size={16} />
            </button>
          )}
        </div>

        <div className={styles.filterContainer}>
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`${styles.filterBtn} ${activeCategory === category ? styles.activeFilter : ''}`}
            >
              {activeCategory === category && (
                <motion.div
                  layoutId="activeCertCategoryIndicator"
                  className={styles.filterIndicator}
                  transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                />
              )}
              <span className={styles.filterText}>{category}</span>
            </button>
          ))}
        </div>
      </section>

      {/* Grid List */}
      <section className={styles.gridSection}>
        <motion.div layout className={styles.certsGrid}>
          <AnimatePresence mode="popLayout">
            {filteredCerts.map((cert) => (
              <motion.div
                layout
                key={cert.id}
                className={styles.certCard}
                onClick={() => setSelectedCert(cert)}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                whileHover={{ y: -6 }}
              >
                <div className={styles.cardHeader}>
                  <div className={styles.badgeWrapper}>
                    <span className={styles.categoryBadge}>{cert.category}</span>
                    {cert.score && <span className={styles.scoreBadge}>{cert.score}</span>}
                  </div>
                  <div className={styles.iconBadge}>
                    <Award size={20} />
                  </div>
                </div>

                <div className={styles.cardBody}>
                  <h3 className={styles.certTitle}>{cert.title}</h3>
                  <p className={styles.certIssuer}>{cert.issuer}</p>
                  
                  <div className={styles.metaRow}>
                    <span className={styles.metaItem}>
                      <Calendar size={14} />
                      {cert.date}
                    </span>
                    <span className={styles.metaItem}>
                      <CheckCircle size={14} className={styles.verifiedIcon} />
                      Verified
                    </span>
                  </div>

                  <p className={styles.certDescription}>{cert.details}</p>

                  <div className={styles.skillsWrapper}>
                    {cert.skills.map((skill, index) => (
                      <span key={index} className={styles.skillTag}>{skill}</span>
                    ))}
                  </div>
                </div>

                <div className={styles.cardFooter}>
                  <button className={styles.viewBtn}>
                    <span>View Credential</span>
                    <ExternalLink size={14} />
                  </button>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {filteredCerts.length === 0 && (
          <motion.div 
            className={styles.noResults}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <BookOpen size={48} className={styles.noResultsIcon} />
            <h3>No certificates found</h3>
            <p>Try refining your search query or choosing another category.</p>
          </motion.div>
        )}
      </section>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedCert && (
          <motion.div 
            className={styles.modalOverlay}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedCert(null)}
          >
            <motion.div 
              className={styles.modalContent}
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              transition={{ type: 'spring', damping: 25, stiffness: 250 }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button 
                onClick={() => setSelectedCert(null)} 
                className={styles.closeModal}
                aria-label="Close modal"
              >
                <X size={20} />
              </button>

              <div className={styles.modalSplit}>
                {/* Left: Certificate Viewer */}
                <div className={styles.modalViewerSide}>
                  {selectedCert.image ? (
                    <div className={styles.imageContainer}>
                      <img 
                        src={selectedCert.image} 
                        alt={selectedCert.title} 
                        className={styles.modalImage}
                      />
                    </div>
                  ) : (
                    <div className={styles.pdfFallbackContainer}>
                      <Award size={64} className={styles.pdfFallbackIcon} />
                      <h3>{selectedCert.issuer} Certification</h3>
                      <p>Credential format: Secure PDF document</p>
                      
                      <div className={styles.actionButtons}>
                        <a 
                          href={selectedCert.pdf}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={styles.pdfActionBtn}
                        >
                          <ExternalLink size={16} />
                          Open Document
                        </a>
                      </div>
                    </div>
                  )}
                </div>

                {/* Right: Certificate Details */}
                <div className={styles.modalDetailsSide}>
                  <div className={styles.detailsHeader}>
                    <span className={styles.modalCategory}>{selectedCert.category}</span>
                    <h2 className={styles.modalTitle}>{selectedCert.title}</h2>
                    <p className={styles.modalIssuer}>Issued by <strong>{selectedCert.issuer}</strong></p>
                  </div>

                  <div className={styles.detailsBody}>
                    <div className={styles.detailRow}>
                      <Clock size={16} />
                      <div>
                        <h4>Date of Completion</h4>
                        <p>{selectedCert.date}</p>
                      </div>
                    </div>

                    <div className={styles.detailRow}>
                      <Award size={16} />
                      <div>
                        <h4>Recipient</h4>
                        <p>{selectedCert.recipient}</p>
                      </div>
                    </div>

                    {selectedCert.credentialId && (
                      <div className={styles.detailRow}>
                        <CheckCircle size={16} />
                        <div>
                          <h4>Credential ID</h4>
                          <p className={styles.codeFont}>{selectedCert.credentialId}</p>
                        </div>
                      </div>
                    )}

                    <div className={styles.descriptionBlock}>
                      <h4>About this Credential</h4>
                      <p>{selectedCert.details}</p>
                    </div>

                    <div className={styles.skillsBlock}>
                      <h4>Validated Skills</h4>
                      <div className={styles.modalSkillsList}>
                        {selectedCert.skills.map((skill, index) => (
                          <span key={index} className={styles.modalSkillTag}>{skill}</span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className={styles.detailsFooter}>
                    {selectedCert.verifyUrl ? (
                      <a 
                        href={selectedCert.verifyUrl} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className={styles.modalVerifyBtn}
                      >
                        <span>Verify Credential Online</span>
                        <ExternalLink size={16} />
                      </a>
                    ) : selectedCert.image ? (
                      <a 
                        href={selectedCert.image} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className={styles.modalVerifyBtn}
                      >
                        <span>Open Certificate Image</span>
                        <ExternalLink size={16} />
                      </a>
                    ) : (
                      <a 
                        href={selectedCert.pdf} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className={styles.modalVerifyBtn}
                      >
                        <span>Open Document Details</span>
                        <ExternalLink size={16} />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
