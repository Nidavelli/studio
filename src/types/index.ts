export interface Project {
  id: string;
  title: string;
  organization: string;
  role: string;
  duration: string;
  achievements: string; // Single string for AI analysis, can contain markdown for display
  image: string;
  tags: string[]; // Manually curated or initial tags
  aiGeneratedTags?: string[];
}

export interface Skill {
  id: string;
  name: string;
  icon?: React.ComponentType<{ className?: string }>; // Optional Lucide icon
}
