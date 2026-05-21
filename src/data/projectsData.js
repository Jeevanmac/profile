export const projectsData = [
  {
    id: 'aroh-solutions',
    title: 'Aroh Software Solutions Website (CV TECH)',
    category: 'Full-Stack',
    shortDescription: 'An enterprise-grade full-stack SaaS platform featuring a digital asset marketplace, secure AWS S3-backed asset vault, real-time communications, and a robust admin recruitment suite.',
    image: '/project_images/aroh/aroh_first_image.png',
    tags: ['React 19', 'Node.js', 'MongoDB', 'AWS S3', 'Socket.IO', 'Tailwind CSS v4'],
    status: 'Live',
    overview: 'A premium, high-performance SaaS digital product marketplace and project recruitment platform. Built with a robust administrative panel (The Nexus) and a high-security user workspace (The Client Vault), the application handles secure asset deliveries, real-time message rooms, dynamic transactions, and hiring tracking.',
    problem: 'Modern digital asset marketplaces struggle with secure distribution of valuable files, real-time transaction integrity, and unified management systems for licensing products while tracking candidate recruitment workflows under the same hub.',
    features: [
      'Identity Nexus: Multi-tier role authorization (SuperAdmin, Admin, User) using secure JWT & HttpOnly refresh token rotation.',
      'Admin Project Vault: Full CRUD management for software sales and hiring, with secure zip files, glassmorphic modals, and custom interactive flows.',
      'Asset Distribution: Secure delivery of high-resolution digital goods utilizing AWS S3 and dynamically generated pre-signed URLs.',
      'Notification Engine: Role-based real-time notifications and read receipts implemented via Socket.IO room partitioning.',
      'Marketplace Core: Full shopping cart, wishlist, and secure checkout integration with transaction logging.'
    ],
    challenges: 'Solving Type mismatches (Object vs String) during real-time multi-user Socket notifications and resolving Razorpay signature tampering risks by migrating calculation logic exclusively to the backend payment controllers.',
    learnings: 'Mastered AWS S3 pre-signed URL secure lifecycles, advanced Socket.IO room partitioning schemes for administrative events, and state synchronization between React client-side Zustand store and Express REST/Socket gateways.',
    process: 'SaaS Market Research -> Monolithic System Architecture -> MongoDB Database Schema Modeling -> Secure API Gateway Development -> Framer Motion Polish -> Firebase Deployment.',
    uiUXStrategy: 'A stunning premium dark aesthetic incorporating glassmorphic card elements, custom theme tokens for high readability, and hidden-badge reCAPTCHA v3 protection.',
    links: {
      live: 'https://chandu-test-web.web.app/',
      github: null,
      caseStudy: '#'
    }
  },
  {
    id: 'precision-detail',
    title: 'Precision Detail — Luxury Automotive',
    category: 'Frontend',
    shortDescription: 'A fully responsive luxury automotive detailing website concept designed and developed with a premium dark aesthetic.',
    image: '/project_images/precision_detail/WhatsApp Image 2026-05-07 at 11.24.50 PM.jpeg',
    tags: ['React', 'Framer Motion', 'CSS Modules', 'Figma'],
    status: 'Live',
    overview: 'An immersive digital experience for a luxury automotive detailing service. The site features a dark, cinematic UI that mirrors the premium nature of high-end vehicle care.',
    problem: 'Most automotive service websites feel cluttered and outdated, failing to communicate the precision and luxury associated with high-end detailing.',
    features: [
      'Cinematic hero sections with scroll-triggered animations',
      'Immersive service gallery with smooth expansion effects',
      'Responsive booking dashboard interface',
      'Premium dark theme with subtle glassmorphism',
      'Dynamic service pricing interaction'
    ],
    challenges: 'Implementing smooth, high-performance scroll animations while maintaining high-quality automotive visuals across all device sizes.',
    learnings: 'Deepened expertise in React performance optimization, advanced Framer Motion sequences, and complex responsive grid systems.',
    process: 'Branding Inspiration -> UI Design -> React Architecture -> Animation Pass -> Performance Optimization.',
    uiUXStrategy: 'Using dark mode to evoke luxury and professionalism, with high-contrast accents to draw attention to call-to-action elements.',
    links: {
      live: 'https://jeevanmac.github.io/new_Precision_Detail-/pages/index.html',
      github: 'https://github.com/Jeevanmac/new_Precision_Detail-',
      caseStudy: '#'
    },
    gallery: [
      'WhatsApp Image 2026-05-07 at 11.24.50 PM.jpeg',
      'WhatsApp Image 2026-05-07 at 11.25.09 PM.jpeg',
      'WhatsApp Image 2026-05-07 at 11.25.44 PM.jpeg',
      'WhatsApp Image 2026-05-07 at 11.26.30 PM.jpeg',
      'WhatsApp Image 2026-05-07 at 11.28.01 PM.jpeg',
      'WhatsApp Image 2026-05-07 at 11.28.07 PM.jpeg',
      'WhatsApp Image 2026-05-08 at 12.22.44 AM.jpeg'
    ].map(img => `/project_images/precision_detail/${img}`)
  },
  {
    id: 'paint-shop',
    title: 'Business Management App',
    category: 'Flutter',
    shortDescription: 'A comprehensive management app tailored for paint shop operations with real-time inventory and analytics.',
    image: '/project_images/business_managgement_app/primary.png',
    tags: ['Flutter', 'Firebase', 'SQLite'],
    status: 'Completed',
    overview: 'A specialized enterprise tool for paint shop owners to manage inventory, sales, and customer data in one place.',
    problem: 'Manual inventory tracking leads to errors and stockouts.',
    features: ['Real-time inventory', 'Offline support', 'Sales analytics'],
    challenges: 'Syncing local SQLite data with Firebase seamlessly.',
    learnings: 'Mastered local-first architecture in Flutter.',
    links: { live: '#', github: '#' },
    gallery: [
      'primary.png',
      'WhatsApp Image 2026-05-11 at 9.25.26 PM.jpeg',
      'WhatsApp Image 2026-05-11 at 9.25.27 PM.jpeg',
      'WhatsApp Image 2026-05-11 at 9.25.28 PM.jpeg',
      'WhatsApp Image 2026-05-11 at 9.25.29 PM.jpeg',
      'WhatsApp Image 2026-05-11 at 9.25.30 PM (1).jpeg',
      'WhatsApp Image 2026-05-11 at 9.25.30 PM (2).jpeg',
      'WhatsApp Image 2026-05-11 at 9.25.30 PM.jpeg',
      'WhatsApp Image 2026-05-11 at 9.25.31 PM.jpeg',
      'WhatsApp Image 2026-05-11 at 9.25.32 PM (1).jpeg',
      'WhatsApp Image 2026-05-11 at 9.25.32 PM.jpeg',
      'WhatsApp Image 2026-05-11 at 9.25.33 PM (1).jpeg',
      'WhatsApp Image 2026-05-11 at 9.25.33 PM.jpeg',
      'WhatsApp Image 2026-05-11 at 9.25.34 PM.jpeg'
    ].map(img => `/project_images/business_managgement_app/${img}`)
  },
  {
    id: 'sneaker-prototype',
    title: 'Sneaker Web Page Prototype',
    category: 'UI/UX',
    shortDescription: 'A modern sneaker product landing page prototype designed in Figma with a strong focus on clean aesthetics and smooth user experience.',
    image: '/sneaker-project.png',
    tags: ['Figma', 'UI/UX', 'Prototyping', 'Visual Design'],
    status: 'Completed',
    overview: 'A premium product showcase designed to elevate the online shopping experience for high-end sneakers. The project focuses on a luxury fashion-tech aesthetic, combining bold typography with high-fidelity product imagery.',
    problem: 'Generic e-commerce layouts often fail to capture the unique brand identity of luxury sneakers, leading to a disconnected user experience and lower brand loyalty.',
    features: [
      'Interactive hero sections with high-fidelity product zoom',
      'Dynamic color-way selectors with smooth transitions',
      'Editorial-style product storytelling layouts',
      'Responsive mobile-first prototype design',
      'Clean, luxury-brand inspired visual hierarchy'
    ],
    challenges: 'Balancing large high-quality images with fast-feeling interaction flows in Figma while maintaining a minimal, clutter-free UI was the primary challenge.',
    learnings: 'Mastered advanced Figma component systems, interactive prototyping flows, and the application of luxury branding principles to digital product design.',
    process: 'Research -> Moodboarding -> Wireframing -> High-Fidelity UI -> Prototyping -> User Testing.',
    uiUXStrategy: 'Focusing on "Content First" design, where the product dictates the layout, using white space as a structural element to create a premium feel.',
    links: {
      live: 'https://www.figma.com/proto/vEnOX6ouHmo2xPACztMMWO/Untitled?node-id=334-4899&t=ezu8TOoOS9LCI6Kx-1&scaling=contain&content-scaling=fixed&page-id=334%3A4750',
      github: null,
      caseStudy: '#'
    },
    gallery: [
      '/project_images/sneaker_prototype/sample.mp4'
    ]
  },
  {
    id: 'med-chatbot',
    title: 'Medical Assistant Chatbot',
    category: 'AI/ML',
    shortDescription: 'An AI-driven conversational agent designed to provide initial medical triage and symptom checking.',
    image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=800',
    tags: ['Python', 'Flask', 'Machine Learning'],
    status: 'Completed',
    overview: 'Intelligent symptom checker using decision tree models to provide medical triage advice.',
    problem: 'Delayed medical advice for minor symptoms.',
    features: ['Symptom prediction', 'Conversational UI', 'API integration'],
    challenges: 'Cleaning and validating complex medical datasets.',
    learnings: 'Integration of ML models into Flask backends.',
    links: { live: '#', github: '#' }
  },
  {
    id: 'customer-analysis',
    title: 'Customer Personality Analysis',
    category: 'AI/ML',
    shortDescription: 'A machine learning pipeline that clusters customer data to optimize targeted marketing.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800',
    tags: ['Python', 'PCA', 'Clustering'],
    status: 'Completed',
    overview: 'Unsupervised learning project to segment customers based on purchasing behavior.',
    problem: 'Low conversion rates from generic marketing.',
    features: ['K-Means Clustering', 'PCA visualization', 'Interactive Dashboard'],
    challenges: 'Visualizing high-dimensional data for stakeholders.',
    learnings: 'Deep understanding of unsupervised learning workflows.',
    links: {
      live: 'HTTPS://PROJECTWZZ2B3KMOB3UIUVKUEBB4.STREAMLIT.APP/',
      github: '#'
    }
  },
  {
    id: 'book-rec',
    title: 'Book Recommendation System',
    category: 'AI/ML',
    shortDescription: 'A robust recommendation engine leveraging collaborative filtering to suggest books.',
    image: 'https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?auto=format&fit=crop&q=80&w=800',
    tags: ['Python', 'ML', 'Recommender'],
    status: 'Completed',
    overview: 'Engine predicting book preferences using cosine similarity and collaborative filtering.',
    problem: 'Choice paralysis in massive digital libraries.',
    features: ['Collaborative filtering', 'Similarity matrices', 'Top-N generation'],
    challenges: 'Solving the sparse matrix problem in user ratings.',
    learnings: 'Hands-on experience with recommendation algorithms.',
    links: { live: '#', github: '#' }
  }
];
