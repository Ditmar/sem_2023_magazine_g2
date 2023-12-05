'use client'
import Link from 'next/link';
import styles from './styles.module.css';
import React, { useEffect, useState } from 'react';
import SearchIcon from '../../assetss/searchIcon.svg'

// Para usar la api primero se debe comentar el codigo que esta moqueando los datos, en este caso seria las lineas
// 9, 15 y 16 y descomentar las lineas 17 y 18 junto con la funcion de useEffect de la linea 61 al 70.
import dataJson from '../__mock__/data.json'
//const endpoint = "https://fakestoreapi.com/products" La url de la api tiene que ser pegado aqui.
const Navbar = () => {
    const [toogle, setToogle] = useState(false)

    const [formData, setFormData] = useState('')
    const [data, setData] = useState(dataJson)
    const [result, setResult] = useState(dataJson)
    // const [data, setData] = useState([])
    // const [result, setResult] = useState([])

    const handleClick = () => {
        setToogle((prevToogle) => !prevToogle)
    }

    const handleChange = (event: any) => {
        const { value } = event.target
        setFormData(value)
        console.log(value);
        const filter = data.filter((item) => item.title.toLowerCase().includes(value.toLowerCase()))
        setResult(filter)
    }
    // Busqueda por titulo
    const handleSearch = (event: any) => {
        event.preventDefault()
        const filter = data.filter((item) => item.title.toLowerCase().includes(formData.toLowerCase()))
        setResult(filter)
    }

    const fetchData = async (endpoint: any) => {

        try {
            const response = await fetch(endpoint, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                },
            });

            if (!response.ok) {
                throw new Error(`Error: ${response.status} - ${response.statusText}`);
            }

            return await response.json();
        } catch (error) {
            console.error('Error in fetchData:', error);
            throw error;
        }
    }

    //Comentar este useEffect para usar mock dataJson
   
    // useEffect(() => {
    //     const getData = async () => {
    //         const res = await fetchData(endpoint)
    //         setData(res)
    //         setResult(res)
    //     }

    //     getData()

    // }, [])

    return (
        <>
            <nav className={styles.nav}>
                <ul>
                    <li>
                        <Link href="/">Home</Link>
                    </li>
                    <li>
                        <Link href="/post">Posts</Link>
                    </li>
                    <li>
                        <Link href="/about">About</Link>
                    </li>
                </ul>
                <button onClick={handleClick}>
                    <img src={SearchIcon.src} alt="searchIcon" />
                </button>
            </nav>
            <div className={styles.form}>
                <form className={`${styles.container} ${toogle ? styles.expanded : ''}`} onSubmit={handleSearch}>
                    <input name='search' value={formData} onChange={handleChange} type="text" />
                    <button type='submit' onClick={handleSearch}>buscar</button>
                </form>
                {
                    toogle ? (
                        <div className={styles.sectionCards}>
                            {
                                result.map((item, index) => (
                                    <div key={index} className={styles.card}>
                                        <div className={styles.cardHeader}>
                                            <div className={styles.cardTitle}>
                                                <span>{item.title}</span>
                                            </div>
                                            <div className={styles.cardSubTitle}>
                                                <span>{item.category}</span>
                                            </div>
                                        </div>
                                        <div className={styles.cardContainer}>
                                            <p>{item.description}</p>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                    ) : null
                }


            </div>
        </>
    );
};
export default Navbar;