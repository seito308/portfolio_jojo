export type Language = 'th' | 'en';

export interface ProjectItem {
  id: string;
  stageNumber: string;
  title: { th: string; en: string };
  subtitle: { th: string; en: string };
  category: string;
  standName: string;
  stats: {
    power: string;
    speed: string;
    range: string;
    durability: string;
    precision: string;
    potential: string;
  };
  summary: { th: string; en: string };
  heroImage: string;
  gallery: string[];
  techStack: string[];
  liveUrl: string;
  repoUrl: string;
  developmentProcess: {
    step: string;
    title: { th: string; en: string };
    detail: { th: string; en: string };
  }[];
  architecture: {
    overview: { th: string; en: string };
    layers: {
      name: string;
      tech: string;
      description: { th: string; en: string };
    }[];
  };
  lessonsLearned: {
    th: string[];
    en: string[];
  };
}

export const PROJECTS: ProjectItem[] = [
  {
    id: 'golden-spin-commerce',
    stageNumber: 'STAGE 01 // SAN DIEGO BEACH',
    title: {
      th: 'SBR Golden Ratio Distributed E-Commerce & FinTech Engine',
      en: 'SBR Golden Ratio Distributed E-Commerce & FinTech Engine'
    },
    subtitle: {
      th: 'แพลตฟอร์มซื้อขายสินค้าลิมิเต็ดพร้อมระบบประมวลผลธุรกรรมความเร็วสูงแบบ Real-time',
      en: 'High-Concurrency Limited Edition Drop Platform & Real-Time FinTech Ledger'
    },
    category: 'Full-Stack Architecture',
    standName: '「TUSK ACT 4」',
    stats: {
      power: 'A',
      speed: 'A',
      range: 'A',
      durability: 'B',
      precision: 'A',
      potential: '∞'
    },
    summary: {
      th: 'ระบบ E-Commerce และระบบชำระเงินที่ออกแบบมาเพื่อรองรับ Flash Sale ที่มีผู้ใช้งานพร้อมกันสูง (High Concurrency) ใช้สถาปัตยกรรม Event-Driven ป้องกันปัญหา Overselling พร้อม Dashboard วิเคราะห์ข้อมูลแบบเรียลไทม์',
      en: 'An enterprise-grade e-commerce and transactional engine built for high-concurrency flash drops. Engineered with optimistic locking, PostgreSQL ACID transactions, and sub-50ms state synchronization.'
    },
    heroImage: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=900&q=80'
    ],
    techStack: ['React 18', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'Node.js', 'Express', 'PostgreSQL', 'Redis', 'Docker'],
    liveUrl: 'https://sbr-golden-commerce.vercel.app',
    repoUrl: 'https://github.com/golden-spin-dev/sbr-commerce-engine',
    developmentProcess: [
      {
        step: '01 // LESSON 1: THE SPIN',
        title: { th: 'วิเคราะห์คอขวดและออกแบบ UX สไตล์ Editorial', en: 'Bottleneck Analysis & Editorial UX Design' },
        detail: {
          th: 'ศึกษากระบวนการ Checkout ที่ผู้ใช้มักหลุดออกจากระบบ และออกแบบ UI ที่ใช้หลักสัดส่วนทองคำ (1:1.618) เพื่อให้ลำดับสายตาชัดเจนที่สุด',
          en: 'Analyzed checkout drop-off metrics and crafted a Golden Ratio (1:1.618) grid layout that guides user attention effortlessly toward conversion.'
        }
      },
      {
        step: '02 // LESSON 2: GOLDEN RECTANGLE',
        title: { th: 'พัฒนา Frontend และระบบ State Management', en: 'Frontend Architecture & Optimistic UI' },
        detail: {
          th: 'ใช้ React + TypeScript คู่กับ Framer Motion สร้าง Micro-interactions ที่ตอบสนองทันที พร้อมจัดการ Cache และสถานะตะกร้าสินค้าแบบ Optimistic UI',
          en: 'Built modular React + TypeScript components with Framer Motion physics and optimistic UI updates for instantaneous cart feedback.'
        }
      },
      {
        step: '03 // LESSON 3: INFINITE ROTATION',
        title: { th: 'ออกแบบ Database Lock & Load Testing', en: 'ACID Database Locking & Stress Testing' },
        detail: {
          th: 'เขียนคำสั่ง SQL ระดับ Row-level Locking (`SELECT ... FOR UPDATE`) ใน PostgreSQL เพื่อป้องกันการตัดสต็อกซ้ำซ้อนเมื่อมี Request พร้อมกันนับพันรายการ',
          en: 'Implemented PostgreSQL row-level locking (`SELECT ... FOR UPDATE`) and connection pooling to eliminate race conditions under 5,000+ concurrent requests.'
        }
      }
    ],
    architecture: {
      overview: {
        th: 'สถาปัตยกรรมแบบ 3-Tier ที่แยกส่วน Presentation, Business Logic API และ Persistence Layer ออกจากกันอย่างชัดเจน',
        en: 'Decoupled 3-Tier architecture separating Edge Client Presentation, Stateless Express API nodes, and Relational PostgreSQL Storage.'
      },
      layers: [
        {
          name: 'Client Layer (React + TypeScript + Vite)',
          tech: 'Vercel Edge Network',
          description: {
            th: 'ทำหน้าที่เรนเดอร์ UI ด้วยหลักการ Code Splitting, Lazy Loading และจัดการอนิเมชันด้วย Framer Motion',
            en: 'Handles route-based code splitting, accessible keyboard navigation, and hardware-accelerated Framer Motion transitions.'
          }
        },
        {
          name: 'API Gateway & Service Layer (Node.js + Express)',
          tech: 'RESTful API + JWT Auth + Rate Limiter',
          description: {
            th: 'ตรวจสอบสิทธิ์ ควบคุมอัตราการเรียก API (Rate Limiting) และจัดการ Business Logic ด้วย TypeScript',
            en: 'Validates schemas, enforces token bucket rate-limiting, and orchestrates transactional workflows.'
          }
        },
        {
          name: 'Persistence Layer (PostgreSQL / MySQL Compatible)',
          tech: 'PostgreSQL Connection Pool + Indexed Schemas',
          description: {
            th: 'เก็บข้อมูลคำสั่งซื้อ สินค้า และ Audit Log พร้อมทำ Composite Indexing เพื่อลดเวลา Query ลงต่ำกว่า 12ms',
            en: 'Stores normalized transactional records with composite B-Tree indexes achieving <12ms p95 query latency.'
          }
        }
      ]
    },
    lessonsLearned: {
      th: [
        'การจัดการ Race Condition ในระดับ Database มีความแม่นยำและปลอดภัยกว่าการเช็คใน Memory ของ Node.js เพียงอย่างเดียว',
        'การใช้สัดส่วนทองคำ (Golden Ratio) ช่วยให้การจัดวาง Component บนหน้าจอทั้ง Mobile และ Desktop ดูสมดุลโดยไม่ต้องเดาสุ่ม',
        'การแยก Error Boundary และ Fallback State ช่วยให้ระบบยังคงใช้งานได้แม้บริการภายนอกบางส่วนจะล่มชั่วคราว'
      ],
      en: [
        'Handling inventory race conditions at the PostgreSQL transaction level is drastically safer than application-memory locks.',
        'Applying the Golden Ratio (1.618) to typography scales and grid columns creates natural visual harmony across viewports.',
        'Graceful degradation and explicit fallback states ensure uninterrupted UX even during third-party API outages.'
      ]
    }
  },
  {
    id: 'd4c-multiverse-collab',
    stageNumber: 'STAGE 02 // ROCKY MOUNTAINS',
    title: {
      th: 'D4C Dimension Sync — Real-Time Collaborative Canvas & Dev Suite',
      en: 'D4C Dimension Sync — Real-Time Collaborative Canvas & Dev Suite'
    },
    subtitle: {
      th: 'พื้นที่ทำงานร่วมกันแบบเรียลไทม์สำหรับทีมนักพัฒนาและนักออกแบบ พร้อมระบบเปรียบเทียบเวอร์ชัน',
      en: 'Multi-Branch Real-Time Design & Architecture Whiteboard with Parallel State Merging'
    },
    category: 'Real-Time Web App',
    standName: '「DIRTY DEEDS DONE DIRT CHEAP」',
    stats: {
      power: 'A',
      speed: 'A',
      range: 'C',
      durability: 'A',
      precision: 'A',
      potential: 'A'
    },
    summary: {
      th: 'เว็บแอปพลิเคชันสำหรับออกแบบ System Architecture และเขียนโค้ดร่วมกันแบบ Real-time ที่ให้ทีมสร้าง "Parallel Branch" ของบอร์ดงานและรวมกลับเข้ามาได้เหมือน Git',
      en: 'A real-time collaborative system architecture whiteboard allowing engineering teams to fork "parallel dimensions" of a diagram and merge changes without conflict.'
    },
    heroImage: 'https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=900&q=80'
    ],
    techStack: ['React', 'TypeScript', 'Tailwind CSS', 'WebSockets', 'Node.js', 'Express', 'PostgreSQL', 'Canvas API'],
    liveUrl: 'https://d4c-dimension-sync.vercel.app',
    repoUrl: 'https://github.com/golden-spin-dev/d4c-dimension-sync',
    developmentProcess: [
      {
        step: '01 // PARALLEL WORLD',
        title: { th: 'ออกแบบโครงสร้างข้อมูล CRDT สำหรับการแก้ไขพร้อมกัน', en: 'CRDT Data Structure for Conflict-Free Merging' },
        detail: {
          th: 'พัฒนาระบบซิงค์สถานะที่ให้ผู้ใช้หลายคนลากเส้นและแก้ไขโหนดพร้อมกันได้โดยข้อมูลไม่ทับกัน',
          en: 'Designed a Conflict-Free Replicated Data Type (CRDT) state tree enabling multi-cursor editing at 60fps.'
        }
      },
      {
        step: '02 // DIMENSION HOP',
        title: { th: 'เรนเดอร์กราฟิกความเร็วสูงและรองรับคีย์บอร์ด 100%', en: '60FPS Canvas Rendering & Full Keyboard Accessibility' },
        detail: {
          th: 'เพิ่มระบบ Shortcut คีย์บอร์ดและ ARIA Live Regions เพื่อให้ผู้ใช้ทุกคนเข้าถึงฟีเจอร์บนแคนวาสได้อย่างเท่าเทียม',
          en: 'Engineered full keyboard navigation and ARIA live announcements for screen readers interacting with node graphs.'
        }
      }
    ],
    architecture: {
      overview: {
        th: 'ผสานการทำงานระหว่าง REST API สำหรับการบันทึก Snapshot และ WebSocket สำหรับการกระจาย Event ความหน่วงต่ำ',
        en: 'Hybrid WebSocket event streaming paired with periodic PostgreSQL snapshot persistence.'
      },
      layers: [
        {
          name: 'Interactive Canvas Engine (React + HTML5 Canvas)',
          tech: 'Custom Viewport Culling',
          description: {
            th: 'คำนวณเฉพาะวัตถุที่อยู่ในหน้าจอ (Viewport Culling) ทำให้เรนเดอร์โหนดได้มากกว่า 2,000 ชิ้นโดยไม่กระตุก',
            en: 'Renders only visible nodes in the viewport, maintaining 60fps even with 2,000+ architectural blocks.'
          }
        },
        {
          name: 'Sync Server (Node.js + Express + WS)',
          tech: 'Stateful Room Coordinator',
          description: {
            th: 'กระจาย Delta Changes ให้สมาชิกในห้องภายในเวลาเฉลี่ย 18ms',
            en: 'Broadcasts delta state patches across connected clients with sub-20ms latency.'
          }
        },
        {
          name: 'Snapshot Database (PostgreSQL)',
          tech: 'JSONB + Relational Metadata',
          description: {
            th: 'จัดเก็บประวัติการแก้ไขและ Branch ต่างๆ เพื่อให้ย้อนเวลา (Time-Travel Debugging) ได้ทุกวินาที',
            en: 'Persists compressed JSONB state snapshots for instant version rollback and audit history.'
          }
        }
      ]
    },
    lessonsLearned: {
      th: [
        'การทำ Viewport Culling ช่วยลดภาระของ Main Thread บนเบราว์เซอร์มือถือได้มากกว่า 70%',
        'การส่งเฉพาะค่าที่เปลี่ยนแปลง (Delta Patch) แทนการส่ง State ทั้งก้อนช่วยประหยัด Bandwidth อย่างมหาศาล'
      ],
      en: [
        'Viewport culling reduced mobile browser main-thread scripting time by over 70%.',
        'Transmitting compact delta patches instead of full state trees drastically lowered WebSocket bandwidth.'
      ]
    }
  },
  {
    id: 'gyro-ballbreaker-analytics',
    stageNumber: 'STAGE 03 // PHILADELPHIA COAST',
    title: {
      th: 'Ball Breaker Telemetry — AI-Assisted Performance & SEO Observatory',
      en: 'Ball Breaker Telemetry — AI-Assisted Performance & SEO Observatory'
    },
    subtitle: {
      th: 'ระบบตรวจวัด Core Web Vitals, Accessibility และสุขภาพของ API แบบอัตโนมัติ',
      en: 'Automated Core Web Vitals, WCAG Accessibility & API Latency Observatory'
    },
    category: 'DevTools & Observability',
    standName: '「BALL BREAKER」',
    stats: {
      power: 'A',
      speed: 'A',
      range: 'D',
      durability: 'B',
      precision: 'A',
      potential: 'A'
    },
    summary: {
      th: 'แพลตฟอร์มสำหรับนักพัฒนาในการตรวจสอบความเร็วเว็บไซต์ (LCP, INP, CLS), คะแนน SEO และมาตรฐาน Accessibility (WCAG 2.1 AA) พร้อมระบบแจ้งเตือนเมื่อประสิทธิภาพตกลง',
      en: 'An engineering observability suite that monitors Core Web Vitals, WCAG accessibility compliance, and PostgreSQL query performance across production deployments.'
    },
    heroImage: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?auto=format&fit=crop&w=900&q=80'
    ],
    techStack: ['React', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'Node.js', 'Express', 'MySQL / PostgreSQL'],
    liveUrl: 'https://ballbreaker-telemetry.vercel.app',
    repoUrl: 'https://github.com/golden-spin-dev/ballbreaker-telemetry',
    developmentProcess: [
      {
        step: '01 // GOLDEN SPIRAL TELEMETRY',
        title: { th: 'ออกแบบ Agent เก็บข้อมูลขนาดจิ๋ว (< 2KB)', en: 'Zero-Overhead Telemetry Collector (< 2KB)' },
        detail: {
          th: 'เขียนสคริปต์ฝั่ง Client ที่ใช้ `PerformanceObserver` และส่งข้อมูลผ่าน `navigator.sendBeacon` โดยไม่บล็อกการเรนเดอร์หน้าเว็บ',
          en: 'Built a non-blocking telemetry script utilizing `PerformanceObserver` and `navigator.sendBeacon`.'
        }
      },
      {
        step: '02 // ACCESSIBILITY AUDIT ENGINE',
        title: { th: 'สร้างระบบตรวจสอบ Semantic HTML & ARIA', en: 'Automated Semantic & ARIA Compliance Scanner' },
        detail: {
          th: 'ตรวจสอบ Contrast ของสี ลำดับการกด Tab (Focus Order) และป้ายกำกับสำหรับ Screen Reader อัตโนมัติ',
          en: 'Automated checks for contrast ratios, keyboard focus traps, and screen-reader labels.'
        }
      }
    ],
    architecture: {
      overview: {
        th: 'ระบบ Ingestion Pipeline ที่รับข้อมูล Telemetry ปริมาณมากและสรุปผลเป็นกราฟที่เข้าใจง่าย',
        en: 'High-throughput telemetry ingestion pipeline with aggregated time-series reporting.'
      },
      layers: [
        {
          name: 'Dashboard UI (React + SVG Spiral Charts)',
          tech: 'Custom SVG Visualizations',
          description: {
            th: 'แสดงผลกราฟความเร็วและคะแนนสุขภาพเว็บด้วยดีไซน์หน้าปัดเข็มทิศของ Gyro Zeppeli',
            en: 'Visualizes p95/p99 latency metrics through bespoke Steel Ball Run compass gauges.'
          }
        },
        {
          name: 'Ingestion API (Node.js + Express)',
          tech: 'Batch Insert Worker',
          description: {
            th: 'รวบรวมข้อมูลเป็น Batch ก่อนบันทึกลงฐานข้อมูลเพื่อลด I/O Overhead',
            en: 'Buffers incoming beacon payloads and executes bulk inserts into relational tables.'
          }
        }
      ]
    },
    lessonsLearned: {
      th: [
        'การใช้ `sendBeacon` ช่วยให้เก็บสถิติช่วงที่ผู้ใช้ปิดแท็บได้อย่างครบถ้วนโดยไม่ทำให้การเปลี่ยนหน้าช้าลง',
        'Accessibility ที่ดีส่งผลโดยตรงต่อคะแนน SEO และทำให้โครงสร้าง DOM สะอาดขึ้นอย่างเห็นได้ชัด'
      ],
      en: [
        'Using `navigator.sendBeacon` guarantees reliable metric delivery during page unload without hurting navigation speed.',
        'Strict WCAG accessibility compliance directly improves SEO crawlability and DOM maintainability.'
      ]
    }
  }
];

