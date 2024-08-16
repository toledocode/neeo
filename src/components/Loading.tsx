import styles from './Loading.module.css';
import Image from "next/image";

export function Loading() {
    return(
        <div className={styles.containerLoading}>
            <p>Estamos enviando seu e-mail...</p>   
            <Image className={styles.loader} src='/loading.svg' alt="Loading" width={50} height={50} />
        </div>
    )
}