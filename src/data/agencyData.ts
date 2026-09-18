import { ServiceItem, ProjectItem, StatItem } from '../types';

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: 'branding',
    title: 'Branding',
    categoryNumber: '01',
    colorHex: '#964032', // Terracotta
    tagline: 'Distinctive Purpose & Enduring Identity',
    description:
      'We craft strategic brand architectures, distinctive visual systems, and purposeful narratives that position regional industry leaders for generational relevance and global expansion.',
    deliverables: [
      'Brand Audit & Cultural Semiotics',
      'Purpose & Value Matrix',
      'Global Brand Architecture',
      'Visual & Verbal Identity Systems',
      'Brand Governance Guidelines'
    ],
    image: 'https://images.unsplash.com/photo-1600132806370-bf17e65e942f?q=80&w=1200&auto=format&fit=crop',
    accentText: 'Terracotta • Brand Core'
  },
  {
    id: 'business-design',
    title: 'Business Design',
    categoryNumber: '02',
    colorHex: '#1E293B', // Slate Navy
    tagline: 'Organizational Agility & Commercial Models',
    description:
      'Bridging strategy and human behavior to engineer viable, scalable business models that unlock new market paradigms and organizational innovation across Asian markets.',
    deliverables: [
      'New Business Model Prototyping',
      'Value Proposition Mapping',
      'Go-to-Market Strategy',
      'Organizational Transformation',
      'Innovation Culture Workshops'
    ],
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1200&auto=format&fit=crop',
    accentText: 'Slate Navy • Strategic Engine'
  },
  {
    id: 'experience-design',
    title: 'Experience Design',
    categoryNumber: '03',
    colorHex: '#4A2040', // Plum/Wine
    tagline: 'Omnichannel Customer Touchpoints',
    description:
      'Designing cohesive, sensory-rich human experiences that seamlessly bridge physical environments, hospitality spaces, retail flagships, and digital journeys.',
    deliverables: [
      'Customer Journey Architecture',
      'Spatial & Retail Brand Experiences',
      'Service Blueprinting & Staff Rituals',
      'Sensory Brand Environments',
      'Signature Moment Design'
    ],
    image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=1200&auto=format&fit=crop',
    accentText: 'Plum Wine • Spatial & Sensory'
  },
  {
    id: 'ui-ux-design',
    title: 'UI/UX Design',
    categoryNumber: '04',
    colorHex: '#12372A', // Deep Emerald
    tagline: 'High-Impact Digital Products & Systems',
    description:
      'Elevating enterprise digital platforms with intuitive interfaces, resilient multi-brand design systems, and friction-free user journeys calibrated for high retention and conversion.',
    deliverables: [
      'Enterprise UX Research & Heuristics',
      'Multi-Brand Design Systems',
      'Responsive Web & Mobile Architecture',
      'Micro-Interactions & Motion Choreography',
      'Conversion Rate Optimization'
    ],
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop',
    accentText: 'Deep Emerald • Digital Precision'
  },
  {
    id: 'packaging-design',
    title: 'Packaging Design',
    categoryNumber: '05',
    colorHex: '#78350F', // Warm Ochre
    tagline: 'Shelf Dominance & Tactile Storytelling',
    description:
      'Translating brand values into tactile unboxing rituals and shelf-stopping structural packaging that balances premium aesthetic prestige with sustainable materials engineering.',
    deliverables: [
      'Structural Packaging Prototyping',
      'Substrate & Material Innovation',
      'Retail Shelf Impact Studies',
      'Unboxing Ritual Choreography',
      'Sustainable Lifecycle Assessment'
    ],
    image: 'https://images.unsplash.com/photo-1544816155-12df9643f363?q=80&w=1200&auto=format&fit=crop',
    accentText: 'Warm Ochre • Tactile Presence'
  },
  {
    id: 'communication-design',
    title: 'Communication Design',
    categoryNumber: '06',
    colorHex: '#6B21A8', // Berry Magenta
    tagline: 'Multi-Channel Brand Storytelling',
    description:
      'Orchestrating compelling integrated campaigns, brand launch films, investor pitch collateral, and cultural editorial content that drives stakeholder alignment and market prestige.',
    deliverables: [
      'Launch Narrative Strategy',
      'Executive & Investor Decks',
      'Creative Campaign Direction',
      'Annual Reports & ESG Publications',
      'Motion Graphics & 3D Visuals'
    ],
    image: 'https://images.unsplash.com/photo-1542744094-3a31f272c490?q=80&w=1200&auto=format&fit=crop',
    accentText: 'Berry Magenta • Visual Voice'
  },
  {
    id: 'sustainable-design',
    title: 'Sustainable Design',
    categoryNumber: '07',
    colorHex: '#14532D', // Forest Green
    tagline: 'Circular Systems & ESG Integration',
    description:
      'Embedding circular economy principles into products, operational workflows, and stakeholder reporting to help enterprises transition into credible, future-proof sustainable brands.',
    deliverables: [
      'Circularity Audit & Roadmap',
      'Eco-Conscious Brand Standards',
      'Carbon Impact Communication',
      'Renewable Material Sourcing Frameworks',
      'ESG Narrative Alignment'
    ],
    image: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?q=80&w=1200&auto=format&fit=crop',
    accentText: 'Forest Green • Circular Future'
  },
  {
    id: 'fractional-cbo',
    title: 'Fractional CBO',
    categoryNumber: '08',
    colorHex: '#2C7A7B', // Teal
    tagline: 'Executive Brand Leadership On-Demand',
    description:
      'Senior executive stewardship providing high-growth enterprises and mid-market conglomerates with Chief Brand Officer leadership to guide strategic M&A branding, internal alignment, and market expansions.',
    deliverables: [
      'Executive Board Advisory',
      'M&A Brand Harmonization',
      'Agency Roster Management',
      'Brand Equity Measurement',
      'Talent Upskilling & Leadership Coaching'
    ],
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1200&auto=format&fit=crop',
    accentText: 'Teal • Executive Stewardship'
  },
  {
    id: 'ai-bmt',
    title: 'AI BMT',
    categoryNumber: '09',
    colorHex: '#1E3A8A', // Navy Blue
    tagline: 'Brand Management Technologies Powered by AI',
    description:
      'Leveraging predictive brand models, automated brand asset intelligence, and real-time cultural sentiment tracking to maintain continuous brand consistency across dozens of markets.',
    deliverables: [
      'Algorithmic Brand Health Scoring',
      'Generative Visual Governance',
      'Predictive Competitor Intelligence',
      'Automated Asset Localization',
      'Multi-Language Semantic Consistency'
    ],
    image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1200&auto=format&fit=crop',
    accentText: 'Navy Blue • Intelligent Systems'
  }
];