export const TRANSLATIONS = {
  th: {
    nav: {
      home: 'หน้าแรก',
      about: 'เกี่ยวกับฉัน',
      projects: 'ผลงานเด่น',
      terminal: 'Spin Terminal',
      skills: 'ทักษะ & สแต็ก',
      github: 'กิจกรรม GitHub',
      experience: 'เส้นทางสายอาชีพ',
      contact: 'ติดต่อร่วมงาน',
      skipToContent: 'ข้ามไปยังเนื้อหาหลัก'
    },
    hero: {
      edition: 'STEEL BALL RUN // 1890 TRANSCONTINENTAL EDITION',
      greeting: 'สวัสดีครับ ผมคือ',
      name: 'ธนกร "ไจโร" อัศวเมธี',
      role: 'Full-Stack Developer & Creative UI/UX Engineer',
      tagline: 'ผสาน "สัดส่วนทองคำ (Golden Ratio φ = 1.618)" เข้ากับสถาปัตยกรรมซอฟต์แวร์ยุคใหม่ สร้างสรรค์เว็บไซต์ที่รวดเร็ว หรูหรา และเข้าถึงได้สำหรับทุกคน',
      ctaPrimary: 'สำรวจโปรเจกต์ (Stage Logs)',
      ctaSecondary: 'เปิดเทอร์มินัลนักพัฒนา',
      standCry: 'NYO-HO! // INFINITE GOLDEN SPIN ARCHITECTURE',
      scrollHint: 'เลื่อนลงเพื่อเริ่มการแข่งขันข้ามทวีป'
    },
    about: {
      badge: 'CHAPTER 01 // THE RIDER PROFILE',
      title: 'ปรัชญาการพัฒนาที่ขับเคลื่อนด้วย "สัดส่วนทองคำ"',
      subtitle: 'นักพัฒนา Full-Stack ที่ใส่ใจทั้งความงามระดับ Editorial Art และความแข็งแกร่งของระบบ Backend',
      bio1: 'ในโลกของ JoJo Part 7: Steel Ball Run "การหมุนตามสัดส่วนทองคำ (Golden Spin)" คือพลังที่ไร้ขีดจำกัดซึ่งเกิดจากการสังเกตธรรมชาติอย่างแม่นยำ ผมนำปรัชญาเดียวกันนี้มาใช้ในการเขียนโค้ดและการออกแบบเว็บไซต์',
      bio2: 'ทุกพิกเซลบน Frontend (React, TypeScript, Tailwind CSS, Framer Motion) ถูกจัดวางด้วยสัดส่วนที่สมดุล ลื่นไหล และรองรับผู้ใช้งานทุกกลุ่ม ในขณะที่ฝั่ง Backend (Node.js, Express, PostgreSQL/MySQL) ถูกออกแบบให้มั่นคง ปลอดภัย และขยายขนาดได้จริงในระดับ Production',
      standTitle: 'พารามิเตอร์นักพัฒนา (STAND PARAMETERS)',
      philosophyTitle: 'กฎเหล็ก 3 ข้อของผม (Lessons of the Spin)',
      lessons: [
        {
          num: 'LESSON 01',
          title: 'Design with Golden Precision',
          desc: 'อินเทอร์เฟซต้องมีเอกลักษณ์ระดับแฟชั่นชั้นสูง แต่อ่านง่าย ใช้งานด้วยคีย์บอร์ดได้ 100% และทำงานลื่นไหล 60fps'
        },
        {
          num: 'LESSON 02',
          title: 'Resilient Full-Stack Core',
          desc: 'เขียนโค้ดแบบ Type-Safe ทั้งระบบ จัดการ Error อย่างรัดกุม และออกแบบโครงสร้างฐานข้อมูลที่รองรับการเติบโต'
        },
        {
          num: 'LESSON 03',
          title: 'Bilingual & Global Ready',
          desc: 'พร้อมทำงานร่วมกับทีมทั้งในประเทศไทยและระดับสากล ด้วยมาตรฐานเอกสาร โค้ด และการสื่อสารที่ชัดเจน'
        }
      ]
    },
    projects: {
      badge: 'CHAPTER 02 // STAGE CHECKPOINTS',
      title: 'ผลงานและสถาปัตยกรรมระบบ',
      subtitle: 'คลิกที่แต่ละโปรเจกต์เพื่อดูขั้นตอนการพัฒนา แผนผังสถาปัตยกรรมเชิงลึก และบทเรียนที่ได้รับจากการลงมือทำจริง',
      filterAll: 'ทั้งหมด',
      viewDetail: 'เจาะลึกโปรเจกต์ & สถาปัตยกรรม',
      liveDemo: 'ดูเว็บจริง',
      sourceCode: 'ซอร์สโค้ด',
      backToHome: 'กลับสู่หน้าหลัก',
      processTitle: 'ขั้นตอนการพัฒนา (Development Stages)',
      archTitle: 'สถาปัตยกรรมระบบ (System Architecture)',
      lessonsTitle: 'บทเรียนที่ได้รับ (Lessons of the Spin)',
      galleryTitle: 'ภาพตัวอย่างระบบ (Visual Showcase)'
    },
    terminal: {
      badge: 'CHAPTER 03 // INTERACTIVE DEV CONSOLE',
      title: 'STEEL BALL TERMINAL & CODE INSPECTOR',
      subtitle: 'พิมพ์คำสั่งใน Terminal จำลองเพื่อสำรวจข้อมูลของผม หรือสลับดูโค้ดตัวอย่างระดับ Production ด้านข้าง',
      promptHint: 'พิมพ์ "help" เพื่อดูคำสั่งทั้งหมด หรือคลิกปุ่มคำสั่งด่วนด้านล่าง:',
      placeholder: 'พิมพ์คำสั่ง เช่น help, about, skills, spin, projects, contact, clear...',
      codeTabTitle: 'ตัวอย่างโค้ดสถาปัตยกรรมจริง (Production Snippets)'
    },
    skills: {
      badge: 'CHAPTER 04 // ARSENAL & TECH STACK',
      title: 'อาวุธและเทคโนโลยีที่ใช้ขับเคลื่อน',
      subtitle: 'ครอบคลุมตั้งแต่การออกแบบ Motion ระดับไฮเอนด์ ไปจนถึงการจัดการฐานข้อมูลและ Cloud Deployment'
    },
    github: {
      badge: 'CHAPTER 05 // LIVE TELEMETRY',
      title: 'กิจกรรมการพัฒนาจาก GitHub',
      subtitle: 'ดึงข้อมูล Repository ล่าสุดจาก GitHub API แบบเรียลไทม์ พร้อมระบบ Fallback อัจฉริยะกรณีออฟไลน์หรือติด Rate Limit',
      usernameLabel: 'GitHub Username:',
      fetchBtn: 'ซิงค์ข้อมูล',
      simulateErrorBtn: 'ทดสอบระบบ Fallback (จำลองโหลดล้มเหลว)',
      FallbackNotice: 'กำลังแสดงผลข้อมูลสำรองจากระบบแคช (Offline / API Fallback Mode) เพื่อให้คุณยังสามารถดูผลงานได้อย่างต่อเนื่อง',
      liveNotice: 'เชื่อมต่อกับ GitHub REST API สำเร็จ — แสดงข้อมูลแบบเรียลไทม์'
    },
    experience: {
      badge: 'CHAPTER 06 // THE TRANSCONTINENTAL ROUTE',
      title: 'ประสบการณ์ทำงานและการศึกษา',
      subtitle: 'เส้นทางการเดินทางตั้งแต่มหาวิทยาลัยสู่การพัฒนาระบบระดับมืออาชีพ'
    },
    contact: {
      badge: 'FINAL STAGE // NEW YORK FINISH LINE',
      title: 'พร้อมร่วมเดินทางในโปรเจกต์ถัดไปของคุณ',
      subtitle: 'กำลังมองหาตำแหน่ง Full-Stack / Frontend Developer ทั้งในไทยและต่างประเทศ (Remote / Hybrid / On-site) ส่งข้อความหาผมได้ทันที',
      nameLabel: 'ชื่อ-นามสกุลของคุณ',
      emailLabel: 'อีเมลติดต่อกลับ',
      subjectLabel: 'หัวข้อการติดต่อ / ตำแหน่งงาน',
      messageLabel: 'รายละเอียดโปรเจกต์หรือข้อความถึงผม',
      submitBtn: 'ส่งสาส์นด้วยพลัง Golden Spin',
      submitting: 'กำลังส่งข้อมูลเข้าสู่ระบบ...',
      successMsg: 'ได้รับข้อความของคุณเรียบร้อยแล้ว! ขอบคุณที่ติดต่อเข้ามา ผมจะตอบกลับภายใน 24 ชั่วโมงครับ (NYO-HO!)',
      location: 'กรุงเทพมหานคร, ประเทศไทย (พร้อมทำงานทั้งในไทยและต่างประเทศ)'
    }
  },
  en: {
    nav: {
      home: 'Home',
      about: 'About',
      projects: 'Projects',
      terminal: 'Spin Terminal',
      skills: 'Tech Stack',
      github: 'GitHub Live',
      experience: 'Journey',
      contact: 'Contact',
      skipToContent: 'Skip to main content'
    },
    hero: {
      edition: 'STEEL BALL RUN // 1890 TRANSCONTINENTAL EDITION',
      greeting: 'GREETINGS, I AM',
      name: 'Thanakorn "Gyro" Asawamethi',
      role: 'Full-Stack Developer & Creative UI/UX Engineer',
      tagline: 'Fusing the "Golden Ratio (φ = 1.618)" with resilient full-stack engineering to craft luxurious, blazing-fast, and universally accessible web experiences.',
      ctaPrimary: 'Explore Stage Projects',
      ctaSecondary: 'Launch Spin Terminal',
      standCry: 'NYO-HO! // INFINITE GOLDEN SPIN ARCHITECTURE',
      scrollHint: 'SCROLL TO EMBARK ON THE CROSS-CONTINENT RACE'
    },
    about: {
      badge: 'CHAPTER 01 // THE RIDER PROFILE',
      title: 'Engineering Driven by the Golden Ratio',
      subtitle: 'A Full-Stack Developer bridging high-fashion editorial aesthetics with rock-solid backend architecture.',
      bio1: 'In JoJo Part 7: Steel Ball Run, the "Golden Spin" represents boundless energy unlocked through observing nature’s mathematical harmony. I apply this exact discipline to software architecture and interactive design.',
      bio2: 'Every pixel on the Frontend (React, TypeScript, Tailwind CSS, Framer Motion) is choreographed with Golden Ratio proportions and WCAG accessibility, while the Backend (Node.js, Express, PostgreSQL/MySQL) is engineered for fault tolerance, clean API contracts, and low latency.',
      standTitle: 'DEVELOPER STAND PARAMETERS',
      philosophyTitle: 'The 3 Lessons of My Engineering Spin',
      lessons: [
        {
          num: 'LESSON 01',
          title: 'Design with Golden Precision',
          desc: 'Interfaces should look like museum-grade editorial art while remaining 100% keyboard navigable and locked at 60fps.'
        },
        {
          num: 'LESSON 02',
          title: 'Resilient Full-Stack Core',
          desc: 'End-to-end TypeScript safety, graceful fallback states, and optimized SQL schemas built for production scale.'
        },
        {
          num: 'LESSON 03',
          title: 'Bilingual & Global Ready',
          desc: 'Seamless collaboration with both Thai and international engineering teams through clear architecture and documentation.'
        }
      ]
    },
    projects: {
      badge: 'CHAPTER 02 // STAGE CHECKPOINTS',
      title: 'Featured Projects & System Architecture',
      subtitle: 'Select any checkpoint to inspect the full case study, development stages, system architecture layers, and engineering lessons learned.',
      filterAll: 'All Stages',
      viewDetail: 'Inspect Architecture & Case Study',
      liveDemo: 'Live Deployment',
      sourceCode: 'Source Repository',
      backToHome: 'Back to Race Map',
      processTitle: 'Development Process & Stages',
      archTitle: 'System Architecture Blueprint',
      lessonsTitle: 'Lessons Learned (Mastery of the Spin)',
      galleryTitle: 'Visual Telemetry & Interface Gallery'
    },
    terminal: {
      badge: 'CHAPTER 03 // INTERACTIVE DEV CONSOLE',
      title: 'STEEL BALL TERMINAL & CODE INSPECTOR',
      subtitle: 'Execute interactive CLI commands to inspect my profile, or switch tabs to review production full-stack code snippets.',
      promptHint: 'Type "help" for available commands or click a quick-action chip below:',
      placeholder: 'Type a command: help, about, skills, spin, projects, contact, clear...',
      codeTabTitle: 'Production Full-Stack Code Snippets'
    },
    skills: {
      badge: 'CHAPTER 04 // ARSENAL & TECH STACK',
      title: 'Full-Stack Arsenal & Technologies',
      subtitle: 'From bespoke Framer Motion choreography to normalized PostgreSQL/MySQL databases and Vercel cloud pipelines.'
    },
    github: {
      badge: 'CHAPTER 05 // LIVE TELEMETRY',
      title: 'Live GitHub Engineering Activity',
      subtitle: 'Real-time repository telemetry fetched from the GitHub REST API, equipped with resilient error handling and curated fallback cache.',
      usernameLabel: 'GitHub Username:',
      fetchBtn: 'Sync Telemetry',
      simulateErrorBtn: 'Test Error Fallback Mode',
      FallbackNotice: 'Displaying resilient cached repository data (Offline / Rate-Limit Fallback Active) so your review experience remains uninterrupted.',
      liveNotice: 'Connected to GitHub REST API — Displaying live repository telemetry.'
    },
    experience: {
      badge: 'CHAPTER 06 // THE TRANSCONTINENTAL ROUTE',
      title: 'Experience & Academic Checkpoints',
      subtitle: 'Chronological milestones across software engineering, UI/UX craftsmanship, and computer science.'
    },
    contact: {
      badge: 'FINAL STAGE // NEW YORK FINISH LINE',
      title: 'Ready to Ride on Your Next Engineering Team',
      subtitle: 'Available for Full-Stack & Frontend Developer roles in Thailand and internationally (Remote / Hybrid / On-site). Dispatch a message below.',
      nameLabel: 'Your Name',
      emailLabel: 'Return Email Address',
      subjectLabel: 'Role / Opportunity Subject',
      messageLabel: 'Project Details or Message',
      submitBtn: 'Dispatch via Golden Spin',
      submitting: 'Transmitting across the continent...',
      successMsg: 'Transmission received! Thank you for reaching out — I will respond within 24 hours. (NYO-HO!)',
      location: 'Bangkok, Thailand (Open to Local & Global Remote Opportunities)'
    }
  }
};
