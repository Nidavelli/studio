import { projectsData } from '@/data/projects';
import { analyzeProjectTags } from '@/ai/flows/analyze-project-tags';
import ProjectsDisplay from '@/components/ProjectsDisplay';
import type { Project } from '@/types';
import { FadeIn } from '@/components/FadeIn';

async function getProjectsWithAITags(): Promise<Project[]> {
  // Prepare the input for the batch AI call
  const projectsToAnalyze = projectsData.map(project => ({
    id: project.id,
    achievements: project.achievements,
  }));

  try {
    // Make a single API call for all projects
    const aiResponse = await analyzeProjectTags({ projects: projectsToAnalyze });

    // Create a map of AI tags for easy lookup
    const aiTagsMap = new Map(aiResponse.projects.map(p => [p.id, p.tags]));

    // Merge the AI-generated tags back into the original project data
    const projectsWithAITags = projectsData.map(project => ({
      ...project,
      aiGeneratedTags: aiTagsMap.get(project.id) || [],
    }));

    return projectsWithAITags;
  } catch (error) {
    console.error('Failed to analyze tags for projects in batch:', error);
    // Fallback to empty array on error and still include all projects
    return projectsData.map(project => ({ ...project, aiGeneratedTags: [] }));
  }
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
