"use client";

import Image from "next/image";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import { CircleCheckBig } from "lucide-react";

import styles from "./Services.module.css";

export function Services() {
  return (
    <section id="Serviços" className={styles.services}>
      <div className={styles.container}>
        <div className="flex justify-center items-center flex-col text-[--gray-900] pb-20 w-full">
          <div className="pb-20 animate-fade-left animate-once animate-delay-300 animate-ease-in-out animate-normal">
            <p className="text-xl font-medium text-[--pink-500] text-center pb-4">
              Soluções personalizadas
            </p>
            <h1 className="font-bold text-5xl text-center">
              Conheça nossos <span className="text-[--blue-300]">serviços</span>
            </h1>
          </div>

          <div className="flex flex-row w-full h-[450px] rounded-3xl bg-card shadow-3xl mb-40 animate-fade-right animate-once animate-delay-300 animate-ease-in-out animate-normal">
            <div className="rounded-xl bg-[--gray-300] m-10 w-2/5 flex justify-center items-center border border-[--purple-100]">
              <Image
                src="/product.png"
                alt=""
                width="1000"
                height="1000"
                className="p-2 -ml-10 -mb-4"
              />
            </div>

            <div className="flex items-center flex-col w-2/4 m-10">
              <p className="font-bold text-3xl pb-4">
                Digital{" "}
                <span className="text-[--blue-300]">Product Design</span>
              </p>
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                  <AccordionTrigger className="text-lg font-bold text-left">
                    <p className="flex flex-row items-center">
                      <CircleCheckBig
                        size={20}
                        className="text-[--pink-500] mr-2"
                      />
                      Discovery
                    </p>
                  </AccordionTrigger>
                  <AccordionContent className="font-normal">
                    Identificamos as necessidades do mercado e do usuário para
                    garantir que cada projeto seja relevante e alinhado com as
                    demandas do público-alvo.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                  <AccordionTrigger className="text-lg font-bold text-left">
                    <p className="flex flex-row items-center">
                      <CircleCheckBig
                        size={20}
                        className="text-[--pink-500] mr-2"
                      />
                      Design UX/UI
                    </p>
                  </AccordionTrigger>
                  <AccordionContent className="font-normal">
                    Focamos na criação de interfaces intuitivas e acessíveis,
                    proporcionando uma experiência de uso fluida e envolvente,
                    com visuais atraentes que reforçam a identidade da marca.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                  <AccordionTrigger className="text-lg font-bold text-left">
                    <p className="flex flex-row items-center">
                      <CircleCheckBig
                        size={20}
                        className="text-[--pink-500] mr-2"
                      />
                      Prototipagem e testes
                    </p>
                  </AccordionTrigger>
                  <AccordionContent className="font-normal">
                    Criamos protótipos funcionais para validar ideias e
                    refinamos o design com base no feedback real do cliente e
                    seus usuários.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-4">
                  <AccordionTrigger className="text-lg font-bold text-left">
                    <p className="flex flex-row items-center">
                      <CircleCheckBig
                        size={20}
                        className="text-[--pink-500] mr-2"
                      />
                      Colaboração iterativa
                    </p>
                  </AccordionTrigger>
                  <AccordionContent className="font-normal">
                    Trabalhamos em estreita colaboração com nossos clientes em
                    todas as etapas do processo, garantindo transparência e
                    alinhamento contínuo.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>

          <div className="flex flex-row w-full h-[450px] rounded-3xl bg-card shadow-3xl mb-40 animate-fade-left animate-once animate-delay-300 animate-ease-in-out animate-normal">
            <div className="flex items-center flex-col w-2/4 m-10">
              <p className="font-bold text-3xl pb-4">
                Develop <span className="text-[--blue-300]">& Delivery</span>
              </p>
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                  <AccordionTrigger className="text-lg font-bold text-left">
                    <p className="flex flex-row items-center">
                      <CircleCheckBig
                        size={20}
                        className="text-[--pink-500] mr-2"
                      />
                      Product Briefing e Roadmap
                    </p>
                  </AccordionTrigger>
                  <AccordionContent className="font-normal">
                    Criamos um briefing detalhado e um roadmap claro para
                    orientar todas as etapas do desenvolvimento do produto,
                    garantindo alinhamento com os objetivos estratégicos do
                    negócio.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                  <AccordionTrigger className="text-lg font-bold text-left">
                    <p className="flex flex-row items-center">
                      <CircleCheckBig
                        size={20}
                        className="text-[--pink-500] mr-2"
                      />
                      Squads Multidisciplinares
                    </p>
                  </AccordionTrigger>
                  <AccordionContent className="font-normal">
                    Montamos equipes especializadas e multidisciplinares,
                    garantindo a eficiência em todas as fases do fluxo de
                    desenvolvimento.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                  <AccordionTrigger className="text-lg font-bold text-left">
                    <p className="flex flex-row items-center">
                      <CircleCheckBig
                        size={20}
                        className="text-[--pink-500] mr-2"
                      />
                      Desenvolvimento Ágil e Incremental
                    </p>
                  </AccordionTrigger>
                  <AccordionContent className="font-normal">
                    Entregamos software funcional de forma contínua, utilizando
                    metodologias ágeis para permitir ajustes rápidos e respostas
                    imediatas às necessidades do mercado.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-4">
                  <AccordionTrigger className="text-lg font-bold text-left">
                    <p className="flex flex-row items-center">
                      <CircleCheckBig
                        size={20}
                        className="text-[--pink-500] mr-2"
                      />
                      Métricas e Reports
                    </p>
                  </AccordionTrigger>
                  <AccordionContent className="font-normal">
                    Monitoramos a performance dos ciclos de entrega através de
                    métricas precisas, buscando melhoria contínua e fornecendo
                    relatórios detalhados, demonstrando a evolução do seu
                    produto e garantindo transparência em todas as etapas do
                    processo.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>

            <div className="rounded-xl bg-[--gray-300] m-10 w-2/5 flex justify-center items-center border border-[--purple-100]">
              <Image
                src="/develop.png"
                alt=""
                width="1000"
                height="1000"
                className="p-2 -mr-14"
              />
            </div>
          </div>

          <div className="flex flex-row w-full h-[450px] rounded-3xl bg-card shadow-3xl mb-20 animate-fade-right animate-once animate-delay-300 animate-ease-in-out animate-normal">
            <div className="rounded-xl bg-[--gray-300] m-10 w-2/5 flex justify-center items-center border border-[--purple-100]">
              <Image
                src="/consulting.png"
                alt=""
                width="1000"
                height="1000"
                className="p-2 -mr-14"
              />
            </div>

            <div className="flex items-center flex-col w-2/4 m-10">
              <p className="font-bold text-3xl pb-4">
                Consulting <span className="text-[--blue-300]">Services</span>
              </p>
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                  <AccordionTrigger className="text-lg font-bold text-left">
                    <p className="flex flex-row items-center">
                      <CircleCheckBig
                        size={20}
                        className="text-[--pink-500] mr-2"
                      />
                      Diagnóstico Abrangente
                    </p>
                  </AccordionTrigger>
                  <AccordionContent className="font-normal">
                    Realizamos um diagnóstico completo para entender os cenários
                    atuais, identificar possíveis gaps e explorar oportunidades
                    de evolução.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                  <AccordionTrigger className="text-lg font-bold text-left">
                    <p className="flex flex-row items-center">
                      <CircleCheckBig
                        size={20}
                        className="text-[--pink-500] mr-2"
                      />
                      Análise de Processos e Métricas
                    </p>
                  </AccordionTrigger>
                  <AccordionContent className="font-normal">
                    Focamos em processos e métricas cruciais, garantindo que
                    todos os aspectos do desenvolvimento de produtos e projetos
                    estejam alinhados com as melhores práticas do mercado.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                  <AccordionTrigger className="text-lg font-bold text-left">
                    <p className="flex flex-row items-center">
                      <CircleCheckBig
                        size={20}
                        className="text-[--pink-500] mr-2"
                      />
                      Cultura Ágil
                    </p>
                  </AccordionTrigger>
                  <AccordionContent className="font-normal">
                    Avaliamos e aprimoramos a cultura ágil dentro da sua
                    organização, promovendo uma mentalidade de melhoria contínua
                    e adaptação rápida às mudanças.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-4">
                  <AccordionTrigger className="text-lg font-bold text-left">
                    <p className="flex flex-row items-center">
                      <CircleCheckBig
                        size={20}
                        className="text-[--pink-500] mr-2"
                      />
                      Apoio e Implementação
                    </p>
                  </AccordionTrigger>
                  <AccordionContent className="font-normal">
                    Trabalhamos lado a lado com o seu time para implementar as
                    ações propostas, garantindo que as mudanças sejam efetivas e
                    sustentáveis.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
