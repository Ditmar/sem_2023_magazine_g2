'use client';
import React from 'react';
import ListItemVolume from '../ListItemVolume';
import { Volume } from '../../../interfaces';
import styles from '../../Year/ListDetails/styles.module.scss';
type Props = {
  items?: Volume[];
};

const ListVolume = ({ items }: Props) => {
  return (
    <div>
      <div className={styles.card}>
        {' '}
        <div className={styles.subtitle}>Volúmenes</div>{' '}
        <div className={styles.cardContent}>
          {' '}
          <ul className={styles.list}>
            {items?.map((item) => (
              <div className={styles.volumeCard}>
                <div className={styles.volumeContent}>
                  <ListItemVolume data={item} />
                </div>{' '}
              </div>
            ))}{' '}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ListVolume;
