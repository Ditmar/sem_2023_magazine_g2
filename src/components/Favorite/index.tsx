'use client'
import styles from './styles.module.css'
import React, { useState } from 'react'
const Favorite: React.FC = () => {
  const [favorites, setFavorites] = useState(false)
  const handlerClick = () => {
    setFavorites(!favorites)
 }
  return (
    <div className={styles.favorites}>
        <button onClick={handlerClick}>
            {favorites ?  <div>💖</div> : <div>🤯</div>}
        </button>
    </div>
  );
}
export default Favorite;