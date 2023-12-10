
// @ts-nocheck
'use client';
import { useState } from 'react';
import styles from './styles.module.scss';
import Link from 'next/link';
import Years from '../../app/years/page';
import React, { FormEvent, useEffect, useState } from 'react';
import Card from './card';
import SearchIcon from '../../assetss/searchIcon.svg'
import useForm from './useForm';
import dataJson from '../Mocks/data.json'


const endpoint = "https://fakestoreapi.com/products"
  const Navbar: React.FC = () => {
    const [selectedItem, setSelectedItem] = useState(null);
    const [showYears, setShowYears] = useState(false);
  
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
    const handleItemClick = (itemName: string) => {
      if (itemName === 'volumenes') {
        setShowYears(true);
      } else {
        setSelectedItem(null);
        setShowYears(false);
      }
      if (itemName === 'Años')
        if (showYears) {
          setShowYears(true);
          setSelectedItem((prevSelectedItem) =>
            prevSelectedItem === itemName ? null : itemName
          );
        }
    };
  
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
    
      
    return (
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
        </nav>
    );
};
export default Navbar;


const Navbar: React.FC = () => {
  const [selectedItem, setSelectedItem] = useState(null);
  const [showYears, setShowYears] = useState(false);

  const handleItemClick = (itemName: string) => {
    if (itemName === 'volumenes') {
      setShowYears(true);
    } else {
      setSelectedItem(null);
      setShowYears(false);
    }
    if (itemName === 'Años')
      if (showYears) {
        setShowYears(true);
        setSelectedItem((prevSelectedItem) =>
          prevSelectedItem === itemName ? null : itemName
        );
      }
  };
  return (
    <>
      <div className={styles.toolbar}>
        <ul>
          <li>
            <Link
              href='/'
              onClick={() => handleItemClick('inicio')}
            >
              INICIO
            </Link>
          </li>
          <li>
            <Link
              href='/'
              onClick={() => handleItemClick('articulos')}
            >
              ARTÍTCULOS
            </Link>
          </li>

          <li className={styles.volumen}>
            <Link
              href={`/volumes`}
              onClick={() => handleItemClick('volumenes')}
            >
              VOLÚMENES
            </Link>
          </li>
        </ul>{' '}
        {showYears && (
          <button
            className={styles.fab}
            onClick={() => handleItemClick('Años')}
          >
            AÑOS
          </button>
        )}
        {selectedItem && <Years />}
      </div>
    </>
  );
};

export default Navbar;

