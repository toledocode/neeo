import { CircleArrowRight } from 'lucide-react';
import Image from 'next/image'
import styles from './Hero.module.css'


export function About(){
    return(
        <>
            <section id='Home' className={styles.about}>
                <div className="h-[4.6875rem]"></div>
                <div className={styles.container}>
                    <div className={styles.content}>
                        <h1 className={styles.title}>Transformando ideias em</h1>
                        <h1 className={styles.subtitle}>Produtos Digitais</h1>
                        
                        <p>Somos especializados em construir squads multidisciplinares com senioridade para criar soluções exclusivas, combinando estratégia e design, para transformar experiências ao criar produtos digitais únicos.</p>

                        <div className={styles.ctaButton}>
                            <a href="#Contato">
                            Fale com um especialista
                            <CircleArrowRight size={20}/>
                            </a>
                        </div>
                    </div>
                    <Image className={styles.cover}
                        src='/cover_img.jpg'
                        alt="Pessoas reunidas e trabalhando"
                        width={500}
                        height={500}
                    />
                </div>
            </section>
        </>
    )
}