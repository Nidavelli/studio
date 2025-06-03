
import type { EducationItem } from '@/types';
import { GraduationCap, Award, BookOpen } from 'lucide-react';

export const educationData: EducationItem[] = [
  {
    id: '1',
    degree: 'Master of Business Administration (MBA)',
    institution: 'Prestigious University X',
    year: '2015',
    description: 'Specialization in Strategic Management and Innovation.',
    icon: GraduationCap,
  },
  {
    id: '2',
    degree: 'Bachelor of Science in Computer Science',
    institution: 'Tech Institute Y',
    year: '2012',
    description: 'Focused on software development and data structures.',
    icon: GraduationCap,
  },
  {
    id: '3',
    degree: 'Project Management Professional (PMP)',
    institution: 'Project Management Institute',
    year: '2019',
    description: 'Globally recognized project management certification.',
    icon: Award,
  },
  {
    id: '4',
    degree: 'Certified ScrumMaster (CSM)',
    institution: 'Scrum Alliance',
    year: '2017',
    description: 'Certification for Agile project management practices.',
    icon: BookOpen,
  },
];
