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
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Input } from "@/components/ui/input";
import { telephoneMask } from "@/utils/mask";

export const ProfileRegistrationForm = () => {
  const { form, onSubmit, isSubmitting } = useRegistrationForm();

  return (
    <Card >
      <CardContent className="flex gap-4">
        <Form {...form}>
          <form onSubmit={onSubmit} className="space-y-6 w-full text-white">
            <FormField
              control={form.control}
              name="fullName"
              render={({ field }) => (
                <FormItem>
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
                <FormItem>
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
                <FormItem>
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
                <FormItem>
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
                <FormItem>
                  <FormLabel>Link do perfil no Linkedin</FormLabel>
                  <FormControl>
                    <Input placeholder="Link do perfil no Linkedin" {...field} className="bg-gray-700 text-white font-semibold"/>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="lookingFor"
              render={({ field }) => (
                <FormItem>
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
                <FormItem>
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
                <FormItem>
                  <FormLabel>Cite as tecnologias, frameworks ou metodologias que você domina</FormLabel>
                  <FormControl>
                  <textarea 
                    placeholder="Deixe aqui a sua mensagem..." 
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
                <FormItem>
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
            
            <FormField
              control={form.control}
              name="availability"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Atualmente...</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger className="bg-gray-700 text-white font-semibold">
                        <SelectValue placeholder="Selecione..." />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent className="bg-gray-700 text-white font-semibold">
                      <SelectItem value="freelancer">Trabalho full time, mas consigo conciliar em horário alternativo.</SelectItem>
                      <SelectItem value="efetivo">Trabalho part time.</SelectItem>
                      <SelectItem value="ambos">Não estou trabalhando, tenho disponibilidade imediata.</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="availabilityTimes"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Qual a sua disponibilidade de horários?</FormLabel>
                  <FormControl>
                    <Input placeholder="Informe aqui sua disponibilidade de horários" {...field} className="bg-gray-700 text-white font-semibold"/>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="rateValue"
              render={({ field: { value, ...field } }) => (
                <FormItem>
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

            <FormItem>
              <FormLabel>Quer deixar uma mensagem pra gente?</FormLabel>
              <FormControl>
                <textarea 
                  placeholder="Deixe aqui a sua mensagem..." 
                  className=" flex min-h-[80px] w-full rounded-md px-3 py-2 shadow-md placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 bg-gray-700 text-white font-semibold"
                />
              </FormControl>
              <FormMessage />
            </FormItem>

            <Button type="submit" className="w-full" disabled={isSubmitting}>
              {isSubmitting ? "Enviando..." : "Enviar"}
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
};
