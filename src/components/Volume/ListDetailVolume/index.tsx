import React from 'react';
import { Volume } from '../../../interfaces';

type ListDetailProps = {
  item: Volume;
};

const ListDetailVolume = ({ item: volume }: ListDetailProps) => (
  <div>
    <p>Título: {volume.name}</p>
    <p>Tomo: {volume.tomo}</p>
    <p>Editorial: {volume.editorial}</p>
  </div>
);

export default ListDetailVolume;
