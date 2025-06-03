
import Image from 'next/image';
import { testimonialsData } from '@/data/testimonials';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Star } from 'lucide-react';
import { FadeIn } from './FadeIn';

export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-16 md:py-24 bg-muted/50">
      <FadeIn className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold font-headline text-center mb-12 text-primary">
          What Others Say
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonialsData.map((testimonial) => (
            <FadeIn key={testimonial.id} delay={`delay-${testimonial.id}00`}>
              <Card className="h-full flex flex-col bg-card shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardHeader className="flex flex-row items-center gap-4 pb-4">
                  {testimonial.image && (
                    <Avatar className="h-16 w-16 border-2 border-primary">
                      <AvatarImage src={testimonial.image} alt={testimonial.name} data-ai-hint={testimonial.dataAiHint || "person"} />
                      <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                    </Avatar>
                  )}
                  <div>
                    <h3 className="font-semibold font-headline text-lg text-foreground">{testimonial.name}</h3>
                    <p className="text-sm text-muted-foreground">{testimonial.title}{testimonial.company && `, ${testimonial.company}`}</p>
                  </div>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p className="text-foreground leading-relaxed italic">
                    &ldquo;{testimonial.quote}&rdquo;
                  </p>
                </CardContent>
                <CardFooter className="pt-4">
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-current" />
                    ))}
                  </div>
                </CardFooter>
              </Card>
            </FadeIn>
          ))}
        </div>
      </FadeIn>
    </section>
  );
}
