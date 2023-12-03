'use client'
import * as React from 'react';
import { useState } from 'react';

const LoginComponent: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();

    if (username === 'usuario' && password === 'contraseña') {
      
      window.location.href = '/'; 
    } else {
      alert('Credenciales inválidas');
    }
  };

  return (
    <div style={{ margin: '80px' }}>
      <h2 style={{ margin: '50px' }}>Iniciar Sesión</h2>
      <form onSubmit={handleLogin} >
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
        <button style={{ margin: '50px' }} type="submit">Iniciar Sesión</button>
      </form>
    </div>
  );
};

export default LoginComponent;

