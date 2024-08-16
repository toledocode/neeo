import { z } from "zod";

export const contactSchema = z.object({
  fullName: z
    .string({
      required_error: "O nome é obrigatório",
    })
    .min(3, {
      message: "O nome deve ter no mínimo 3 caracteres",
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
    .min(14, {
      message: "O telefone deve ter no mínimo 8 caracteres",
    }),
  message: z
    .string({
      required_error: "A mensagem é obrigatória",
    })
    .min(5, {
      message: "A mensagem deve ter no mínimo 5 caracteres",
    })
    .max(500, {
      message: "A mensagem deve ter no máximo 500 caracteres",
    }),
});

export type ContactSchema = z.infer<typeof contactSchema>;
