"use client";

import { useContactForm } from "./use-contact-form";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
} from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormLabel,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

import { telephoneMask } from "@/utils/mask";

export const ContactForm = () => {
  const { form, onSubmit, isSubmitting } = useContactForm();

  return (
    <Card className="border border-white bg-white px-10 py-16 max-w-[675px] shadow-2xl">

      <p className="font-bold text-3xl pb-4 text-center">Vamos <span className="text-[--blue-300]">conversar?</span></p>
      <p className="text-base font-medium text-[--gray-700] text-center pb-10">Você receberá um retorno em menos de 24 horas.</p>

      <CardContent>
        <Form {...form}>
          <form onSubmit={onSubmit} className="space-y-3">
            <FormField
              control={form.control}
              name="fullName"
              render={({ field }) => (
                <FormItem className="pb-2">
                  <FormLabel className="text-base">Nome</FormLabel>
                  <FormControl>
                    <Input placeholder="Seu nome" {...field} className="focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[--blue-200] h-[50px] border border-slate-200"/>
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
                  <FormLabel className="text-base">E-mail</FormLabel>
                  <FormControl>
                    <Input placeholder="exemplo@email.com" {...field} className="focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[--blue-200] h-[50px] border border-slate-200"/>
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
                  <FormLabel className="text-base">Telefone</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="(99) 99999-9999"
                      {...field}
                      value={telephoneMask(value)}
                      maxLength={15}
                      className="focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[--blue-200] h-[50px] border border-slate-200"
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
                  <FormLabel className="text-base">Mensagem</FormLabel>
                  <FormControl>
                  <Textarea placeholder="Deixe aqui a sua mensagem..." {...field} className=" flex min-h-[80px] w-full rounded-md px-3 py-2 shadow-md placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[--blue-200] disabled:cursor-not-allowed disabled:opacity-50 bg-card font-semibold border border-slate-200"/>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button type="submit" className="w-full text-lg bg-[--pink-500] hover:bg-[--blue-300] h-[50px]" disabled={isSubmitting}>
              {isSubmitting ? "Enviando..." : "Enviar"}
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
};
