import { CircleArrowRight } from "lucide-react";

import styles from "./Cta.module.css";

export function Cta() {
  return (
    <section id="CTA" className={styles.cta}>
      <div className={styles.container}>
        <div className={styles.empower}>
          <h1>empowering</h1>
        </div>
        <div className={styles.business}>
          <h1>business</h1>
        </div>
        <div className={styles.content}>
          <p>
            Somos engajados com o novo e empoderamos negócios, criando soluções
            e produtos digitais verdadeiramente transformadores. Preenchar o
            formulário, entraremos em contato com menos de 24 horas!
          </p>
          <a href="#Contato">
            Quero falar com um especialista <CircleArrowRight size={20} />
          </a>
        </div>
      </div>
    </section>
  );
}
