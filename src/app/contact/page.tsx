import ContactForm from '@/components/ContactForm';
import { FadeIn } from '@/components/FadeIn';
import { Mail, Phone, MapPin } from 'lucide-react';

export default function ContactPage() {
  return (
    <FadeIn className="py-8 md:py-12">
      <div className="grid md:grid-cols-2 gap-12 items-start">
        <div className="space-y-8">
          <h1 className="text-4xl md:text-5xl font-bold font-headline text-primary">
            Let&apos;s Connect
          </h1>
          <p className="text-lg text-foreground">
            I&apos;m always open to discussing new projects, creative ideas, or opportunities to be part of something impactful. Feel free to reach out using the form, or connect with me through other channels.
          </p>
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <Mail className="h-6 w-6 text-accent" />
              <a href="mailto:kuriaj85@gmail.com" className="text-foreground hover:text-primary transition-colors">
                kuriaj85@gmail.com
              </a>
            </div>
            <div className="flex items-center gap-3">
              <Phone className="h-6 w-6 text-accent" />
              <span className="text-foreground">(123) 456-7890 (Placeholder)</span>
            </div>
            <div className="flex items-center gap-3">
              <MapPin className="h-6 w-6 text-accent" />
              <span className="text-foreground">Nairobi, Kenya (Example Location)</span>
            </div>
          </div>
        </div>
        <div>
          <ContactForm />
        </div>
      </div>
    </FadeIn>
  );
}
