import React, { useRef, useState } from 'react';
import ListItem from '../ListItem';
import { Year } from '../../../interfaces';
import styles from './styles.module.scss';

type Props = {
  items?: Year[];
};

const List = ({ items }: Props) => {
  const [selectedItemId, setSelectedItemId] = useState<number | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleItemClick = (itemId: number) => {
    setSelectedItemId(itemId);
  };
  const allowWrapping = items?.length && items.length < 20 ? 'wrap' : 'nowrap';
  document.documentElement.style.setProperty('--allow-wrapping', allowWrapping);

  return (
    <div
      className={styles.scrollableContent}
      ref={containerRef}
    >
      {items?.map((item) => (
        <button
          key={item.id}
          className={`${styles.fab} ${
            selectedItemId === item.id ? styles.active : ''
          }`}
          onClick={() => handleItemClick(item.id)}
        >
          <ListItem data={item} />
        </button>
      ))}
    </div>
  );
};

export default List;
