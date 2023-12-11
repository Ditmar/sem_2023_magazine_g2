import React from 'react'
import styles from './styles.module.css'
import Pdficon from '../../assetss/PDF 3.svg'
import LinkIcon from '../../assetss/LINK 3.svg'

const card = ({ item }) => {
    return (
        <div className={styles.card}>
            <div className={styles.cardHeader}>
                <div className={styles.cardSubTitle}>
                    <span>{item.date}</span>
                </div>
                <div className={styles.cardTitle}>
                    <span>{item.title}</span>
                </div>
            </div>
            <div className={styles.cardContainer}>
                <p>{item.description}</p>
            </div>
            <div className={styles.cardAutor}>
                <span>{item.autor}</span>
            </div>
            <div className={styles.cardActions}>
                <button className={styles.cardActionsBtn}>
                    <img className={styles.cardIcon} src={Pdficon.src} alt="searchIcon" />
                </button>
                <button className={styles.cardActionsBtn}>
                    <img className={styles.cardIcon} src={LinkIcon.src} alt="searchIcon" />
                </button>
            </div>
        </div>
    )
}

export default card