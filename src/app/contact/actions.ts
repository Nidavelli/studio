
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

  if (!resendApiKey || resendApiKey === 'YOUR_API_KEY_HERE') {
    console.error('Resend API key is not set or is a placeholder.');
    return {
        message: 'The email service is not configured. Please contact the site administrator.',
        success: false,
        errors: {},
    };
  }

  const resend = new Resend(resendApiKey);
  const { name, email, message } = validatedFields.data;

  try {
    const { data, error } = await resend.emails.send({
      from: 'Portfolio Contact <onboarding@resend.dev>', // This must be a verified domain in Resend. 'onboarding@resend.dev' is for testing.
      to: ['onboarding@resend.dev'], // For testing, send to the verified onboarding@resend.dev address.
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
        message: `Sorry, something went wrong. Could not send message. Resend Error: ${error.message}`,
        success: false,
      };
    }

    return {
      message: 'Thank you for your message! It has been sent successfully.',
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
