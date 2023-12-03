'use client'

import * as React from 'react';
import { useState } from 'react';

const RegisterComponent: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    if (username && password) {
      
      window.location.href = '/'; 
    } else {
      alert('Por favor, complete todos los campos');
    }
  };

  return (
    <div style={{ margin: '80px' }}> 
      <h2 style={{ margin: '50px' }}>Registrarse</h2>
      <form onSubmit={handleRegister}>
        <div>
          <label htmlFor="username">Usuario:</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="password">Contraseña:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button style={{ margin: '50px' }}type="submit">Registrarse</button>
      </form>
    </div>
  );
};

export default RegisterComponent;

