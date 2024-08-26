import { useForm } from "react-hook-form";
import { createAccount } from "./actions";
import {
  registrationSchema,
  RegistrationSchema,
} from "./schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import { Prisma } from '@prisma/client';

export const useRegistrationForm = () => {

  const {reset, formState: { errors }} = useForm();

  const form = useForm<RegistrationSchema>({ 
      resolver: zodResolver(registrationSchema),
    });

    // const validateData = (data: RegistrationSchema) => {

    //   const parsedData = registrationSchema.safeParse(data);
    
    //   if (parsedData.success) {
    //     toast.success ("deu bom!");
    //   } else{
    //       toast.error("Verifique os campos!");
    //     }
      
    //   return;
    // }
    
    const onSubmit = async (data: RegistrationSchema) => {
    
      try {
      
        await createAccount(data);
        
        toast.success("Cadastro realizado com sucesso!");

        reset(form);
  
        return;
  
     } catch (error) {
          const msgError = (error as Prisma.PrismaClientKnownRequestError).message;
          
          if (msgError.indexOf("Unique") != -1){
            toast.error(
              "Já existe um cadastro com o email informado.", {
                duration: 15000,
                action: {
                  label: "Fechar",
                  onClick: () => toast.dismiss()
                }
              },
              
            )
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
  }

  const isSubmitting = form.formState.isSubmitting;

  return {
    // validateData,
    form,
    onSubmit: form.handleSubmit(onSubmit),
    isSubmitting,
  };
};
