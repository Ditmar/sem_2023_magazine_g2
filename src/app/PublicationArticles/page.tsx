'use Client'
import Link from 'next/link';

import styles from './styles.module.scss';
import HomeIcon from "@/app/somerute/ARCHIVO 2.svg";
const page = () => {
  return (
    <div className={styles.container}>
        <div>
            <button className={styles.button}><Link href="/PublicationArticles/NewArticulo">Nuevo Articulo</Link> </button>
            <HomeIcon className={styles.svgimage}/>
        </div>
    </div>
    
  )
}

export default page