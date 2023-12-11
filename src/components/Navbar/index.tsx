'use client'
import Link from 'next/link';
import styles from './styles.module.css';
import React, { FormEvent, useEffect, useState } from 'react';
import Card from './card';
import SearchIcon from '../../assetss/searchIcon.svg'
import useForm from './useForm';
import dataJson from '../Mocks/data.json'
const endpoint = "https://fakestoreapi.com/products"

const Navbar = () => {
    const [toogle, setToogle] = useState(false)

    const initialFormState = { search: '' };
    const [form, handlerChangeForm, handlerResetForm] = useForm(initialFormState);
    // Comentar las lineas 17 y 18 para usar la api
    const [data, setData] = useState(dataJson)
    const [result, setResult] = useState([])
    // Descomentar para usar la api

    // const [data, setData] = useState([])
    // const [result, setResult] = useState([])

    const handleClick = () => {
        setToogle((prevToogle) => !prevToogle)
    }

    // Busqueda por titulo
    const handleSearch = (event: FormEvent) => {
        event.preventDefault()
        const filter = data.filter((item) => item.title.toLowerCase().includes(form.search.toLowerCase()))
        setResult(filter)
        handlerResetForm()
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
                    <input name='search' value={form.search} onChange={handlerChangeForm} type="text" />
                    <button type='submit' onClick={handleSearch}>buscar</button>
                </form>
                {
                    result.length > 0 ? (
                        <div className={styles.sectionCards}>
                            <div className={styles.sectionTitle}>
                                <span>articulos</span>
                            </div>
                            {
                                result.map((item, index) => (
                                    <Card key={index} item={item} />
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