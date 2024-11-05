import Image from "next/image";

import { FadeIn, FadeInStagger } from "@/components/fade-in";

import { CircleArrowRight } from "lucide-react";

import styles from "./Hero.module.css";

export function Hero() {
  return (
      <section id="Home" className={styles.hero}>
        <div className={styles.container}>
          <FadeInStagger>
            <FadeIn>
              <div className="flex justify-center items-center flex-col text-[--gray-900] pb-20">
                
                <p className="text-lg sm:text-xl font-medium text-[--pink-500] text-center pb-4">
                  Somos especialistas
                </p>

                <div className="flex justify-center items-center pb-10">
                  <h1 className="font-bold text-4xl sm:text-6xl text-center dark: text-white">
                    Transformamos ideias em {" "}
                    <span className="text-[--blue-300]">
                      soluções digitais inovadoras
                    </span>
                  </h1>
                </div>

                <p className="text-base sm:text-xl font-medium text-[--gray-700] text-center pb-10 max-w-[785px] dark: text-gray-300">
                  Montamos squads experientes para criar soluções exclusivas que
                  unem estratégia e design, transformando experiências e
                  desenvolvendo produtos digitais únicos.
                </p>

                <div className={styles.ctaButton}>
                  <a href="#Contato">
                    Fale com um especialista
                    <CircleArrowRight size={20} />
                  </a>
                </div>
              </div>
            </FadeIn>

            <FadeIn>
              <div className="w-full flex justify-center items-center">
                <Image
                  src="/hero_img.png"
                  alt="Pessoas reunidas e trabalhando"
                  width={1232}
                  height={640.7}
                />
              </div>
            </FadeIn>
          </FadeInStagger>
        </div>
      </section>
  );
}
