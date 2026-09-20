import { ServiceItem, ProjectItem, StatItem, TestimonialItem } from '../types';

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: 'tender-writing',
    title: 'Tender Writing',
    categoryNumber: '01',
    colorHex: '#1E3A8A', // Royal Navy
    tagline: 'Compliant, High-Scoring & Persuasive Bid Narratives',
    description:
      'We deconstruct complex tender specifications, pinpoint evaluation criteria, and craft persuasive, evidence-based technical and commercial responses tailored to outscore your competitors.',
    deliverables: [
      'Full RFP, ITT & PQQ/SQ Response Drafting',
      'Win Theme & Value Proposition Architecture',
      'Social Value, Naet Zero & ESG Statements',
      'Technical Method Statements & Case Proofs',
      'Compliance Matrix & Final Quality Assurance'
    ],
    image: "/portrait.png",
    accentText: 'Royal Navy • Technical Precision'
  },
  {
    id: 'bid-management',
    title: 'Bid Management',
    categoryNumber: '02',
    colorHex: '#1E293B', // Slate Obsidian
    tagline: 'End-to-End Bid Governance & Milestone Control',
    description:
      'From bid/no-bid qualification through storyboard workshops to final gateway sign-off, we coordinate your internal subject matter experts and ensure flawless, on-time submissions without panic.',
    deliverables: [
      'Bid Strategy & Opportunity Qualification',
      'Bid Program Timelines & Deliverable Tracking',
      'Red Team & Gold Team Critical Reviews',
      'Subject Matter Expert (SME) Interviewing',
      'E-Tendering Portal Upload & Confirmation'
    ],
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1200&auto=format&fit=crop',
    accentText: 'Slate Obsidian • Rigorous Governance'
  },
  {
    id: 'pitch-deck-design',
    title: 'Pitch Deck Design',
    categoryNumber: '03',
    colorHex: '#5B21B6', // Imperial Violet
    tagline: 'High-Impact Presentations for Buyer Interviews',
    description:
      'Turn technical specifications into visually compelling pitch decks and executive leave-behinds designed to captivate procurement panels during competitive tender interviews and presentations.',
    deliverables: [
      'Bespoke Procurement Pitch Slide Decks',
      'Methodology & Delivery Phasing Infographics',
      'Organisational Charts & Key Personnel Bios',
      'Interactive Placemats & Executive Summaries',
      'Buyer Panel Rehearsal & Q&A Preparation'
    ],
    image: 'https://images.unsplash.com/photo-1542744094-3a31f272c490?q=80&w=1200&auto=format&fit=crop',
    accentText: 'Imperial Violet • Visual Persuasion'
  },
  {
    id: 'procurement-strategy',
    title: 'Procurement Strategy',
    categoryNumber: '04',
    colorHex: '#115E59', // Deep Teal
    tagline: 'Framework Positioning & Market Intelligence',
    description:
      'Guiding SMEs on upcoming public sector contract pipelines, Dynamic Purchasing Systems (DPS), buyer engagement protocols, and pricing strategies to win lucrative, repeatable revenue streams.',
    deliverables: [
      'Public & Private Contract Pipeline Forecasting',
      'Framework & Dynamic Purchasing System (DPS) Entry',
      'Commercial Pricing Benchmarking & Strategy',
      'Pre-Market Engagement & Early Buyer Dialogue',
      'Post-Tender Debrief Analysis & Bid Score Audits'
    ],
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200&auto=format&fit=crop',
    accentText: 'Deep Teal • Commercial Pipeline'
  }
];

export const FEATURED_WORKS: ProjectItem[] = [
  {
    id: 'work-1',
    title: 'Healthcare Construction Award',
    client: 'NHS Foundation Trust & Regional Healthcare Authority',
    category: 'Tender Writing',
    year: '2025',
    description: 'Secured a £14.8M capital works framework contract for an SME contractor by delivering a 100% compliant technical response with maximum marks for clinical infection control and Net Zero carbon construction.',
    image: 'https://images.unsplash.com/photo-1587351021759-3e566b6af7cc?q=80&w=1200&auto=format&fit=crop',
    span: 'col-span-12 lg:col-span-8',
    tags: ['£14.8M Contract Won', '100% Quality Evaluation', 'NHS Healthcare Framework']
  },
  {
    id: 'work-2',
    title: 'Commercial Development Strategy',
    client: 'Metropolitan Urban Regeneration Council',
    category: 'Procurement Strategy',
    year: '2024',
    description: 'Positioned an ambitious SME developer as preferred supplier on a £22M mixed-use commercial framework, outscoring tier-1 multinational incumbents through distinctive local social value architecture.',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1200&auto=format&fit=crop',
    span: 'col-span-12 lg:col-span-4',
    tags: ['£22M Public Framework', 'Social Value Matrix', 'Lead Supplier Award']
  },
  {
    id: 'work-3',
    title: 'Critical Estates & Facilities Bid',
    client: 'Government Property Agency & Central Civil Estates',
    category: 'Bid Management',
    year: '2025',
    description: 'Managed the end-to-end multi-disciplinary tender submission for an 18-building facilities management contract, achieving top technical score and zero compliance non-conformances.',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1200&auto=format&fit=crop',
    span: 'col-span-12 lg:col-span-6',
    tags: ['Multi-Year Facilities', 'Red Team Audit', '100% Compliance']
  },
  {
    id: 'work-4',
    title: 'Digital Public Services Pitch Deck',
    client: 'Department for Digital & Regional Transformation',
    category: 'Pitch Deck Design',
    year: '2024',
    description: 'Architected high-impact visual presentation materials and coached senior SME founders for a competitive buyer interview, converting a shortlist ranking into a definitive contract win.',
    image: 'https://images.unsplash.com/photo-1542744094-3a31f272c490?q=80&w=1200&auto=format&fit=crop',
    span: 'col-span-12 lg:col-span-6',
    tags: ['Buyer Presentation', 'Pitch Coaching', 'Framework Appointment']
  }
];

