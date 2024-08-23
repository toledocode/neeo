import { ContactForm } from "./contact-form";
import styles from './Contact.module.css';

export function Contact() {
    return(
        <section id='Contato' className={styles.contact}>
          <div className={styles.container}>
            
            <div className="flex justify-center items-center flex-col text-[--gray-900] pb-20">
                          
              <div className="flex justify-center items-center flex-col pb-10">
                <p className="text-xl font-medium text-[--pink-500] text-center pb-4">Entre em contato</p>
                <p className="font-bold text-5xl text-center">Sua solução está a um clique <span className="text-[--blue-300]">de distancia</span></p>
              </div>

              <p className="text-xl font-medium text-[--gray-700] text-center w-[785px]">Vamos conversar sobre os seus projetos, desafios em tecnologia e como podemos impulsionar o seu negócio?</p>

            </div>
            
            <ContactForm />
            
          </div>
      </section>
    )
}