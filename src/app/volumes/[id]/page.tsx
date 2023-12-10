'use client';
import React, { useEffect, useState } from 'react';
import ListDetailVolume from '@/components/Volume/ListDetailVolume';
import { Volume } from '../../../interfaces';
import { volumeData } from '@/utils/mocking/volumeData';

const VolumessDetails = () => {
  const [volume, setVolume] = useState<Volume | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const url = window.location.href;
    const volumeIdMatch = url.match(/\/volumes\/(\d+)/);
    const volumeId = volumeIdMatch ? volumeIdMatch[1] : null;

    const delay = setTimeout(() => {
      const foundVolume = volumeData.find((u) => u.id.toString() === volumeId);
      if (foundVolume) {
        setVolume(foundVolume);
      }
      setLoading(false);
      clearTimeout(delay);
    }, 1000);
  }, []);

  return (
    <>
      {loading ? (
        <p>Mmmmm...</p>
      ) : volume ? (
        <ListDetailVolume item={volume} />
      ) : (
        <p>Volumen no encontrado</p>
      )}
    </>
  );
};

export default VolumessDetails;
