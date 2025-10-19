
'use server';

import { z } from 'zod';
import nodemailer from 'nodemailer';

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
  const { EMAIL_USER, EMAIL_APP_PASSWORD, RECIPIENT_EMAIL } = process.env;

  if (!EMAIL_USER || !EMAIL_APP_PASSWORD || !RECIPIENT_EMAIL) {
    console.error('Email service is not configured. Missing environment variables.');
    return {
      message: 'The email service is not configured. Please contact the site administrator.',
      success: false,
      errors: {},
    };
  }

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: EMAIL_USER,
      pass: EMAIL_APP_PASSWORD,
    },
  });

  const mailOptions = {
    from: `"${name}" <${email}>`,
    to: RECIPIENT_EMAIL,
    subject: `New Message from ${name} via Portfolio`,
    replyTo: email,
    html: `<p>You have received a new message from your portfolio contact form.</p>
           <p><strong>Name:</strong> ${name}</p>
           <p><strong>Email:</strong> ${email}</p>
           <p><strong>Message:</strong></p>
           <p>${message.replace(/\n/g, '<br>')}</p>`,
  };

  try {
    await transporter.sendMail(mailOptions);
    return {
      message: 'Thank you for your message! It has been sent successfully.',
      success: true,
    };
  } catch (exception: any) {
    console.error('Email sending exception:', exception);
    return {
      message: `Sorry, something went wrong. Could not send message. Error: ${exception.message}`,
      success: false,
    };
  }
}
