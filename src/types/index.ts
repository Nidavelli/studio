
export interface Project {
  id: string;
  title: string;
  organization: string;
  role: string;
  duration: string;
  achievements: string; // Single string for AI analysis, can contain markdown for display
  image: string;
  dataAiHint?: string;
  tags: string[]; // Manually curated or initial tags
  aiGeneratedTags?: string[];
}

export interface Skill {
  id: string;
  name: string;
  icon?: React.ComponentType<{ className?: string }>; // Optional Lucide icon
}

export interface Testimonial {
  id: string;
  quote: string;
  name: string;
  title: string;
  company?: string;
  image?: string;
  dataAiHint?: string;
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  duration: string;
  description: string;
  icon?: React.ComponentType<{ className?: string }>;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon?: React.ComponentType<{ className?: string }>;
  details?: string[];
}

export interface EducationItem {
  id: string;
  degree: string;
  institution: string;
  year: string;
  description?: string;
  icon?: React.ComponentType<{ className?: string }>;
}
