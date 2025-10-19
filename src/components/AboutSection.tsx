
import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { skillsData } from '@/data/skills';
import { FadeIn } from './FadeIn';
import { Button } from './ui/button';
import Link from 'next/link';
import { Download, Linkedin } from 'lucide-react';

export default function AboutSection() {
  return (
    <section id="about" className="py-16 md:py-24 bg-background">
      <FadeIn className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold font-headline text-center mb-12 text-primary">
          About Me
        </h2>
        <div className="grid md:grid-cols-3 gap-8 items-start">
          <div className="md:col-span-1 flex flex-col items-center">
            <div className="relative group">
              <div className="animated-gradient-border rounded-full p-1 transition-all">
                  <Image
                  src="https://placehold.co/400x400.png"
                  alt="James Kuria"
                  width={300}
                  height={300}
                  className="rounded-full shadow-lg"
                  data-ai-hint="professional portrait"
                />
              </div>
            </div>
            <div className="w-full max-w-xs mt-6 space-y-2">
              <Button asChild variant="outline" className="border-primary text-primary hover:bg-primary/10 w-full">
                  {/* This link is a placeholder. Replace # with the actual path to the resume PDF. */}
                  <a href="#" download="James_Kuria_Resume.pdf"> 
                    <Download className="mr-2 h-5 w-5" /> Download Resume
                  </a>
                </Button>
                <Button asChild variant="outline" className="border-primary text-primary hover:bg-primary/10 w-full">
                  <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
                    <Linkedin className="mr-2 h-5 w-5" /> View LinkedIn Profile
                  </a>
                </Button>
            </div>
          </div>
          <div className="md:col-span-2">
            <p className="text-lg text-foreground mb-6">
              Hello! I&apos;m James Kuria, a results-oriented professional with a passion for driving strategic initiatives and fostering innovation. With a strong background in project management and digital transformation, I excel at leading cross-functional teams to deliver complex projects on time and within budget.
            </p>
            <p className="text-lg text-foreground mb-8">
              My experience spans various industries, allowing me to bring a versatile approach to problem-solving and a deep understanding of business dynamics. I am committed to continuous learning and leveraging technology to achieve sustainable growth and operational excellence.
            </p>
            <Card className="bg-card shadow-md">
              <CardHeader>
                <CardTitle className="text-xl font-headline text-primary">Core Skills</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-3">
                  {skillsData.map((skill) => (
                    <Badge key={skill.id} variant="secondary" className="px-3 py-1 text-sm bg-accent/10 text-accent border-accent/30 hover:bg-accent/20">
                      {skill.icon && <skill.icon className="mr-2 h-4 w-4" />}
                      {skill.name}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </FadeIn>
    </section>
  );
}
