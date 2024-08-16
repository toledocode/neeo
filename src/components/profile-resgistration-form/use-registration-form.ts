import { useForm } from "react-hook-form";

import {
  registrationSchema,
  RegistrationSchema,
} from "./schema";

import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";

export const useRegistrationForm = () => {
  const form = useForm<RegistrationSchema>({
    resolver: zodResolver(registrationSchema),
  });

  const onSubmit = async (data: RegistrationSchema) => {
    try {
      // if (Math.random() > 0.5) throw new Error("Erro ao enviar mensagem");
      // await new Promise((resolve) => setTimeout(resolve, 2000));
      // await sendEmail(data);
      toast.success("Mensagem enviada com sucesso!");
      
      return;
    } catch {
      toast.error("Erro ao enviar mensagem", {
        action: {
          label: "Tentar novamente",
          onClick: () => onSubmit(data),
        },
      });
    }
  };

  const isSubmitting = form.formState.isSubmitting;

  return {
    form,
    onSubmit: form.handleSubmit(onSubmit),
    isSubmitting,
  };
};
