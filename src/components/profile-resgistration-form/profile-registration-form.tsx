"use client";

import { Fragment } from "react";

import { ProgressBar } from "@/components/profile-resgistration-form/progress-bar";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Tabs } from "@/components/ui/tabs";

import { telephoneMask } from "@/utils/mask";

import { useRegistrationForm } from "./use-registration-form";

const items = [
  {
    id: "manha",
    label: "Manhã",
  },
  {
    id: "tarde",
    label: "Tarde",
  },
  {
    id: "noite",
    label: "Noite",
  },
] as const;

export const ProfileRegistrationForm = () => {
  const { form, onSubmit, isSubmitting, steps, setSteps } =
    useRegistrationForm();

  return (
    <Card className="border border-gray-300 p-10">
      <p className="text-white text-normal pb-4 font-semibold text-center">
        Fast Registration 🚀
      </p>
      <p className="text-white text-base pb-6 font-light">
        Preecha com seus dados e participe dos próximos processos seletivos.
      </p>
      <CardContent className="flex flex-col flex-center items-center gap-4 m-auto w-full">
        <ProgressBar step={steps} />

        <Form {...form}>
          <form onSubmit={onSubmit} className="space-y-6 w-full text-white">
            <Tabs value={steps}>
              {steps === "step1" && (
                <Fragment>
                  <FormField
                    control={form.control}
                    name="fullName"
                    render={({ field }) => (
                      <FormItem className="pb-2">
                        <FormLabel>Seu nome</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Seu nome e sobrenome"
                            {...field}
                            className="bg-gray-700 text-white font-semibold"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem className="pb-2">
                        <FormLabel>Seu melhor e-mail</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="contato@exemplo.com"
                            {...field}
                            className="bg-gray-700 text-white font-semibold"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="phone"
                    render={({ field: { value, ...field } }) => (
                      <FormItem className="pb-2">
                        <FormLabel>Seu telefone</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="(00) 00000-0000"
                            {...field}
                            value={telephoneMask(value)}
                            maxLength={15}
                            className="bg-gray-700 text-white font-semibold"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="city"
                    render={({ field }) => (
                      <FormItem className="pb-2">
                        <FormLabel>Qual a sua cidade e estado?</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Informe a Cidade / UF"
                            {...field}
                            className="bg-gray-700 text-white font-semibold"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="linkedin"
                    render={({ field }) => (
                      <FormItem className="pb-2">
                        <FormLabel>Link do perfil no Linkedin</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Link do perfil no Linkedin"
                            {...field}
                            className="bg-gray-700 text-white font-semibold"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <Button 
                    className="w-full text-white" 
                    onClick={() => setSteps("step2")}
                  >
                    Próximo
                  </Button>
                </Fragment>
              )}

              {steps === "step2" && (
                <Fragment>
                  <FormField
                    control={form.control}
                    name="lookingFor"
                    render={({ field }) => (
                      <FormItem className="pb-2">
                        <FormLabel>O que você procura na Neeo?</FormLabel>
                        <Select
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                        >
                          <FormControl>
                            <SelectTrigger className="bg-gray-700 text-white font-semibold">
                              <SelectValue placeholder="Selecione..." />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent className="bg-gray-700 text-white font-semibold">
                            <SelectItem value="freelancer">
                              Somente freelancer
                            </SelectItem>
                            <SelectItem value="efetivo">
                              Somente efetivo
                            </SelectItem>
                            <SelectItem value="ambos">
                              Interesse em ambos
                            </SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="professionalArea"
                    render={({ field }) => (
                      <FormItem className="pb-2">
                        <FormLabel>
                          Legal, conta pra gente sua área de atuação:
                        </FormLabel>
                        <Select
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                        >
                          <FormControl>
                            <SelectTrigger className="bg-gray-700 text-white font-semibold">
                              <SelectValue
                                placeholder="Selecione..."
                                className="bg-gray-700 text-white font-semibold"
                              />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="dados">
                              Dados
                            </SelectItem>
                            <SelectItem value="desenvolvimento">
                              Desenvolvimento
                            </SelectItem>
                            <SelectItem value="design">
                              Design
                            </SelectItem>
                            <SelectItem value="infraestrutura">
                              Infraestrutura
                            </SelectItem>
                            <SelectItem value="produto">
                              Produto
                            </SelectItem>
                            <SelectItem value="qualidade">
                              Qualidade
                            </SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="skills"
                    render={({ field }) => (
                      <FormItem className="pb-2">
                        <FormLabel>
                          Cite as tecnologias, frameworks ou metodologias que
                          você domina
                        </FormLabel>
                        <FormControl>
                          <textarea
                            placeholder="Descreva aqui brevemente..."
                            {...field}
                            className=" flex min-h-[80px] w-full rounded-md px-3 py-2 shadow-md placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 bg-gray-700 text-white font-semibold"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="level"
                    render={({ field }) => (
                      <FormItem className="pb-2">
                        <FormLabel>
                          Você se encontra em qual nível profissional?
                        </FormLabel>
                        <Select
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                        >
                          <FormControl>
                            <SelectTrigger className="bg-gray-700 text-white font-semibold">
                              <SelectValue
                                placeholder="Selecione..."
                                className="bg-gray-700 text-white font-semibold"
                              />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="freelancer">
                              Aprendiz / Estágio
                            </SelectItem>
                            <SelectItem value="efetivo">
                              Junior
                            </SelectItem>
                            <SelectItem value="pleno">
                              Pleno
                            </SelectItem>
                            <SelectItem value="sênior">
                              Sênior
                            </SelectItem>
                            <SelectItem value="especialista">
                              Especialista
                            </SelectItem>
                            <SelectItem value="gestão / liderança">
                              Gestão / Liderança
                            </SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <div className="grid grid-cols-2 gap-3 dark">
                    <Button
                      variant="secondary"
                      className="w-full text-white"
                      onClick={() => setSteps("step1")}
                    >
                      Voltar
                    </Button>
                    <Button
                      className="w-full text-white"
                      onClick={() => setSteps("step3")}
                    >
                      Próximo
                    </Button>
                  </div>
                </Fragment>
              )}

              {steps === "step3" && (
                <Fragment>
                  <FormField
                    control={form.control}
                    name="items"
                    render={() => (
                      <FormItem className="pb-2">
                        <FormLabel>Qual a sua disponibilidade?</FormLabel>

                        {items.map((item) => (
                          <FormField
                            key={item.id}
                            control={form.control}
                            name="items"
                            render={({ field }) => {
                              return (
                                <FormItem
                                  key={item.id}
                                  className="flex flex-row items-center space-x-2 space-y-0 pb-2"
                                >
                                  <FormControl>
                                    <Checkbox
                                      className="h-5 w-5 border-white data-[state=checked]:bg-[--blue-300]"
                                      checked={field.value?.includes(item.id)}
                                      onCheckedChange={(checked) => {
                                        const updatedValue = field.value || []; // Ensure field.value is an array
                                        if (checked) {
                                          field.onChange([
                                            ...updatedValue,
                                            item.id,
                                          ]);
                                        } else {
                                          field.onChange(
                                            updatedValue.filter(
                                              (value) => value !== item.id,
                                            ),
                                          );
                                        }
                                      }}
                                    />
                                  </FormControl>
                                  <FormLabel className="font-normal">
                                    {item.label}
                                  </FormLabel>
                                </FormItem>
                              );
                            }}
                          />
                        ))}
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="rateValue"
                    render={({ field }) => (
                      <FormItem className="pb-2">
                        <FormLabel>
                          Minha expectativa de valor/hora é:
                        </FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Informe aqui a sua expectativa para valor/hora"
                            {...field}
                            className="bg-gray-700 text-white font-semibold"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem className="pb-2">
                        <FormLabel>
                          Quer deixar uma mensagem pra gente (opcional)?
                        </FormLabel>
                        <FormControl>
                          <textarea
                            placeholder="Escreva aqui a sua mensagem..."
                            {...field}
                            className=" flex min-h-[80px] w-full rounded-md px-3 py-2 shadow-md placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 bg-gray-700 text-white font-semibold"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <div className="grid grid-cols-2 gap-3 dark text-white">
                    <Button
                      variant="secondary"
                      
                      onClick={() => setSteps("step2")}
                    >
                      Voltar
                    </Button>
                    
                    <Button 
                      type="submit" 
                      disabled={isSubmitting}
                      className="w-full  text-white"
                    >
                      {isSubmitting ? "Processando..." : "Concluir"}
                    </Button>
                  </div>
                </Fragment>
              )}
            </Tabs>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
};
