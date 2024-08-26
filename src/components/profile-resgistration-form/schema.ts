import { z } from "zod";

export const registrationSchema = z.object({
  fullName: z
    .string({
      required_error: "O nome é obrigatório",
    })
    .min(2, {
      message: "O nome deve ter no mínimo 2 caracteres",
    })
    .max(255, {
      message: "O nome deve ter no máximo 255 caracteres",
    }),
  email: z
    .string({
      required_error: "O e-mail é obrigatório",
    })
    .email({
      message: "O e-mail é inválido",
    }),
  phone: z
    .string({
      required_error: "O telefone é obrigatório",
    })
    .min(10, {
      message: "O telefone deve ter no mínimo 11 caracteres",
    }),
  city: z
    .string({
      required_error: "A cidade é obrigatório",
    })
    .min(3, {
      message: "A cidade deve ter no mínimo 3 caracteres",
    })
    .max(255, {
      message: "A cidade deve ter no máximo 255 caracteres",
    }),
  linkedin: z
    .string({
      required_error: "O perfil do linkedIn é obrigatório",
    })
    .min(12, {
      message: "O link ter no mínimo 12 caracteres",
    })
    .max(255, {
      message: "O nome deve ter no máximo 255 caracteres",
    }),
  lookingFor: z
    .string({
      required_error: "Este campo é obrigatório",
    }),
  professionalArea: z
    .string({
      required_error: "Este campo é obrigatório",
    }),
  skills: z
    .string({
      required_error: "Este campo é obrigatório",
    })
    .min(2, {
      message: "A mensagem deve ter no mínimo 2 caracteres",
    })
    .max(500, {
      message: "Ops! Texto muito longo, tente algo mais objetivo (no máximo 500 caracteres).",
    }),
  level: z
  .string({
    required_error: "Este campo é obrigatório",
  }),
  items: z
  .array(z.string())
  .refine((value) => value.some((item) => item), {
    message: "Você precisa selecionar pelo menos 1 item.",
  }),
  rateValue: z
  .string({
    required_error: "Este campo é obrigatório",
  })
  .min(2, {
    message: "O valor hora deve ter no mínimo 2 caracteres",
  }),
  message: z
  .string()
  .min(4, "Please enter a valid value")
  .optional()
  .or(z.literal('')),
});

export type RegistrationSchema = z.infer<typeof registrationSchema>;
