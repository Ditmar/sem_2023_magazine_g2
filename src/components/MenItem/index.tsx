'use client'

import React from 'react';
import styles from './styles.module.scss';
import Image from 'next/image';
import Link from 'next/link';

export default function MenuItem(props) {
  
  const { href, src, alt, text } = props;

  return (
    <Link  href={href} className={styles.item} >
      <div className={styles.link}>
        <Image src={src} alt={alt}/>
      </div>
      <div className={styles.text}>{text}</div>
    </Link>
  );
}