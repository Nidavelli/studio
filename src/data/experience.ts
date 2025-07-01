import type { Experience } from '@/types';
import { Briefcase, Building, TrendingUp, UserCheck, Search } from 'lucide-react';

export const experienceData: Experience[] = [
  {
    id: '1',
    role: 'Project Manager / Capture Lead / QA',
    company: 'Infogain Consulting',
    duration: 'June 2016 - Present',
    description: 'As a Project Manager, I led numerous high-impact projects for clients like USAID, ILO, and AUDA-NEPAD, managing everything from network infrastructure upgrades to enterprise system implementations. As Capture Management Lead, I drove the business development lifecycle, leading the team in opportunity identification and writing winning proposals. In Quality Assurance, I conducted rigorous testing on ERP and Case Management systems to ensure reliability and performance.',
    icon: Briefcase,
  },
  {
    id: '2',
    role: 'Lead Project Manager',
    company: 'AMREX Consulting',
    duration: 'June 2023 - June 2023',
    description: 'Oversaw the full spectrum of project execution for a research project in Nairobi County. I led the recruitment, training, and supervision of Research Assistants, ensuring adherence to data collection protocols using Kobo Collect and maintaining high standards of data quality and integrity for the Ministry of Youth.',
    icon: Search,
  },
  {
    id: '3',
    role: 'Human Capital Resource & Data Clerk',
    company: 'Independent Policing Oversight Authority (IPOA)',
    duration: 'April 2022 - June 2023',
    description: 'Coordinated end-to-end recruitment processes, managed employee data, and supported performance management. Handled HR administration, maintained records, and ensured a positive work environment. Also performed data entry and analysis in the Public Service Management Information System (MIS).',
    icon: UserCheck,
  },
];
