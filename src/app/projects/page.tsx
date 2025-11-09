import { projectsData } from '@/data/projects';
import { analyzeProjectTags } from '@/ai/flows/analyze-project-tags';
import ProjectsDisplay from '@/components/ProjectsDisplay';
import type { Project } from '@/types';
import { FadeIn } from '@/components/FadeIn';

async function getProjectsWithAITags(): Promise<Project[]> {
    const projectsWithAITags = [...projectsData];
  
    for (const project of projectsWithAITags) {
      try {
        const input = {
          projects: [{ id: project.id, achievements: project.achievements }]
        };
        const aiResponse = await analyzeProjectTags(input);
        
        if (aiResponse.projects.length > 0 && aiResponse.projects[0]) {
          project.aiGeneratedTags = aiResponse.projects[0].tags;
        } else {
          project.aiGeneratedTags = [];
        }
      } catch (error) {
        console.error(`Failed to analyze tags for project ${project.id}:`, error);
        project.aiGeneratedTags = []; // Fallback to empty array on error
      }
    }
  
    return projectsWithAITags;
  }

export default async function ProjectsPage() {
  const projects = await getProjectsWithAITags();

  return (
    <FadeIn className="space-y-8">
      <section className="text-center py-8 md:py-12">
        <h1 className="text-4xl md:text-5xl font-bold font-headline mb-4 text-primary">My Projects</h1>
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
          A selection of projects showcasing my skills in project management, strategy, and digital transformation.
        </p>
      </section>
      <ProjectsDisplay projects={projects} />
    </FadeIn>
  );
}

export const revalidate = 3600; // Revalidate projects page every hour to potentially update AI tags
