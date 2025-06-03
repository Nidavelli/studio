'use server';

import { z } from 'zod';

const contactFormSchema = z.object({
  name: z.string().min(2, { message: 'Name must be at least 2 characters.' }),
  email: z.string().email({ message: 'Invalid email address.' }),
  message: z.string().min(10, { message: 'Message must be at least 10 characters long.' }),
});

export type ContactFormState = {
  message: string;
  errors?: {
    name?: string[];
    email?: string[];
    message?: string[];
  };
  success: boolean;
};

export async function submitContactForm(
  prevState: ContactFormState,
  formData: FormData
): Promise<ContactFormState> {
  const validatedFields = contactFormSchema.safeParse({
    name: formData.get('name'),
    email: formData.get('email'),
    message: formData.get('message'),
  });

  if (!validatedFields.success) {
    return {
      message: 'Validation failed. Please check the form for errors.',
      errors: validatedFields.error.flatten().fieldErrors,
      success: false,
    };
  }

  const { name, email, message } = validatedFields.data;

  // In a real application, you would integrate an email sending service here.
  // For example, using Resend, SendGrid, or Nodemailer with an SMTP server.
  // The recipient email is kuriaj85@gmail.com
  console.log('--- Contact Form Submission ---');
  console.log('Name:', name);
  console.log('Email:', email);
  console.log('Message:', message);
  console.log('Intended Recipient: kuriaj85@gmail.com');
  console.log('--- End of Submission ---');


  // Simulate email sending delay
  await new Promise(resolve => setTimeout(resolve, 1000));

  return {
    message: 'Thank you for your message! James will get back to you soon.',
    success: true,
    errors: {},
  };
}
