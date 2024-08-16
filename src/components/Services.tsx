import Image from 'next/image'
import styles from './Services.module.css';

export function Services(){
    return(
        <>
            <section id='Serviços' className={styles.services}>
                <div className={styles.container}>
                    <h1>Conheça nossos serviços</h1>
                    <p>Oferecemos um conjunto diferenciado de serviços e soluções personalizadas para entregar cada vez mais resultados e ajudar sua empresa a alcançar seus objetivos.</p>
                    
                    <div className={styles.content}>
                        <div className={styles.collumn}>
                            <div className={styles.imagem}>
                                <Image src='/Project.svg' alt="Projeto" width={100} height={100} />
                            </div>
                            <h3>Digital Product Design</h3>
                            <p>Construímos a estratégia para o desenvolvimento do seu produto digital, unindo a visão do negócio e a experiência do usuário final. Neste processo traçamos o planejamento, incluindo as etapas de Discovery, elaboração do Product Briefing, Design UX/UI e Roadmap do Produto, contemplando suas respectivas fases (MVPs) e estimativas macro, que consideram a priorização das funcionalidade com objetivo de potencializar o valor entregue.</p>
                        </div>
                        <div className={styles.collumn}>
                            <div className={styles.imagem}>
                                <Image src='/OKR.svg'  alt="OKR" width={100} height={100} />
                            </div>
                            <h3>Develop & Delivery</h3>
                            <p>Partindo da visão de produto, definimos a estrutura, arquitetura e stacks de tecnologia para propor a solução ideal. Montamos squads multidisciplinares e especializados para garantir a eficiência nas etapas do fluxo de desenvolvimento, entregando software funcional de forma continua, ágil e incremental. A performance dos ciclos de entregas são medidas através das métricas de desenvolvimento, melhorando a cada sprint, com reports quinzenais demonstrando a evolução do seu produto.</p>
                        </div>
                        <div className={styles.collumn}>
                            <div className={styles.imagem}>
                                <Image src='/Agile.svg' alt="Agile" width={100} height={100} />
                            </div>
                            <h3>Consulting Services</h3>
                            <p>Realizamos o diagnóstico para entender os cenários, possíveis gaps e oportunidades de evolução com foco em processos, métricas e cultura ágil para desenvolvimento de produtos e projetos. Ao identificar os principais entraves, elencamos as principais ações e soluções e apoiamos o seu time para promovermos juntos as evoluções necessárias. Um ciclo de melhoria continua se estabelece para acompanhamento do plano de ação e suporte para garantir o sucesso.</p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}