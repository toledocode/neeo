import { useState } from "react";
import { FieldErrors, useForm } from "react-hook-form";

import { zodResolver } from "@hookform/resolvers/zod";
import { Prisma } from "@prisma/client";
import { toast } from "sonner";

import { createAccount } from "./actions";
import { registrationSchema, RegistrationSchema } from "./schema";

export const useRegistrationForm = () => {
  const [steps, setSteps] = useState<"step1" | "step2" | "step3">("step1");

  const form = useForm<RegistrationSchema>({
    resolver: zodResolver(registrationSchema),
  });

  const onSubmit = async (data: RegistrationSchema) => {
    try {
      await createAccount(data);

      toast.success("Cadastro realizado com sucesso!");

      form.reset({
        fullName: "",
        email: "",
        phone: "",
        city: "",
        linkedin: "",
        lookingFor: "",
        professionalArea: "",
        skills: "",
        level: "",
      });

      setSteps("step1");

      return;
    } catch (error) {
      const msgError = (error as Prisma.PrismaClientKnownRequestError).message;

      if (msgError.indexOf("Unique") != -1) {
        toast.error("Já existe um cadastro com o email informado.", {
          duration: 15000,
          action: {
            label: "Fechar",
            onClick: () => toast.dismiss(),
          },
        });
      } else {
        toast.error("Ops! Um erro inesperado aconteceu.", {
          duration: 5000,
          action: {
            label: "Tentar novamente",
            onClick: () => onSubmit(data),
          },
        });
      }
    }
  };

  const onInvalid = (fields: FieldErrors<RegistrationSchema>) => {
    const keys = Object.keys(fields);
    const firstError = keys[0] as keyof RegistrationSchema;

    toast.error(fields[firstError]?.message);

    if (["fullName", "email", "phone", "city", "linkedin"].includes(firstError))
      setSteps("step1");
    if (
      ["lookingFor", "professionalArea", "skills", "level"].includes(firstError)
    )
      setSteps("step2");
  };

  const handleChangeStep = (step: "step1" | "step2" | "step3") => {
    const { error } = registrationSchema.safeParse(form.getValues());

    const paths = error?.errors.map((error) => error.path[0]) as Array<string>;

    if (step === "step2") {
      const requiresFieldsSafeErrors = [
        "fullName",
        "email",
        "phone",
        "city",
        "linkedin",
      ];
      if (requiresFieldsSafeErrors.some((field) => paths.includes(field)))
        return;
    }

    if (step === "step3") {
      const requiresFieldsSafeErrors = [
        "lookingFor",
        "professionalArea",
        "skills",
        "level",
      ];
      if (requiresFieldsSafeErrors.some((field) => paths.includes(field)))
        return;
    }

    setSteps(step);
  };

  const isSubmitting = form.formState.isSubmitting;

  return {
    form,
    onSubmit: form.handleSubmit(onSubmit, onInvalid),
    isSubmitting,
    setSteps: handleChangeStep,
    steps,
  };
};
