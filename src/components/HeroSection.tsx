
import AnimatedText from './AnimatedText';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowDown, Download, MessageCircle } from 'lucide-react'; 
import { FadeIn } from './FadeIn';

export default function HeroSection() {
  const roles = ['Project Manager', 'Strategy Consultant', 'Digital Transformation Expert'];

  return (
    <section className="min-h-[calc(100vh-4rem-1px)] flex items-center py-16 md:py-24 bg-gradient-to-br from-background to-muted/50">
      <FadeIn className="w-full container mx-auto px-4">
        <div className="flex justify-center">
          <div className="text-center max-w-2xl">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold font-headline mb-6 text-primary">
              Hi, I&apos;m James Kuria
            </h1>
            <div className="text-2xl sm:text-3xl md:text-4xl font-headline mb-8 text-foreground min-h-16 sm:min-h-20 md:min-h-20">
              I am a <AnimatedText texts={roles} className="text-accent" />
            </div>
            <p className="max-w-xl mx-auto text-lg md:text-xl text-muted-foreground mb-10">
              Leveraging expertise in project leadership, strategic planning, and digital innovation to drive impactful business outcomes.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground w-full sm:w-auto">
                <Link href="/projects">View My Work</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-primary text-primary hover:bg-primary/10 w-full sm:w-auto">
                {/* This link is a placeholder. Replace # with the actual path to the resume PDF. */}
                <a href="#" download="James_Kuria_Resume.pdf"> 
                  <Download className="mr-2 h-5 w-5" /> Download Resume
                </a>
              </Button>
            </div>
             <div className="mt-4 flex justify-center">
                <Button asChild variant="link" className="text-accent hover:text-accent/80 px-0">
                    <Link href="/contact">
                        <MessageCircle className="mr-2 h-5 w-5" /> Schedule a Consultation
                    </Link>
                </Button>
            </div>

            <div className="mt-12 md:mt-16 text-center">
              <a href="#about" aria-label="Scroll to about section" className="inline-block animate-bounce">
                <ArrowDown className="h-8 w-8 text-primary mx-auto" />
              </a>
            </div>
          </div>
        </div>
      </FadeIn>
    </section>
  );
}
