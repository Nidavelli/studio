
import type { Experience } from '@/types';
import { Briefcase, Building, TrendingUp } from 'lucide-react';

export const experienceData: Experience[] = [
  {
    id: '1',
    role: 'Senior Project Manager',
    company: 'Tech Solutions Inc.',
    duration: '2020 - Present',
    description: 'Led cross-functional teams in the successful delivery of enterprise software solutions. Managed project lifecycles from conception to deployment, ensuring adherence to budget, scope, and timelines. Specialized in Agile methodologies and stakeholder management.',
    icon: Briefcase,
  },
  {
    id: '2',
    role: 'Strategy Consultant',
    company: 'Global Corp Advisors',
    duration: '2018 - 2020',
    description: 'Provided strategic consulting services to F500 companies on digital transformation initiatives. Analyzed market trends, identified growth opportunities, and developed actionable strategies to enhance competitive positioning and operational efficiency.',
    icon: Building,
  },
  {
    id: '3',
    role: 'Digital Transformation Lead',
    company: 'Innovate Digital',
    duration: '2016 - 2018',
    description: 'Drove digital innovation projects, focusing on improving customer experience and internal processes. Implemented new technologies and spearheaded change management efforts to foster a digital-first culture.',
    icon: TrendingUp,
  },
];
