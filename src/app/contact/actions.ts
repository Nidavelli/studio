
'use server';

import { z } from 'zod';
import { Resend } from 'resend';

const recipientEmail = 'kuriaj85@gmail.com';

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
  
  const resendApiKey = process.env.RESEND_API_KEY;
  if (!resendApiKey) {
    console.error('Resend API key is not set.');
    return {
        message: 'Sorry, the email service is not configured. Please contact the site administrator.',
        success: false,
        errors: {},
    };
  }

  const resend = new Resend(resendApiKey);
  const { name, email, message } = validatedFields.data;

  try {
    const { data, error } = await resend.emails.send({
      from: 'Portfolio Contact <onboarding@resend.dev>', // This must be a verified domain in Resend. 'onboarding@resend.dev' is for testing.
      to: [recipientEmail],
      subject: `New Message from ${name} via Portfolio`,
      reply_to: email,
      html: `<p>You have received a new message from your portfolio contact form.</p>
             <p><strong>Name:</strong> ${name}</p>
             <p><strong>Email:</strong> ${email}</p>
             <p><strong>Message:</strong></p>
             <p>${message}</p>`,
    });

    if (error) {
      console.error('Resend error:', error);
      return {
        message: 'Sorry, something went wrong and I could not send your message. Please try again later.',
        success: false,
      };
    }

    return {
      message: 'Thank you for your message! James will get back to you soon.',
      success: true,
    };
  } catch (exception) {
    console.error('Email sending exception:', exception);
    return {
      message: 'An unexpected error occurred. Please try again.',
      success: false,
    };
  }
}
