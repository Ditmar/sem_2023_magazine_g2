'use client'
import * as React from 'react';

import styles from './styles.module.scss'
import Link from 'next/link';
import Image from 'next/image';
import article from './img/article.svg'
import ini from './img/inicio.svg'
import volumenes from './img/vol.svg'
import menux from './img/x.svg'

export default function MenuList() {

  return (
    <div className={styles.container} > 
        <ul className={styles.nav}>
            <Link href="/articles" className={styles.link}>
                <button className={styles.icon} >
                    <Image src={article} alt="icono de articulo" width={100} height={100} />
                </button>
                <div className={styles.text}>ARTICULOS</div>
            </Link>
        
            <Link href="/" className={styles.link}>
                <button className={styles.icon}>
                    <Image src={ini} alt="icono de inicio" width={100} height={100} />
                </button>
                <div className={styles.text}>INICIO</div>
            </Link>
        
            <Link href="/vol" className={styles.link}>
                <button className={styles.icon}>
                    <Image src={volumenes} alt="icono de volumenes" width={100} height={100} />
                </button>
                <div className={styles.text}>VOLUMENES</div>
            </Link>
            <Link href="/post" className={styles.link}>
                <button className={styles.icon}>
                    <Image src={article} alt="icono de articulo" width={100} height={100} />
                </button>
                <div className={styles.text}>RPOSITORIO</div>
            </Link>
        </ul>  
    </div>

  );
}