export const AGENCY_STATS: StatItem[] = [
  {
    value: '£5.3M+',
    label: 'PROCURED TENDER VALUE',
    subtext: 'High-value contracts and frameworks won for growing SME clients'
  },
  {
    value: '94.8%',
    numericTarget: 95,
    label: 'BID WIN RATE',
    subtext: 'Consistent top-quartile technical evaluation scores on public tenders'
  },
  {
    value: '180+',
    numericTarget: 180,
    label: 'TENDERS SUBMITTED & WON',
    subtext: 'Across UK Crown Commercial, NHS, local councils, and tier-1 private buyers'
  },
  {
    value: '100%',
    numericTarget: 100,
    label: 'COMPLIANCE AUDIT PASS',
    subtext: 'Zero disqualifications with thorough gateway reviews and APMP standards'
  }
];

export const FEATURED_MEDIA = [
  { name: 'Crown Commercial Service', tag: 'UK Central Government' },
  { name: 'NHS Supply Chain', tag: 'Healthcare Frameworks' },
  { name: 'Find a Tender', tag: 'High-Value Public Notices' },
  { name: 'ProContract', tag: 'Local Authority Procurement' },
  { name: 'Contracts Finder', tag: 'SME Government Opportunities' },
  { name: 'CompeteFor', tag: 'Major Infrastructure Bids' },
  { name: 'Achilles / UVDB', tag: 'Utilities & Transport' },
  { name: 'Constructionline Gold', tag: 'Built Environment Standards' }
];

export const TESTIMONIALS_DATA: TestimonialItem[] = [
  {
    id: 't-1',
    author: 'David Vance',
    role: 'Managing Director',
    company: 'Vance Civil Infrastructure',
    sector: 'Highways & Public Infrastructure',
    quote: 'Their technical writers transformed our bid narrative from standard compliance into a top-ranked submission. We secured a key place on the £4.2M regional highways framework with an unprecedented 98.5% quality score.',
    contractWon: '£4.2M Regional Highways Framework',
    metricBadge: '98.5% Quality Score',
    rating: 5
  },
  {
    id: 't-2',
    author: 'Sarah Jenkins',
    role: 'Head of Commercial Partnerships',
    company: 'MedCore Diagnostics Ltd',
    sector: 'NHS & Healthcare Supply Chain',
    quote: 'Navigating NHS dynamic purchasing systems and stringent social value matrices used to overwhelm our team. They handled every method statement and gateway review flawlessly. We were awarded preferred bidder status on all 3 lots.',
    contractWon: '£1.8M NHS Trust Equipment DPS',
    metricBadge: 'Ranked 1st of 18 Bidders',
    rating: 5
  },
  {
    id: 't-3',
    author: 'Marcus Thorne',
    role: 'Chief Executive Officer',
    company: 'Aegis Cloud Solutions',
    sector: 'Defence & Crown Commercial Service',
    quote: 'G-Cloud 14 and CCS RM6263 are fiercely competitive. The bid management discipline and storyboarding they brought to the table gave us the winning edge. The return on investment for our SME has been transformational.',
    contractWon: '£2.6M CCS Cloud Architecture DPS',
    metricBadge: '100% Compliance Audit',
    rating: 5
  },
  {
    id: 't-4',
    author: 'Elena Rostova',
    role: 'Operations & Bid Director',
    company: 'Apex Facilities & Energy Management',
    sector: 'Local Authority Facilities & Net Zero',
    quote: 'With an aggressive 12-day turnaround for a tier-1 commercial council contract, their rapid response bid team mobilized within 4 hours. Clear, evidence-backed case proofs and zero compliance defects.',
    contractWon: '£3.1M Council FM & Net Zero Tender',
    metricBadge: 'Zero Clarification Defects',
    rating: 5
  },
  {
    id: 't-5',
    author: 'Liam O\'Connor',
    role: 'Commercial Lead',
    company: 'Fortis Electrical & Rail Contractors',
    sector: 'Rail & Transport Infrastructure',
    quote: 'The pitch deck and buyer interview preparation was a masterclass. They didn\'t just write the tender; they coached our leadership through the clarification presentation. That secured the contract outright.',
    contractWon: '£1.5M Transport for North Framework',
    metricBadge: 'Unanimous Buyer Selection',
    rating: 5
  }
];

