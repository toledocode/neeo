"use client";

import { ContactSchema } from "@/components/contact-form/schema";

import emailjs from "@emailjs/browser";

export const sendEmail = async (data: ContactSchema) => {
  const serviceId = process.env.NEXT_PUBLIC_SERVICE_ID;
  const templateId = process.env.NEXT_PUBLIC_TEMPLATE_ID;
  const userId = process.env.NEXT_PUBLIC_USER_ID;

  await emailjs.send(`${serviceId}`, `${templateId}`, data, `${userId}`);
};
