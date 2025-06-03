
import { experienceData } from '@/data/experience';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Briefcase, CalendarDays } from 'lucide-react';
import { FadeIn } from './FadeIn';

export default function ExperienceSection() {
  return (
    <section id="experience" className="py-16 md:py-24 bg-background">
      <FadeIn className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold font-headline text-center mb-12 text-primary">
          My Experience
        </h2>
        <div className="relative pl-6 after:absolute after:inset-y-0 after:left-0 after:w-px after:bg-border">
          {experienceData.map((item, index) => (
            <FadeIn key={item.id} delay={`delay-${index * 100}`}>
              <div className="relative mb-10 pl-8 group">
                <div className="absolute left-[-26px] top-1.5 z-10 flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-md group-hover:scale-110 transition-transform duration-300">
                  {item.icon ? <item.icon className="h-6 w-6" /> : <Briefcase className="h-6 w-6" />}
                </div>
                <Card className="bg-card shadow-md hover:shadow-lg transition-shadow duration-300 border-l-4 border-primary">
                  <CardHeader>
                    <CardTitle className="text-xl md:text-2xl font-headline text-primary">{item.role}</CardTitle>
                    <p className="text-md text-muted-foreground">{item.company}</p>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center text-sm text-accent mb-3">
                      <CalendarDays className="mr-2 h-4 w-4" />
                      <span>{item.duration}</span>
                    </div>
                    <p className="text-foreground leading-relaxed">{item.description}</p>
                  </CardContent>
                </Card>
              </div>
            </FadeIn>
          ))}
        </div>
      </FadeIn>
    </section>
  );
}
