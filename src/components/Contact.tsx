import { ContactForm } from "./contact-form";
import styles from "./Contact.module.css";
import { FadeIn, FadeInStagger } from "@/components/fade-in";

export function Contact() {
  return (
    <section id="Contato" className={styles.contact}>
      <div className={styles.container}>
      <FadeInStagger>
        <FadeIn>
        <div className="flex justify-center items-center flex-col text-[--gray-900] pb-20 dark:text-white">
                    
          <p className="text-lg sm:text-xl font-medium text-[--pink-500] text-center pb-4">
            Entre em contato
          </p>

          <div className="flex justify-center items-center pb-10">
            <h1 className="font-bold text-4xl sm:text-6xl text-center">
              Sua solução está a um clique{" "}
              <span className="text-[--blue-300]">de distancia</span>
            </h1>
          </div>

          <p className="text-base sm:text-xl font-medium text-gray-400 text-center max-w-[785px]">
            Vamos conversar sobre os seus projetos, desafios em tecnologia e
            como podemos impulsionar o seu negócio?
          </p>

        </div>
        </FadeIn>

        <FadeIn className="flex items-center justify-center">
        <ContactForm />
        </FadeIn>

      </FadeInStagger>  
      </div>
    </section>
  );
}
