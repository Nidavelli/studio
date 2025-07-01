import type { EducationItem } from '@/types';
import { GraduationCap, Award, BookOpen, Laptop } from 'lucide-react';

export const educationData: EducationItem[] = [
  {
    id: '1',
    degree: 'Microsoft Certified Professional',
    institution: 'Microsoft',
    year: '2022',
    description: 'Official certification validating technical expertise with Microsoft products and technologies.',
    icon: Laptop,
  },
  {
    id: '2',
    degree: 'Research Certificate',
    institution: 'IPSOS',
    year: '2019',
    description: 'Certified in research methodologies and data analysis practices.',
    icon: Award,
  },
  {
    id: '3',
    degree: 'BA Development Studies',
    institution: 'Jomo Kenyatta University of Agriculture & Technology (JKUAT)',
    year: '2019',
    description: 'Bachelor of Arts degree with a focus on development studies.',
    icon: GraduationCap,
  },
];
