/**
 * ─────────────────────────────────────────────────────────────
 *  HEXTORQ — SITE CONTENT
 * ─────────────────────────────────────────────────────────────
 *  Single source of truth for all copy. Edit text, links, stats
 *  and lists here — nothing else needs to change.
 *
 *  TODO for Hextorq: replace every `href: '#'` with the real live
 *  URL (product sites + your other published websites), and tune
 *  the stat numbers to real figures.
 * ─────────────────────────────────────────────────────────────
 */

export const brand = {
  name: 'HEXTORQ',
  intro: 'HEXTORQ',
  tagline: 'Code · Innovate · Elevate',
  taglineWords: ['Code', 'Innovate', 'Elevate'],
  email: 'hello@hextorq.tech',
  domain: 'hextorq.tech',
  location: 'India · Remote-first',
  socials: [
    { label: 'X', href: '#' },
    { label: 'Instagram', href: '#' },
    { label: 'YouTube', href: '#' },
    { label: 'LinkedIn', href: '#' },
  ],
}

export const nav = [
  { label: 'About', target: 'story' },
  { label: 'Services', target: 'services' },
  { label: 'Products', target: 'products' },
  { label: 'Projects', target: 'projects' },
  { label: 'Contact', target: 'contact' },
]

export const hero = {
  eyebrow: 'IT · SOFTWARE · PRODUCTS · INNOVATION',
  title: ['We build the', 'technology that', 'moves the future.'],
  subtitle:
    'Hextorq is a full-spectrum IT-tech company — engineering software, apps and platforms for businesses, shipping our own SaaS products, and powering the next generation of student & IoT innovation.',
  cta: { label: 'Explore Hextorq', target: 'services' },
  scrollHint: 'Scroll to begin',
}

export const story = {
  eyebrow: 'WHO WE ARE',
  heading: 'We turn ambitious ideas into technology that ships.',
  paragraphs: [
    'Hextorq is a full-spectrum technology company. We design, engineer and operate software end-to-end — held to the same bar whether it carries a client’s name or our own.',
    'That work runs on three fronts: custom IT services for businesses, a growing family of SaaS products live in production, and an innovation lab mentoring the students and makers building what’s next.',
    'Web, mobile, ERP, payments, IoT — across every domain the job is the same: take the idea seriously, and ship it.',
  ],
  stats: [
    { value: '250+', label: 'Projects delivered' },
    { value: '3', label: 'SaaS products live' },
    { value: '500+', label: 'Students mentored' },
    { value: '50+', label: 'Business clients' },
  ],
}

/* ── PILLAR 1 — SERVICES ──────────────────────────────────────── */
export const services = {
  eyebrow: 'PILLAR 01 — WHAT WE DO',
  heading: 'IT services, engineered end-to-end.',
  subheading:
    'From a single landing page to a company-wide ERP — strategy, design, engineering and delivery under one roof.',
  items: [
    {
      id: 'software',
      index: '01',
      title: 'Software Development',
      summary: 'Custom software and platforms built around exactly how your business runs.',
      points: ['Web apps', 'APIs & backends', 'Automation', 'Integrations'],
    },
    {
      id: 'web',
      index: '02',
      title: 'Website Development',
      summary: 'Fast, striking, conversion-focused websites — from marketing sites to portals.',
      points: ['React / Next.js', 'CMS', 'SEO', 'Core Web Vitals'],
    },
    {
      id: 'app',
      index: '03',
      title: 'App Development',
      summary: 'Native-feeling iOS & Android apps your users actually love to use.',
      points: ['React Native', 'Flutter', 'Push & realtime', 'Store delivery'],
    },
    {
      id: 'erp',
      index: '04',
      title: 'ERP Software',
      summary: 'Unify operations — inventory, HR, sales and finance — in one connected system.',
      points: ['Inventory', 'HR & Payroll', 'CRM', 'Dashboards'],
    },
    {
      id: 'billing',
      index: '05',
      title: 'Billing Software',
      summary: 'GST-ready billing and invoicing that’s fast at the counter and clean in the books.',
      points: ['GST invoicing', 'POS', 'Reports', 'Multi-branch'],
    },
    {
      id: 'custom',
      index: '06',
      title: 'Custom Solutions',
      summary: 'Have something unusual in mind? We scope, design and engineer it from scratch.',
      points: ['Consulting', 'Bespoke builds', 'Legacy upgrade', 'Support'],
    },
  ],
}

