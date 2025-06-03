import Image from 'next/image';
import type { Project } from '@/types';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { CalendarDays, Briefcase, Target, Tag } from 'lucide-react';
import { FadeIn } from './FadeIn';

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const allTags = [...(project.tags || []), ...(project.aiGeneratedTags || [])];
  const uniqueTags = Array.from(new Set(allTags));

  return (
    <FadeIn>
      <Card className="h-full flex flex-col overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 bg-card">
        <div className="relative w-full h-48 md:h-56">
          <Image
            src={project.image}
            alt={project.title}
            layout="fill"
            objectFit="cover"
            className="transition-transform duration-300 group-hover:scale-105"
            data-ai-hint={project.dataAiHint as string || "project image"}
          />
        </div>
        <CardHeader className="pb-3">
          <CardTitle className="text-2xl font-headline text-primary">{project.title}</CardTitle>
          <CardDescription className="text-muted-foreground flex items-center">
            <Briefcase className="mr-2 h-4 w-4" /> {project.organization}
          </CardDescription>
        </CardHeader>
        <CardContent className="flex-grow space-y-3">
          <div className="flex items-center text-sm text-foreground">
            <CalendarDays className="mr-2 h-4 w-4 text-accent" />
            <span>{project.duration}</span>
          </div>
          <div className="flex items-center text-sm text-foreground">
            <Target className="mr-2 h-4 w-4 text-accent" />
            <span>Role: {project.role}</span>
          </div>
          <div className="prose prose-sm text-foreground max-w-none">
            <h4 className="font-semibold font-headline text-md mt-2 mb-1">Achievements:</h4>
            {project.achievements.startsWith('- ') ? (
              <ul className="list-disc pl-5 space-y-1">
                {project.achievements.split('\n').map((item, index) => (
                  item.trim() && <li key={index}>{item.replace(/^- /, '')}</li>
                ))}
              </ul>
            ) : (
              <p>{project.achievements}</p>
            )}
          </div>
        </CardContent>
        <CardFooter>
          <div className="flex flex-wrap gap-2">
            {uniqueTags.map((tag) => (
              <Badge key={tag} variant="secondary" className="bg-accent/10 text-accent border-accent/30 hover:bg-accent/20">
                <Tag className="mr-1 h-3 w-3" />{tag}
              </Badge>
            ))}
          </div>
        </CardFooter>
      </Card>
    </FadeIn>
  );
}
