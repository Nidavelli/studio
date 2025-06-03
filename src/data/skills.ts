import type { Skill } from '@/types';
import { BarChart3, Zap, Users, BrainCircuit, Milestone, Shuffle, GanttChartSquare, Presentation } from 'lucide-react';

export const skillsData: Skill[] = [
  { id: '1', name: 'Project Management', icon: GanttChartSquare },
  { id: '2', name: 'Strategic Planning', icon: BrainCircuit },
  { id: '3', name: 'Agile Methodologies', icon: Zap },
  { id: '4', name: 'Stakeholder Management', icon: Users },
  { id: '5', name: 'Risk Management', icon: Milestone },
  { id: '6', name: 'Digital Transformation', icon: Shuffle },
  { id: '7', name: 'Data Analysis', icon: BarChart3 },
  { id: '8', name: 'Business Process Improvement', icon: Presentation },
];
