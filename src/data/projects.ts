import type { Project } from '@/types';

export const projectsData: Project[] = [
  {
    id: '1',
    title: 'Enterprise CRM Implementation',
    organization: 'Tech Solutions Inc.',
    role: 'Project Manager',
    duration: 'Jan 2022 - Dec 2022',
    achievements: `- Led a team of 15 to implement a new CRM system across 5 departments.
- Completed project 2 weeks ahead of schedule and 10% under budget.
- Increased sales team productivity by 25% post-implementation.`,
    image: 'https://placehold.co/600x400.png',
    dataAiHint: 'technology office',
    tags: ['CRM', 'Project Management', 'SaaS'],
  },
  {
    id: '2',
    title: 'Digital Transformation Strategy',
    organization: 'Global Corp',
    role: 'Strategy Consultant',
    duration: 'Mar 2021 - Oct 2021',
    achievements: `- Developed a 5-year digital transformation roadmap for a Fortune 500 company.
- Identified new market opportunities leveraging emerging technologies.
- Proposed initiatives projected to generate $5M in new revenue.`,
    image: 'https://placehold.co/600x400.png',
    dataAiHint: 'business strategy',
    tags: ['Strategy', 'Digital Transformation', 'Consulting'],
  },
  {
    id: '3',
    title: 'Mobile Banking App Launch',
    organization: 'FinBank',
    role: 'Product Owner',
    duration: 'Jun 2020 - Feb 2021',
    achievements: `- Oversaw the development and launch of a new mobile banking application.
- Achieved 100,000+ downloads within the first 3 months.
- Improved customer satisfaction scores for digital channels by 15%.`,
    image: 'https://placehold.co/600x400.png',
    dataAiHint: 'mobile finance',
    tags: ['Fintech', 'Mobile App', 'Product Management', 'Agile'],
  },
  {
    id: '4',
    title: 'Supply Chain Optimization',
    organization: 'Logistics Pro',
    role: 'Operations Manager',
    duration: 'Sep 2019 - May 2020',
    achievements: `- Implemented a new warehouse management system (WMS).
- Reduced operational costs by 12% through process improvements.
- Increased on-time delivery rate from 85% to 98%.`,
    image: 'https://placehold.co/600x400.png',
    dataAiHint: 'logistics warehouse',
    tags: ['Supply Chain', 'Logistics', 'WMS', 'Process Improvement'],
  },
];
