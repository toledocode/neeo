import Image from "next/image";

import { CircleArrowRight } from "lucide-react";

import styles from "./Career.module.css";

import { FadeIn, FadeInStagger } from "@/components/fade-in";

export function Career() {
  return (
    <section className={styles.career}>
      <div className="h-[759px] bg-[--gray-900]">
        <div className={styles.container}>
        <FadeInStagger>
          <FadeIn>
          <div className="w-full flex justify-center items-center flex-col">
            
            <p className="text-lg sm:text-xl font-medium text-[--pink-500] text-center pb-4">
              #weareneeo
            </p>

            <div className="flex justify-center items-center pb-10">
              <h1 className="font-bold text-5xl text-center text-white">
                Faça parte do{" "}
                <span className="text-[--blue-300]">nosso time!</span>
              </h1>
            </div>

            <p className="text-base sm:text-xl font-medium text-gray-400 text-center pb-10 max-w-[785px]">
              Acreditamos que a tecnologia começa com pessoas, e aqui
              valorizamos nossos colaboradores. Junte-se a nós para criar
              soluções desafiadoras e crescer nas principais tecnologias do
              mercado.
            </p>

            <a href="/Carreira">
              Faça parte da Neeo
              <CircleArrowRight size={20} />
            </a>
          </div>
          </FadeIn>

          <FadeIn>
          <Image
            src="/career_img.png"
            alt="Profissional de tecnologia"
            width={1000}
            height={1000}
            className="shadow-2xl rounded-[2.5rem] object-cover mb-20"
          />
          </FadeIn>
        </FadeInStagger>
        </div>
      </div>
      <div className="h-[450px] bg-transparent"></div>
    </section>
  );
}
