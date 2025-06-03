
import type { Service } from '@/types';
import { Target, Lightbulb, BarChartHorizontalBig, Users } from 'lucide-react';

export const servicesData: Service[] = [
  {
    id: '1',
    title: 'Project Management Excellence',
    description: 'Expert guidance in managing complex projects from initiation to completion, ensuring on-time and on-budget delivery.',
    icon: Target,
    details: [
      'Agile & Waterfall Methodologies',
      'Risk Assessment & Mitigation',
      'Stakeholder Communication',
      'Resource Allocation',
      'Quality Assurance',
    ],
  },
  {
    id: '2',
    title: 'Strategic Business Consulting',
    description: 'Developing robust strategies to drive growth, innovation, and competitive advantage in your industry.',
    icon: Lightbulb,
    details: [
      'Market Analysis & Research',
      'Business Model Innovation',
      'Growth Strategy Development',
      'Competitive Landscape Analysis',
      'Performance Metrics & KPIs',
    ],
  },
  {
    id: '3',
    title: 'Digital Transformation Advisory',
    description: 'Helping organizations leverage digital technologies to optimize processes, enhance customer experiences, and achieve business objectives.',
    icon: BarChartHorizontalBig,
    details: [
      'Digital Maturity Assessment',
      'Technology Roadmapping',
      'Change Management',
      'Process Automation',
      'Data-Driven Decision Making',
    ],
  },
   {
    id: '4',
    title: 'Team Leadership & Development',
    description: 'Building and mentoring high-performing teams to foster collaboration and achieve exceptional results.',
    icon: Users,
    details: [
      'Cross-functional Team Leadership',
      'Coaching & Mentorship Programs',
      'Conflict Resolution',
      'Performance Management',
      'Talent Development Strategies',
    ],
  },
];
