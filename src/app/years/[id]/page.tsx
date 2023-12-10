'use client';
import React, { useEffect, useState } from 'react';
import ListDetail from '../../../components/Year/ListDetails';
import { yearData } from '../../../utils/mocking/yearData';
import { Year } from '../../../interfaces';

const YearsDetails = () => {
  const [year, setUser] = useState<Year | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const url = window.location.href;
    const yearIdMatch = url.match(/\/years\/(\d+)/);
    const yearId = yearIdMatch ? yearIdMatch[1] : null;
    const delay = setTimeout(() => {
      const foundYear = yearData.find((u) => u.id.toString() === yearId);

      if (foundYear) {
        setUser(foundYear);
      }

      setLoading(false);

      clearTimeout(delay);
    }, 1000);
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