/* ── PILLAR 2 — PRODUCTS ──────────────────────────────────────── */
export const products = {
  eyebrow: 'PILLAR 02 — HEXTORQ PRODUCTS',
  heading: 'Software we own, live in production.',
  subheading:
    'Not case studies — real SaaS platforms that Hextorq designs, ships and operates, trusted by paying customers every single day.',
  items: [
    {
      id: 'paypanda',
      name: 'PayPanda',
      category: 'Payment Gateway',
      description:
        'A secure, developer-first payment gateway with a clean API, fraud protection and fast settlement — drop payments into any product in minutes.',
      features: [
        'Unified payments API',
        'PCI-DSS & tokenized',
        'Fraud detection',
        'Instant reporting',
      ],
      accent: '#3d6bff',
      href: '#',
      status: 'Live',
    },
    {
      id: 'printpanda',
      name: 'PrintPanda',
      category: 'Printing Automation',
      description:
        'Printing, fully automated. Users upload their files, pay online, and the print job is queued and ready — no counter, no back-and-forth, no waiting.',
      features: [
        'Upload → pay → print',
        'Automated job queue',
        'Online payments built-in',
        'Pickup notifications',
      ],
      accent: '#6a5cff',
      href: '#',
      status: 'Live',
    },
    {
      id: 'ticketspanda',
      name: 'TicketsPanda',
      category: 'Event Ticketing System',
      description:
        'End-to-end event ticketing. Register an event, collect payments, and issue tickets to attendees automatically — with entry management built in.',
      features: [
        'Event registration',
        'Payment collection',
        'Auto ticket issue',
        'Entry / check-in',
      ],
      accent: '#7c3aed',
      href: '#',
      status: 'Live',
    },
  ],
}

/* ── PILLAR 3 — PROJECTS & INNOVATION ─────────────────────────── */
export const projects = {
  eyebrow: 'PILLAR 03 — INNOVATION LAB',
  heading: 'Where students and ideas become builders.',
  subheading:
    'Beyond business, Hextorq powers real innovation — guiding students, prototyping hardware, and taking on the projects nobody else will.',
  items: [
    {
      id: 'academic',
      title: 'Student & Academic Projects',
      summary:
        'Final-year and academic projects across every domain — with real code, real guidance and documentation that actually holds up.',
      tags: ['All domains', 'Guided', 'Documented', 'Viva-ready'],
    },
    {
      id: 'iot',
      title: 'IoT & Hardware',
      summary:
        'Sensors, embedded systems and connected devices — from prototype on the bench to a working, demoable build.',
      tags: ['Embedded', 'Sensors', 'Automation', 'Prototyping'],
    },
    {
      id: 'custom',
      title: 'Custom Requested Builds',
      summary:
        'Bring us a brief from any field — we take on custom, on-request projects and deliver them end-to-end.',
      tags: ['On-request', 'Any domain', 'End-to-end', 'Delivery'],
    },
  ],
}

