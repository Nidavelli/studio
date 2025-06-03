
import Image from 'next/image';
import AnimatedText from './AnimatedText';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowDown } from 'lucide-react';
import { FadeIn } from './FadeIn';

export default function HeroSection() {
  const roles = ['Project Manager', 'Strategy Consultant', 'Digital Transformation Expert'];

  return (
    <section className="min-h-[calc(100vh-4rem-1px)] flex items-center py-16 md:py-24 bg-gradient-to-br from-background to-muted/50">
      <FadeIn className="w-full container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          <div className="text-center md:text-left">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold font-headline mb-6 text-primary">
              Hi, I&apos;m James Kuria
            </h1>
            <div className="text-2xl sm:text-3xl md:text-4xl font-headline mb-8 text-foreground h-12 md:h-16">
              I am a <AnimatedText texts={roles} className="text-accent" />
            </div>
            <p className="max-w-xl mx-auto md:mx-0 text-lg md:text-xl text-muted-foreground mb-10">
              Leveraging expertise in project leadership, strategic planning, and digital innovation to drive impactful business outcomes.
            </p>
            <div className="space-y-4 sm:space-y-0 sm:space-x-4 flex flex-col sm:flex-row justify-center md:justify-start">
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                <Link href="/projects">View My Work</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-primary text-primary hover:bg-primary/10">
                <Link href="/contact">Get In Touch</Link>
              </Button>
            </div>
            <div className="mt-12 md:mt-16 text-center md:text-left">
              <a href="#about" aria-label="Scroll to about section" className="inline-block animate-bounce">
                <ArrowDown className="h-8 w-8 text-primary mx-auto md:mx-0" />
              </a>
            </div>
          </div>
          <div className="relative w-full max-w-md mx-auto md:max-w-none h-64 md:h-96 lg:h-[500px] order-first md:order-last">
            <Image
              src="https://placehold.co/800x1000.png"
              alt="James Kuria - Professional"
              layout="fill"
              objectFit="cover"
              className="rounded-lg shadow-xl border-4 border-primary/20"
              data-ai-hint="modern workspace"
              priority
            />
          </div>
        </div>
      </FadeIn>
    </section>
  );
}
