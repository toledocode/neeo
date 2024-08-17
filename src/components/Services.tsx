"use client";

import Image from "next/image";
import { Tabs } from "./ui/tabs";
import styles from './Services.module.css';
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"  

export function Services(){
    
    const tabs = [
        {
        title: "Digital",
        value: "digital",
        content: (
                <div className="w-full overflow-hidden relative rounded-2xl px-10 py-20 md:text-4xl font-bold text-white bg-gradient-to-br from-blue-700 to-blue-500">
                    <p className="text-xl pb-2">Digital Product Design</p>
                    <p className="font-normal text-base pb-10">Na Neeo transformamos ideias inovadoras em produtos digitais impactantes. Nosso serviço de Digital Product Design combina criatividade, tecnologia e uma abordagem centrada no usuário para criar soluções digitais que não apenas atendem, mas superam as expectativas dos nossos clientes.</p>
                    <main className="flex flex-row w-full">
                        <Image 
                            src="/cover_img.jpg" 
                            alt=""
                            width="300"
                            height="500"
                            className="rounded-2xl object-cover pr-8"
                        />
                        <Accordion type="single" collapsible className="w-full">
                            <AccordionItem value="item-1">
                                <AccordionTrigger className="text-lg font-semibold">Discovery</AccordionTrigger>
                                <AccordionContent className="font-normal">
                                Identificamos as necessidades do mercado e do usuário para garantir que cada projeto seja relevante e alinhado com as demandas do público-alvo.
                                </AccordionContent>
                            </AccordionItem>
                            <AccordionItem value="item-2">
                                <AccordionTrigger className="text-lg font-semibold">Design UX/UI</AccordionTrigger>
                                <AccordionContent className="font-normal">
                                Focamos na criação de interfaces intuitivas e acessíveis, proporcionando uma experiência de uso fluida e envolvente, com visuais atraentes que reforçam a identidade da marca.
                                </AccordionContent>
                            </AccordionItem>
                            <AccordionItem value="item-3">
                                <AccordionTrigger className="text-lg font-semibold">Prototipagem e Testes</AccordionTrigger>
                                <AccordionContent className="font-normal">
                                Criamos protótipos funcionais para validar ideias e refinamos o design com base no feedback real do cliente e seus usuários.
                                </AccordionContent>
                            </AccordionItem>
                            <AccordionItem value="item-4">
                                <AccordionTrigger className="text-lg font-semibold">Colaboração Iterativa</AccordionTrigger>
                                <AccordionContent className="font-normal">
                                Trabalhamos em estreita colaboração com nossos clientes em todas as etapas do processo, garantindo transparência e alinhamento contínuo.
                                </AccordionContent>
                            </AccordionItem>
                        </Accordion>
                    </main>
                </div>
        ),
        },
        {
        title: "Develop",
        value: "develop",
        content: (
            <div className="w-full overflow-hidden relative rounded-2xl px-10 py-20 text-xl md:text-4xl font-bold text-white bg-gradient-to-br  from-blue-700 to-blue-500">
            <p className="text-xl pb-2">Develop & Delivery</p>
            <p className="font-normal text-base pb-10">transformamos ideias inovadoras em produtos digitais impactantes. Nosso serviço de Digital Product Design combina criatividade, tecnologia e uma abordagem centrada no usuário para criar soluções digitais que não apenas atendem, mas superam as expectativas dos nossos clientes.</p>
            <main className="flex flex-row w-full">
                        <Image 
                            src="/cover_img.jpg" 
                            alt=""
                            width="300"
                            height="500"
                            className="rounded-2xl object-cover pr-8"
                        />
                        <Accordion type="single" collapsible className="w-full">
                            <AccordionItem value="item-1">
                                <AccordionTrigger className="text-lg font-semibold">Discovery</AccordionTrigger>
                                <AccordionContent className="font-normal">
                                Identificamos as necessidades do mercado e do usuário para garantir que cada projeto seja relevante e alinhado com as demandas do público-alvo.
                                </AccordionContent>
                            </AccordionItem>
                            <AccordionItem value="item-2">
                                <AccordionTrigger className="text-lg font-semibold">Design UX/UI</AccordionTrigger>
                                <AccordionContent className="font-normal">
                                Focamos na criação de interfaces intuitivas e acessíveis, proporcionando uma experiência de uso fluida e envolvente, com visuais atraentes que reforçam a identidade da marca.
                                </AccordionContent>
                            </AccordionItem>
                            <AccordionItem value="item-3">
                                <AccordionTrigger className="text-lg font-semibold">Prototipagem e Testes</AccordionTrigger>
                                <AccordionContent className="font-normal">
                                Criamos protótipos funcionais para validar ideias e refinamos o design com base no feedback real do cliente e seus usuários.
                                </AccordionContent>
                            </AccordionItem>
                            <AccordionItem value="item-4">
                                <AccordionTrigger className="text-lg font-semibold">Colaboração Iterativa</AccordionTrigger>
                                <AccordionContent className="font-normal">
                                Trabalhamos em estreita colaboração com nossos clientes em todas as etapas do processo, garantindo transparência e alinhamento contínuo.
                                </AccordionContent>
                            </AccordionItem>
                        </Accordion>
                    </main>
            </div>
        ),
        },
        {
        title: "Consulting",
        value: "consulting",
        content: (
            <div className="w-full overflow-hidden relative rounded-2xl px-10 py-20 text-xl md:text-4xl font-bold text-white bg-gradient-to-br  from-blue-700 to-blue-500">
            <p className="text-xl pb-2">Consulting Services</p>
            <p className="font-normal text-base pb-10">transformamos ideias inovadoras em produtos digitais impactantes. Nosso serviço de Digital Product Design combina criatividade, tecnologia e uma abordagem centrada no usuário para criar soluções digitais que não apenas atendem, mas superam as expectativas dos nossos clientes.</p>
            <main className="flex flex-row w-full">
                        <Image 
                            src="/cover_img.jpg" 
                            alt=""
                            width="300"
                            height="500"
                            className="rounded-2xl object-cover pr-8"
                        />
                        <Accordion type="single" collapsible className="w-full">
                            <AccordionItem value="item-1">
                                <AccordionTrigger className="text-lg font-semibold">Discovery</AccordionTrigger>
                                <AccordionContent className="font-normal">
                                Identificamos as necessidades do mercado e do usuário para garantir que cada projeto seja relevante e alinhado com as demandas do público-alvo.
                                </AccordionContent>
                            </AccordionItem>
                            <AccordionItem value="item-2">
                                <AccordionTrigger className="text-lg font-semibold">Design UX/UI</AccordionTrigger>
                                <AccordionContent className="font-normal">
                                Focamos na criação de interfaces intuitivas e acessíveis, proporcionando uma experiência de uso fluida e envolvente, com visuais atraentes que reforçam a identidade da marca.
                                </AccordionContent>
                            </AccordionItem>
                            <AccordionItem value="item-3">
                                <AccordionTrigger className="text-lg font-semibold">Prototipagem e Testes</AccordionTrigger>
                                <AccordionContent className="font-normal">
                                Criamos protótipos funcionais para validar ideias e refinamos o design com base no feedback real do cliente e seus usuários.
                                </AccordionContent>
                            </AccordionItem>
                            <AccordionItem value="item-4">
                                <AccordionTrigger className="text-lg font-semibold">Colaboração Iterativa</AccordionTrigger>
                                <AccordionContent className="font-normal">
                                Trabalhamos em estreita colaboração com nossos clientes em todas as etapas do processo, garantindo transparência e alinhamento contínuo.
                                </AccordionContent>
                            </AccordionItem>
                        </Accordion>
                    </main>
            </div>
        ),
        },
    ];

    return(
        <>
            <section id='Serviços' className={styles.services}>
                <div className={styles.container}>
                    <h1>Conheça nossos serviços</h1>
                    <p>Oferecemos um conjunto diferenciado de serviços e soluções personalizadas para entregar cada vez mais resultados e ajudar sua empresa a alcançar seus objetivos.</p>
                    
                    <div className={styles.content}>
                        <div className="h-[20rem] md:h-[40rem] [perspective:1000px] relative b flex flex-col max-w-5xl mx-auto w-full items-start justify-start ">
                            <Tabs tabs={tabs} />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}