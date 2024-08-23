import { CircleArrowRight } from 'lucide-react';
import Image from 'next/image'
import styles from './Hero.module.css'


export function Hero(){
    return(
        <>
            <section id='Home' className={styles.hero}>
                <div className={styles.container}>
                    <div className="flex justify-center items-center flex-col text-[--gray-900] pb-20 animate-fade-down animate-once animate-delay-300 animate-ease-in-out animate-normal">
                        
                        <p className="text-xl font-medium text-[--pink-500] text-center pb-4">Somos especialistas</p>
                        
                        <div className="flex justify-center items-center pb-10">
                            <p className="font-bold text-6xl text-center">Dê vida às suas ideias com <span className="text-[--blue-300]">soluções que realmente impactam</span></p>
                        </div>

                        <p className="text-xl font-medium text-[--gray-700] text-center pb-10 w-[785px]">Formamos squads experientes para criar soluções exclusivas que unem estratégia e design, transformando experiências e desenvolvendo produtos digitais únicos.</p>

                        <div className={styles.ctaButton}>
                            <a href="#Contato">
                            Fale com um especialista
                            <CircleArrowRight size={20}/>
                            </a>
                        </div>
                    </div>
                    
                    <div className="w-full flex justify-center items-center animate-fade-up animate-once animate-delay-300 animate-ease-in-out animate-normal">
                        <Image
                            src='/hero_img.png'
                            alt="Pessoas reunidas e trabalhando"
                            width={1232}
                            height={640.7}
                        />
                    </div>
                </div>
            </section>
        </>
    )
}