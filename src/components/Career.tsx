import styles from './Career.module.css'
import { CircleArrowRight } from 'lucide-react';
import Image from 'next/image'

export function Career(){
    return (
        <section className={styles.career}>
            <div className={styles.container}>
                <Image src='/devCover.jpg' alt='Profissional de tecnologia'
                    width={500}
                    height={500}
                />
                <div className={styles.content}>
                    <h1>Faça parte do nosso time!</h1>
                    <p>Tecnologia começa com pessoas e por aqui nossos colaboradores são valorizados e reconhecidos. Venha fazer parte do nosso time, construa soluções e projetos desafiadores com muita oportunidade de aprendizado e crescimento nas principais tecnologias de mercado.</p>
                    <a href="#">
                        Faça parte da Neeo
                        <CircleArrowRight size={20}/>
                    </a>
                </div>
            </div>
        </section>
    )
}