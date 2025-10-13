'use client';

import { useFormStatus } from 'react-dom';
import { submitContactForm, type ContactFormState } from '@/app/contact/actions';
import { useEffect, useRef, useState } from 'react';
import { useToast } from '@/hooks/use-toast';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Send, Loader2 } from 'lucide-react';

const initialState: ContactFormState = {
  message: '',
  success: false,
  errors: {},
};

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" disabled={pending} className="w-full bg-accent hover:bg-accent/90 text-accent-foreground">
      {pending ? (
        <>
          <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Sending...
        </>
      ) : (
        <>
          <Send className="mr-2 h-4 w-4" /> Send Message
        </>
      )}
    </Button>
  );
}

export default function ContactForm() {
  const [state, setState] = useState<ContactFormState>(initialState);
  const { toast } = useToast();
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = async (formData: FormData) => {
    const result = await submitContactForm(formData);
    setState(result);

    if (result.success) {
      toast({
        title: "Success!",
        description: result.message,
        variant: "default",
      });
      formRef.current?.reset();
    } else {
      toast({
        title: "Error",
        description: result.message,
        variant: "destructive",
      });
    }
  };

  return (
    <Card className="w-full max-w-lg mx-auto shadow-xl bg-card">
      <CardHeader className="text-center">
        <CardTitle className="text-3xl font-headline text-primary">Get In Touch</CardTitle>
        <CardDescription>
          Have a question or want to work together? Fill out the form below.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form ref={formRef} action={handleSubmit} className="space-y-6">
          <div>
            <Label htmlFor="name" className="text-foreground">Full Name</Label>
            <Input 
              id="name" 
              name="name" 
              type="text" 
              required 
              className="mt-1 bg-background border-border focus:ring-primary" 
              aria-describedby="name-error"
            />
            {state.errors?.name && <p id="name-error" className="text-sm text-destructive mt-1">{state.errors.name.join(', ')}</p>}
          </div>
          <div>
            <Label htmlFor="email" className="text-foreground">Email Address</Label>
            <Input 
              id="email" 
              name="email" 
              type="email" 
              required 
              className="mt-1 bg-background border-border focus:ring-primary" 
              aria-describedby="email-error"
            />
            {state.errors?.email && <p id="email-error" className="text-sm text-destructive mt-1">{state.errors.email.join(', ')}</p>}
          </div>
          <div>
            <Label htmlFor="message" className="text-foreground">Message</Label>
            <Textarea 
              id="message" 
              name="message" 
              rows={5} 
              required 
              className="mt-1 bg-background border-border focus:ring-primary" 
              aria-describedby="message-error"
            />
            {state.errors?.message && <p id="message-error" className="text-sm text-destructive mt-1">{state.errors.message.join(', ')}</p>}
          </div>
          <SubmitButton />
        </form>
      </CardContent>
    </Card>
  );
}
