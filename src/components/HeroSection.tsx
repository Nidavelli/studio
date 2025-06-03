import AnimatedText from './AnimatedText';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowDown } from 'lucide-react';
import { FadeIn } from './FadeIn';

export default function HeroSection() {
  const roles = ['Project Manager', 'Strategy Consultant', 'Digital Transformation Expert'];

  return (
    <section className="min-h-[calc(100vh-4rem-1px)] flex flex-col justify-center items-center text-center py-16 md:py-24 bg-gradient-to-br from-background to-muted/50">
      <FadeIn className="w-full">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold font-headline mb-6 text-primary">
          Hi, I&apos;m James Kuria
        </h1>
        <div className="text-2xl sm:text-3xl md:text-4xl font-headline mb-8 text-foreground h-12 md:h-16">
          I am a <AnimatedText texts={roles} className="text-accent" />
        </div>
        <p className="max-w-2xl mx-auto text-lg md:text-xl text-muted-foreground mb-10">
          Leveraging expertise in project leadership, strategic planning, and digital innovation to drive impactful business outcomes.
        </p>
        <div className="space-x-4">
          <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
            <Link href="/projects">View My Work</Link>
          </Button>
          <Button asChild variant="outline" size="lg" className="border-primary text-primary hover:bg-primary/10">
            <Link href="/contact">Get In Touch</Link>
          </Button>
        </div>
        <div className="mt-16 animate-bounce">
          <a href="#about" aria-label="Scroll to about section">
            <ArrowDown className="h-8 w-8 text-primary mx-auto" />
          </a>
        </div>
      </FadeIn>
    </section>
  );
}