export const FEATURED_WORKS: ProjectItem[] = [
  {
    id: 'work-1',
    title: 'Aura Health Sanctuary',
    client: 'Aura Wellness Group',
    category: 'Experience Design',
    year: '2025',
    description: 'Transforming a premier Pan-Asian holistic medicine retreat into a multi-sensory physical and digital sanctuary across Singapore & Bali.',
    image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=1200&auto=format&fit=crop',
    span: 'col-span-12 lg:col-span-8',
    tags: ['Spatial Branding', 'Omnichannel Journey', 'Interior Rituals']
  },
  {
    id: 'work-2',
    title: 'Vanguard Capital AI',
    client: 'Vanguard Holdings',
    category: 'UI/UX Design',
    year: '2024',
    description: 'Ultra-low latency institutional wealth intelligence dashboard serving Tier-1 Asian private banks with predictive asset modelling.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop',
    span: 'col-span-12 lg:col-span-4',
    tags: ['Fintech UX', 'Design System', 'Dark Mode UI']
  },
  {
    id: 'work-3',
    title: 'Solstice Botanical Spirits',
    client: 'Solstice Distillers',
    category: 'Packaging Design',
    year: '2025',
    description: 'Zero-waste biodynamic gin packaging featuring bespoke embossed wild-glass bottles and hand-pressed seeded paper labels.',
    image: 'https://images.unsplash.com/photo-1527061011665-3652c757a4d4?q=80&w=1200&auto=format&fit=crop',
    span: 'col-span-12 lg:col-span-4',
    tags: ['Sustainable Substrates', 'Luxury Spirits', 'Embossed Glass']
  },
  {
    id: 'work-4',
    title: 'NEXUS Robotics Brand Shift',
    client: 'Nexus Autonomous Systems',
    category: 'Communication Design',
    year: '2024',
    description: 'Complete brand repositioning and global investor narrative for an autonomous logistics pioneer scaling across Southeast Asia.',
    image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?q=80&w=1200&auto=format&fit=crop',
    span: 'col-span-12 lg:col-span-8',
    tags: ['Global Launch', '3D Motion', 'Investor Narrative']
  },
  {
    id: 'work-5',
    title: 'TerraVerde Regenerative Grid',
    client: 'Terra Energy SG',
    category: 'Sustainable Design',
    year: '2025',
    description: 'Circular brand identity and civic engagement platform empowering 120,000 smart homes to trade localized microgrid solar credits.',
    image: 'https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?q=80&w=1200&auto=format&fit=crop',
    span: 'col-span-12 lg:col-span-6',
    tags: ['Circular Economy', 'Clean Energy', 'Civic Brand']
  },
  {
    id: 'work-6',
    title: 'BrandsBuilder.ai Enterprise',
    client: 'Consulus Labs',
    category: 'AI BMT',
    year: '2025',
    description: 'Autonomous brand governance and semantic consistency engine monitoring 40+ regional markets in real time.',
    image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1200&auto=format&fit=crop',
    span: 'col-span-12 lg:col-span-6',
    tags: ['Autonomous Governance', 'Generative AI', 'Brand Health']
  }
];

export const AGENCY_STATS: StatItem[] = [
  {
    value: '1942',
    label: 'FOUNDED IN',
    subtext: 'Eight decades of generational business transformation'
  },
  {
    value: '285+',
    numericTarget: 285,
    label: 'BRANDS TRANSFORMED',
    subtext: 'Across 18 cities in Asia, Europe & the Americas'
  },
  {
    value: '8',
    numericTarget: 8,
    label: 'ACCREDITATIONS TO DATE',
    subtext: 'Enterprise Singapore EDG & Certified Management Consultants'
  },
  {
    value: '54+',
    numericTarget: 54,
    label: 'AWARDS & RECOGNITIONS',
    subtext: 'Red Dot, Good Design Award, Singapore Packaging Awards'
  }
];

export const FEATURED_MEDIA = [
  { name: 'The Straits Times', tag: 'Singapore National Daily' },
  { name: 'detikcom', tag: 'Indonesia Premier Media' },
  { name: 'Tempo', tag: 'Investigative Weekly' },
  { name: 'Today', tag: 'Singapore Digital' },
  { name: 'Channel NewsAsia', tag: 'Regional Broadcast' },
  { name: 'Forbes Asia', tag: 'Business & Wealth' },
  { name: 'Business Times', tag: 'Financial Daily' },
  { name: 'Design Week', tag: 'Global Design Review' }
];
