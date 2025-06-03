
import { educationData } from '@/data/education';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { GraduationCap, Award, CalendarDays } from 'lucide-react';
import { FadeIn } from './FadeIn';

export default function EducationCertificationsSection() {
  return (
    <section id="education" className="py-16 md:py-24 bg-muted/50">
      <FadeIn className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold font-headline text-center mb-12 text-primary">
          Education & Certifications
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {educationData.map((item, index) => (
            <FadeIn key={item.id} delay={`delay-${index * 100}`}>
              <Card className="h-full bg-card shadow-md hover:shadow-lg transition-shadow duration-300">
                <CardHeader className="flex flex-row items-center gap-4">
                  <div className="p-3 bg-primary/10 rounded-full text-primary">
                    {item.icon ? <item.icon className="h-8 w-8" /> : <GraduationCap className="h-8 w-8" />}
                  </div>
                  <div>
                    <CardTitle className="text-lg md:text-xl font-headline text-primary">{item.degree}</CardTitle>
                    <p className="text-sm text-muted-foreground">{item.institution}</p>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center text-sm text-accent mb-2">
                    <CalendarDays className="mr-2 h-4 w-4" />
                    <span>{item.year}</span>
                  </div>
                  {item.description && (
                    <p className="text-foreground text-sm leading-relaxed">{item.description}</p>
                  )}
                </CardContent>
              </Card>
            </FadeIn>
          ))}
        </div>
      </FadeIn>
    </section>
  );
}
