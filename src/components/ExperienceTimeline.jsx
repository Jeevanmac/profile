import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, GraduationCap } from 'lucide-react';
import styles from './ExperienceTimeline.module.css';

const experiences = [
  {
    type: 'work',
    company: 'Quantum Works Pvt Ltd',
    role: 'Flutter Developer',
    duration: 'Aug 2025 – Present',
    responsibilities: [
      'Developed cross-platform Flutter applications',
      'Designed responsive UI components',
      'Integrated REST APIs',
      'Implemented robust navigation systems',
      'Optimized application performance',
      'Collaborated effectively with development teams'
    ],
    technologies: ['Flutter', 'Dart', 'REST APIs', 'Git', 'Android Studio'],
    icon: <Briefcase size={20} />
  },
  {
    type: 'work',
    company: 'Freelance Full-Stack Developer',
    role: 'Full-Stack Developer (Freelancing)',
    duration: 'May 2026 – Present',
    responsibilities: [
      'Designed and engineered a scalable e-commerce & job marketplace SaaS platform (Aroh Software Solutions / CV TECH).',
      'Integrated AWS S3 buckets for secure, high-speed digital product file transfers and pre-signed media URLs.',
      'Designed dynamic schema-driven MongoDB structures and JWT-based authentication flow with HTTP-only security layers.',
      'Built a rich glassmorphic Admin panel with real-time tracking, candidate hiring logs, and full catalog CRUD capabilities.',
      'Successfully deployed scalable production-ready client portals and API gateways live on Firebase environments.',
      'Utilized advanced AI development paradigms to accelerate rapid UI prototyping, automated logging, and feature deployments.'
    ],
    technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'AWS S3', 'Socket.IO', 'Firebase', 'Brevo'],
    icon: <Briefcase size={20} />
  },
  {
    type: 'internship',
    company: 'AI Variant',
    role: 'Data Science Intern',
    duration: 'Oct 2023 – Jun 2024',
    responsibilities: [
      'Built recommendation systems',
      'Performed EDA and feature engineering',
      'Implemented ML algorithms',
      'Contributed to model testing',
      'Assisted in model deployment pipelines'
    ],
    technologies: ['Python', 'Machine Learning', 'Data Analysis'],
    icon: <GraduationCap size={20} />
  }
];

export const ExperienceTimeline = () => {
  return (
    <section className={styles.timelineSection}>
      <div className={styles.timelineContainer}>
        <div className={styles.mainLine}></div>

        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            className={styles.timelineNode}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className={`${styles.iconWrapper} ${index === 0 ? styles.activeIcon : ''}`}>
              {exp.icon}
            </div>

            <div className={styles.cardWrapper}>
              <div className={styles.card}>
                <div className={styles.cardHeader}>
                  <div>
                    <h3 className={styles.role}>{exp.role}</h3>
                    <h4 className={styles.company}>{exp.company}</h4>
                  </div>
                  <span className={styles.duration}>{exp.duration}</span>
                </div>

                <ul className={styles.responsibilities}>
                  {exp.responsibilities.map((task, i) => (
                    <li key={i}>{task}</li>
                  ))}
                </ul>

                <div className={styles.techStack}>
                  {exp.technologies.map((tech, i) => (
                    <span key={i} className={styles.techBadge}>{tech}</span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
