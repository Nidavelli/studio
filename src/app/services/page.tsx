
import { servicesData } from '@/data/services';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle } from 'lucide-react';
import { FadeIn } from '@/components/FadeIn';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function ServicesPage() {
  return (
    <FadeIn className="py-8 md:py-12">
      <section className="text-center mb-12 md:mb-16">
        <h1 className="text-4xl md:text-5xl font-bold font-headline mb-4 text-primary">Services I Offer</h1>
        <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
          Leveraging my expertise in project management, strategy, and digital transformation to help your organization achieve its goals.
        </p>
      </section>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 mb-12">
        {servicesData.map((service, index) => (
          <FadeIn key={service.id} delay={`delay-${index * 100}`}>
            <Card className="h-full flex flex-col bg-card shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader className="flex flex-row items-start gap-4">
                {service.icon && (
                  <div className="p-3 bg-accent/10 rounded-lg text-accent mt-1">
                    <service.icon className="h-8 w-8" />
                  </div>
                )}
                <div className="flex-1">
                  <CardTitle className="text-xl md:text-2xl font-headline text-primary">{service.title}</CardTitle>
                  <CardDescription className="text-foreground mt-1">{service.description}</CardDescription>
                </div>
              </CardHeader>
              {service.details && service.details.length > 0 && (
                <CardContent className="flex-grow">
                  <ul className="space-y-2 mt-2">
                    {service.details.map((detail, i) => (
                      <li key={i} className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-foreground">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              )}
            </Card>
          </FadeIn>
        ))}
      </div>

      <FadeIn className="text-center py-12 md:py-16 bg-muted rounded-lg shadow-inner mt-12">
        <h2 className="text-3xl md:text-4xl font-bold font-headline mb-6 text-primary">
          Ready to discuss your needs?
        </h2>
        <p className="max-w-xl mx-auto text-lg text-foreground mb-8">
          Let&apos;s explore how my services can provide value to your projects and strategic objectives.
        </p>
        <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
          <Link href="/contact">Get in Touch</Link>
        </Button>
      </FadeIn>
    </FadeIn>
  );
}
