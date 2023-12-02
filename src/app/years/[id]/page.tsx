// src/app/users/[id]/page.tsx
'use client';
import React, { useEffect, useState } from 'react';

import ListDetail from '../../../components/Year/ListDetails';
import { yearData } from '../../../utils/mocking/yearData';
import { Year } from '../../../interfaces';

const YearsDetails = () => {
  const [year, setUser] = useState<Year | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulación de obtener el id de la URL (puedes ajustar esto según sea necesario)
    const url = window.location.href;
    const yearIdMatch = url.match(/\/years\/(\d+)/);
    const yearId = yearIdMatch ? yearIdMatch[1] : null;

    // Simular un tiempo de carga (puedes ajustar según sea necesario)
    const delay = setTimeout(() => {
      // Encuentra el usuario correspondiente al ID en la URL
      const foundYear = yearData.find((u) => u.id.toString() === yearId);

      // Actualiza el estado del usuario si se encuentra
      if (foundYear) {
        setUser(foundYear);
      }

      // Indica que la carga ha terminado
      setLoading(false);

      // Limpia el tiempo de espera
      clearTimeout(delay);
    }, 1000); // Ejemplo: 1 segundo de tiempo de carga
  }, []);

  return (
    <>
      {loading ? (
        <p>Mmmmm...</p>
      ) : year ? (
        <ListDetail item={year} />
      ) : (
        <p>Año no encontrado</p>
      )}
    </>
  );
};

export default YearsDetails;
