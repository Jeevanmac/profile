import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, CheckCircle2 } from 'lucide-react';
import styles from './ContactForm.module.css';

export const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    budget: '',
    projectType: ''
  });
  const [focusedField, setFocusedField] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFocus = (name) => setFocusedField(name);
  const handleBlur = () => setFocusedField(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate EmailJS or Resend API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setFormData({ name: '', email: '', subject: '', message: '', budget: '', projectType: '' });
      
      // Reset success message after 5 seconds
      setTimeout(() => setIsSuccess(false), 5000);
    }, 1500);
  };

  return (
    <form className={styles.formContainer} onSubmit={handleSubmit}>
      <h3 className={styles.formTitle}>Send a Message</h3>
      
      <div className={styles.formGrid}>
        {/* Full Name */}
        <div className={styles.inputGroup}>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            onFocus={() => handleFocus('name')}
            onBlur={handleBlur}
            className={styles.input}
            required
          />
          <label 
            htmlFor="name" 
            className={`${styles.label} ${(focusedField === 'name' || formData.name.length > 0) ? styles.labelActive : ''}`}
          >
            Full Name
          </label>
        </div>

        {/* Email Address */}
        <div className={styles.inputGroup}>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            onFocus={() => handleFocus('email')}
            onBlur={handleBlur}
            className={styles.input}
            required
          />
          <label 
            htmlFor="email" 
            className={`${styles.label} ${(focusedField === 'email' || formData.email.length > 0) ? styles.labelActive : ''}`}
          >
            Email Address
          </label>
        </div>
      </div>

      <div className={styles.formGrid}>
        {/* Subject */}
        <div className={styles.inputGroup}>
          <input
            type="text"
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            onFocus={() => handleFocus('subject')}
            onBlur={handleBlur}
            className={styles.input}
            required
          />
          <label 
            htmlFor="subject" 
            className={`${styles.label} ${(focusedField === 'subject' || formData.subject.length > 0) ? styles.labelActive : ''}`}
          >
            Service / Subject
          </label>
        </div>

        {/* Project Type (Optional) */}
        <div className={styles.inputGroup}>
          <input
            type="text"
            id="projectType"
            name="projectType"
            value={formData.projectType}
            onChange={handleChange}
            onFocus={() => handleFocus('projectType')}
            onBlur={handleBlur}
            className={styles.input}
          />
          <label 
            htmlFor="projectType" 
            className={`${styles.label} ${(focusedField === 'projectType' || formData.projectType.length > 0) ? styles.labelActive : ''}`}
          >
            Project Type (Optional)
          </label>
        </div>
      </div>

      {/* Message */}
      <div className={styles.inputGroup}>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          onFocus={() => handleFocus('message')}
          onBlur={handleBlur}
          className={`${styles.input} ${styles.textarea}`}
          required
        ></textarea>
        <label 
          htmlFor="message" 
          className={`${styles.label} ${(focusedField === 'message' || formData.message.length > 0) ? styles.labelActive : ''}`}
        >
          Your Message
        </label>
      </div>

      <div className={styles.submitContainer}>
        <button 
          type="submit" 
          className={styles.submitBtn}
          disabled={isSubmitting}
        >
          {isSubmitting ? 'Sending...' : 'Send Message'}
          {!isSubmitting && <Send size={18} />}
        </button>

        <AnimatePresence>
          {isSuccess && (
            <motion.div 
              className={styles.successToast}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
            >
              <CheckCircle2 size={18} />
              <span>Message sent successfully!</span>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </form>
  );
};
