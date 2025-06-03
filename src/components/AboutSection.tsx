import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { skillsData } from '@/data/skills';
import { FadeIn } from './FadeIn';

export default function AboutSection() {
  return (
    <section id="about" className="py-16 md:py-24 bg-background">
      <FadeIn className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold font-headline text-center mb-12 text-primary">
          About Me
        </h2>
        <div className="grid md:grid-cols-3 gap-8 items-center">
          <div className="md:col-span-1 flex justify-center">
            <Image
              src="https://placehold.co/400x400.png"
              alt="James Kuria"
              width={300}
              height={300}
              className="rounded-full shadow-lg border-4 border-primary"
              data-ai-hint="professional portrait"
            />
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
