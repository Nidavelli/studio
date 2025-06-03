
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import ExperienceSection from '@/components/ExperienceSection';
import EducationCertificationsSection from '@/components/EducationCertificationsSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import { FadeIn } from '@/components/FadeIn';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="space-y-16 md:space-y-24">
      <HeroSection />
      <AboutSection />
      <ExperienceSection />
      <EducationCertificationsSection />
      <TestimonialsSection />
      
      <FadeIn className="text-center py-12 md:py-16 bg-muted rounded-lg shadow-inner">
        <h2 className="text-3xl md:text-4xl font-bold font-headline mb-6 text-primary">
          Ready to collaborate?
        </h2>
        <p className="max-w-xl mx-auto text-lg text-foreground mb-8">
          Let&apos;s discuss how my skills and experience can help your organization achieve its goals.
        </p>
        <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
          <Link href="/contact">Contact Me</Link>
        </Button>
      </FadeIn>
    </div>
  );
}
