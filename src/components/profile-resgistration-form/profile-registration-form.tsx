"use client";

import { useRegistrationForm } from "./use-registration-form";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
} from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormDescription,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { 
  Tabs, 
  TabsContent, 
  TabsList, 
  TabsTrigger 
} from "@/components/ui/tabs";
import { Checkbox } from "@/components/ui/checkbox"
import { Input } from "@/components/ui/input";
import { telephoneMask } from "@/utils/mask";

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
] as const

export const ProfileRegistrationForm = () => {
  const { form, onSubmit, isSubmitting } = useRegistrationForm();

  return (
    <Card className="border border-gray-300 p-10">
      <p className="text-white text-normal pb-4 font-semibold text-center">Fast Registration 🚀</p>
      <p className="text-white text-base pb-6 font-light">Preecha com seus dados e participe dos próximos processos seletivos.</p>
      <CardContent className="flex flex-center items-center gap-4 m-auto w-full">
        <Form {...form}>
          <form onSubmit={onSubmit} className="space-y-6 w-full text-white">
            <Tabs defaultValue="step1" >
              <TabsList className="grid w-full grid-cols-3 mb-6">
                <TabsTrigger value="step1">Step 1</TabsTrigger>
                <TabsTrigger value="step2">Step 2</TabsTrigger>
                <TabsTrigger value="step3">Step 3</TabsTrigger>
              </TabsList>

              <TabsContent value="step1">
                <FormField
                  control={form.control}
                  name="fullName"
                  render={({ field }) => (
                    <FormItem className="pb-2">
                      <FormLabel>Seu nome</FormLabel>
                      <FormControl>
                        <Input placeholder="Seu nome e sobrenome" {...field} className="bg-gray-700 text-white font-semibold" />
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
                        <Input placeholder="contato@exemplo.com" {...field} className="bg-gray-700 text-white font-semibold"/>
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
                        <Input placeholder="Informe a Cidade / UF" {...field} className="bg-gray-700 text-white font-semibold"/>
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
                        <Input placeholder="Link do perfil no Linkedin" {...field} className="bg-gray-700 text-white font-semibold"/>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <TabsList className="w-full bg-transparent px-0 py-10">
                  <TabsTrigger value="step2" className="w-full bg-[--pink-500] text-white text-base hover:bg-[--blue-300] gap-2">Próximo </TabsTrigger>
                </TabsList>

              </TabsContent>

              <TabsContent value="step2">
                <FormField
                  control={form.control}
                  name="lookingFor"
                  render={({ field }) => (
                    <FormItem className="pb-2">
                      <FormLabel>O que você procura na Neeo?</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value} >
                        <FormControl>
                          <SelectTrigger className="bg-gray-700 text-white font-semibold">
                            <SelectValue placeholder="Selecione..."/>
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent className="bg-gray-700 text-white font-semibold">
                          <SelectItem value="freelancer">Somente freelancer</SelectItem>
                          <SelectItem value="efetivo">Somente efetivo</SelectItem>
                          <SelectItem value="ambos">Interesse em ambos</SelectItem>
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
                      <FormLabel>Legal, conta pra gente sua área de atuação:</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger className="bg-gray-700 text-white font-semibold">
                            <SelectValue placeholder="Selecione..." className="bg-gray-700 text-white font-semibold"/>
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="dados">Dados</SelectItem>
                          <SelectItem value="desenvolvimento">Desenvolvimento</SelectItem>
                          <SelectItem value="design">Design</SelectItem>
                          <SelectItem value="infraestrutura">Infraestrutura</SelectItem>
                          <SelectItem value="produto">Produto</SelectItem>
                          <SelectItem value="qualidade">Qualidade</SelectItem>
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
                      <FormLabel>Cite as tecnologias, frameworks ou metodologias que você domina</FormLabel>
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
                      <FormLabel>Você se encontra em qual nível profissional?</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger className="bg-gray-700 text-white font-semibold">
                            <SelectValue placeholder="Selecione..." className="bg-gray-700 text-white font-semibold"/>
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="freelancer">Aprendiz / Estágio</SelectItem>
                          <SelectItem value="efetivo">Junior</SelectItem>
                          <SelectItem value="pleno">Pleno</SelectItem>
                          <SelectItem value="sênior">Sênior</SelectItem>
                          <SelectItem value="especialista">Especialista</SelectItem>
                          <SelectItem value="gestão / liderança">Gestão / Liderança</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <TabsList className="grid w-full grid-cols-3 bg-transparent  px-0 py-6 gap-2">
                  <TabsTrigger value="step1" className="bg-[--pink-300] text-white text-base hover:bg-[--blue-200] gap-2 col-start-1 col-end-1">Anterior</TabsTrigger>
                  <TabsTrigger value="step3"className="bg-[--pink-500] text-white text-base hover:bg-[--blue-300] gap-2 col-start-3 col-end-3">Próximo</TabsTrigger>
                </TabsList>
              </TabsContent>

              <TabsContent value="step3">
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
                                  <Checkbox className="h-5 w-5 border-white data-[state=checked]:bg-[--blue-300]"
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
                                            (value) => value !== item.id
                                          )
                                        );
                                      }
                                    }}
                                  />
                                </FormControl>
                                <FormLabel className="font-normal">
                                  {item.label}
                                </FormLabel>
                              </FormItem>
                            ) 
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
                  render={({ field: { value, ...field } }) => (
                    <FormItem className="pb-2">
                      <FormLabel>Minha expectativa de valor/hora é:</FormLabel>
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

                <FormItem className="pb-2">
                <FormLabel>Quer deixar uma mensagem pra gente?</FormLabel>
                <FormControl>
                  <textarea 
                    placeholder="Deixe aqui a sua mensagem..." 
                    className=" flex min-h-[80px] w-full rounded-md px-3 py-2 shadow-md placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 bg-gray-700 text-white font-semibold"
                  />
                </FormControl>
                <FormMessage />
                </FormItem>

                <Button 
                  type="submit" 
                  className="w-full bg-[--pink-500] h-[2rem] text-white text-base hover:bg-[--blue-300] mt-6" 
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Processando..." : "Concluir"}
                </Button>
              </TabsContent>
            </Tabs>
          </form>
          
        </Form>
      </CardContent>
    </Card>
  );
};
