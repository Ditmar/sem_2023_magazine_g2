'use client';

import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import styles from './styles.module.scss';
import {FaGoogle} from 'react-icons/fa';
import { FaFacebookF } from "react-icons/fa";
import { getJsonData } from '../async/service'
import React, { useEffect, useState } from 'react';

interface UserData {
    id: number;
    name: string;
    email: string;
    // ... other user fields
}
const RegisterPage: React.FC = () => {
    const [userData, setUserData] = useState<UserData[]>([]);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const router = useRouter();

    useEffect(() => {
      const fetchUserData = async () => {
        try {
          const url = 'https://example.com/api/users';
          const data = await getJsonData<UserData[]>(url);
          setUserData(data.slice(0, 12));
          console.log('User Data:', userData);
          // Process and display the user data as needed
        } catch (error) {
          console.error('Error fetching user data:', error);
        }
      };
      fetchUserData();
    }, []);

const handleSubmit = (event: React.FormEvent) => {
  event.preventDefault();
};
  return (
    <div className={styles.register}>
      <div className={styles.imagen}></div>
      <div>
      <div className={styles.ButtonGoogle}>
      <FaGoogle color="#ffff" size={45}/>
        <button onClick={() => signIn('google')} className='text-white'>Google</button>
      </div>
      <div className={styles.ButtonFacebook}>
      <FaFacebookF color="#ffff" size={45}/>
        <button onClick={() => signIn('facebook')} className='text-white'>Facebook</button>
      </div>
    <div className={styles.Button}>
    </div>
      </div>
      <div className={styles.Register}>
        <form onSubmit={handleSubmit}>
        <div className={styles.group}>
          <label htmlFor="user" className={styles.label}>Nombre</label>
          <input  type="text" placeholder="" name="name"  className={styles.input_field} value={name} onChange={(event) => setName(event.target.value)} />
        </div>
        <div className={styles.group}>
          <label htmlFor="user" className={styles.label}>Email</label>
          <input  type="email" placeholder="" name="email"  className={styles.input_field} value={email} onChange={(event) => setEmail(event.target.value)} />
        </div>
        <div className={styles.group}>
          <label htmlFor="user" className={styles.label}>Contraseña</label>
          <input type="password" placeholder="" name="password" className={styles.input_field}value={password} onChange={(event) => setPassword(event.target.value)} />
        </div>
          <div className={styles.body_button}>
            <button type="submit" className={styles.button}>
              INICIAR
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
export default RegisterPage;