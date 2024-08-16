import { ContactForm } from "./contact-form";
import styles from './Contact.module.css';

export function Contact() {
    return(
        <section id='Contato' className={styles.contact}>
          <div className={styles.container}>
            
            <h1>Entre em contato</h1>
            <p>Vamos conversar sobre os seus projetos, desafios em tecnologia e como podemos impulsionar o seu negócio? Você receberá um retorno em menos de 24 horas.</p>
            
            <ContactForm />
          </div>
      </section>
    )
}