/* ── PRODUCT SHOWCASE — scroll-split interactive cards ─────────── */
export const showcase = {
  eyebrow: 'PRODUCT SHOWCASE',
  heading: 'Three products. One ecosystem.',
  // Dark tech-circuit abstract — splits cleanly across 3 panels.
  image:
    'https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?q=80&w=2400&auto=format&fit=crop',
  cards: [
    {
      tag: 'Payments',
      title: 'PayPanda',
      description:
        'A secure, developer-first payment gateway — clean API, fraud protection and fast settlement. Drop payments into any product in minutes.',
      bgColor: '#0c1a3f',
      textColor: '#eaf0ff',
      href: '#',
      icon: 'payment',
    },
    {
      tag: 'Printing',
      title: 'PrintPanda',
      description:
        'Printing, fully automated. Users upload files, pay online, and the job is queued and ready — no counter, no waiting.',
      bgColor: '#1a5bcf',
      textColor: '#ffffff',
      href: '#',
      icon: 'printing',
    },
    {
      tag: 'Ticketing',
      title: 'TicketsPanda',
      description:
        'End-to-end event ticketing — register an event, collect payments, and issue tickets automatically, with entry management built in.',
      bgColor: '#160c33',
      textColor: '#ece6ff',
      href: '#',
      icon: 'ticketing',
    },
  ],
}

/* ── PROCESS — horizontal pinned storytelling (8 steps) ────────── */
export const process = {
  eyebrow: 'HOW WE WORK',
  heading: 'From idea to impact.',
  steps: [
    {
      no: '01',
      title: 'Discover',
      text: 'We dig into your goals, users and constraints — then map the fastest path to real value.',
    },
    {
      no: '02',
      title: 'Strategize',
      text: 'We shape scope, milestones and the tech stack so every decision points at the outcome.',
    },
    {
      no: '03',
      title: 'Design',
      text: 'Interfaces and architecture designed together, so what looks good also scales well.',
    },
    {
      no: '04',
      title: 'Prototype',
      text: 'A working prototype early — so you feel the product before we commit to building all of it.',
    },
    {
      no: '05',
      title: 'Engineer',
      text: 'Clean, tested, production-grade code shipped in tight iterations you can see every week.',
    },
    {
      no: '06',
      title: 'Test & Harden',
      text: 'Automated tests, security reviews and load checks — we break it before your users can.',
    },
    {
      no: '07',
      title: 'Launch',
      text: 'We deploy, monitor and support — a launch that’s an event, not an emergency.',
    },
    {
      no: '08',
      title: 'Elevate',
      text: 'Post-launch we measure, refine and grow the product alongside your business.',
    },
  ],
}

/* Kinetic marquee — capability phrases */
export const marqueeWords = [
  'Software Engineering',
  'Web & Mobile',
  'Cloud & DevOps',
  'ERP Systems',
  'Payment Platforms',
  'IoT & Hardware',
  'AI Automation',
  'Product Innovation',
]

export const contact = {
  eyebrow: 'LET’S BUILD',
  heading: ['Ready to build', 'with Hextorq?'],
  subtitle:
    'Whether it’s a product, a platform, or an academic project — tell us what you’re working on and we’ll take it from there.',
  cta: { label: 'Start a conversation', href: 'mailto:hello@hextorq.tech' },
}

/* ── FOOTER (reference-matched: columns + big wordmark) ────────── */
export const footer = {
  tagline: 'Hextorq is the modern way to build, ship and scale technology.',
  columns: [
    {
      title: 'Products',
      links: [
        { label: 'PayPanda', href: '#' },
        { label: 'PrintPanda', href: '#' },
        { label: 'TicketsPanda', href: '#' },
      ],
    },
    {
      title: 'Resources',
      links: [
        { label: 'Services', href: '#services' },
        { label: 'Projects', href: '#projects' },
      ],
    },
    {
      title: 'Company',
      links: [
        { label: 'About', href: '#story' },
        { label: 'Careers', href: '#', tag: 'WE’RE HIRING' },
      ],
    },
  ],
  wordmark: 'HEXTORQ',
  legal: [
    { label: 'Security', href: '#' },
    { label: 'Terms of service', href: '#' },
    { label: 'Privacy policy', href: '#' },
  ],
  copyright: `© ${new Date().getFullYear()} Hextorq. All rights reserved.`,
}
