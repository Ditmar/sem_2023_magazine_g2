import React, { useState, useEffect } from 'react';
import Image1 from 'next/image';
import Image2 from 'next/image';
import { Year } from '../../../interfaces';
import styles from './styles.module.scss';
import useMediaQuery from '../../../hooks/useMediaQuery';

type ListDetailProps = {
  item: Year;
};

const ListDetail = ({ item: year }: ListDetailProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const autoScrollInterval = 5000;
  const isMobile = useMediaQuery('(max-width: 768px)');
  const itemsPerPage = isMobile ? 1 : 3;
  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % (year.volumes.length * 2));
  };

  const handlePrev = () => {
    setCurrentIndex(
      (prevIndex) =>
        (prevIndex - 1 + year.volumes.length * 2) % (year.volumes.length * 2)
    );
  };

  useEffect(() => {
    const autoScroll = setInterval(() => {
      handleNext();
    }, autoScrollInterval);

    return () => clearInterval(autoScroll);
  }, [currentIndex]);

  const visibleVolumes = Array.from(
    { length: year.volumes.length * 2 },
    (_, index) => {
      const volumeIndex = (currentIndex + index) % year.volumes.length;
      return year.volumes[volumeIndex];
    }
  ).slice(0, itemsPerPage);

  return (
    <div>
      <div className={styles.card}>
        <div className={styles.subtitle}>Volúmenes</div>
        <div className={styles.cardContent}>
          <ul className={styles.list}>
            <button
              type='button'
              aria-label='Previous'
              aria-disabled='true'
              onClick={handlePrev}
            >
              <Image1
                src='/prev.svg'
                alt='Preview Icon'
                className={styles.prev}
                width={50}
                height={16}
                priority
              />
            </button>
            {visibleVolumes.map((volume) => (
              <li
                key={volume.id}
                className={styles.listItem}
              >
                <div className={styles.volumeCard}>
                  <div className={styles.volumeContent}>
                    <div>
                      <a
                        href={volume.contentLink}
                        target='_blank'
                        rel='noopener noreferrer'
                      >
                        <img
                          src={`${volume.img} `}
                          alt={volume.name}
                          className={styles.volumeImage}
                          loading='lazy'
                        />
                      </a>
                    </div>

                    <div className={styles.publicationInfo}>
                      <div className={styles.titles}>
                        {' '}
                        {volume.publicationDate} | {year.name}
                      </div>

                      <div className={styles.tomo}>{volume.tomo}</div>
                    </div>
                  </div>
                </div>
              </li>
            ))}
            <button
              type='button'
              aria-label='Next'
              aria-disabled='true'
              onClick={handleNext}
            >
              <Image2
                src='/next.svg'
                alt='Next Icon'
                className={styles.next}
                width={50}
                height={16}
                priority
              />
            </button>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ListDetail;
