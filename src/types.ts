export interface ServiceItem {
  id: string;
  title: string;
  categoryNumber: string;
  colorHex: string;
  tagline: string;
  description: string;
  deliverables: string[];
  image: string;
  accentText: string;
}

export interface ProjectItem {
  id: string;
  title: string;
  client: string;
  category: string;
  year: string;
  description: string;
  image: string;
  span: string; // Tailwind grid span e.g. "col-span-12 md:col-span-7"
  tags: string[];
}

export interface StatItem {
  value: string;
  numericTarget?: number;
  label: string;
  subtext: string;
}

export interface NavLink {
  label: string;
  href: string;
  badge?: string;
  isExternal?: boolean;
}
