"use server";

import { Resend } from 'resend';

const apiKey = process.env.RESEND_API_KEY;
if (!apiKey) {
  console.warn("RESEND_API_KEY is missing from environment variables.");
}
const resend = new Resend(apiKey || "dummy_key");

export async function sendEmail(formData: FormData) {
  const name = formData.get("name") as string;
  const email = formData.get("email") as string;
  const message = formData.get("message") as string;

  try {
    const { error } = await resend.emails.send({
      from: 'Portfolio Contact <onboarding@resend.dev>',
      to: ['narayon231206@gmail.com'], 
      subject: `New Message from ${name} via Portfolio`,
      replyTo: email,
      text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
    });

    if (error) {
      console.error("Resend Error:", error);
      return { success: false, message: "Something went wrong. Please try again later." };
    }

    return { success: true, message: "Success! Your message has been sent to my inbox." };
  } catch (err) {
    console.error("Submission Error:", err);
    return { success: false, message: "An unexpected error occurred." };
  }
}
