"use server";

import { PrismaClient } from "@prisma/client";

import { RegistrationSchema } from "./schema";

const prisma = new PrismaClient();

export async function createAccount(data: RegistrationSchema) {
  const fullName = data.fullName as string;
  const email = data.email as string;
  const phone = data.phone as string;
  const city = data.city as string;
  const linkedin = data.linkedin as string;
  const lookingFor = data.lookingFor as string;
  const professionalArea = data.professionalArea as string;
  const skills = data.skills as string;
  const level = data.level as string;
  const items = data.items as string[];
  const rateValue = data.rateValue as string;
  const message = data.message as string;

  await prisma.user.create({
    data: {
      fullName,
      email,
      phone,
      city,
      linkedin,
      lookingFor,
      professionalArea,
      skills,
      level,
      items,
      rateValue,
      message,
    },
  });
}
