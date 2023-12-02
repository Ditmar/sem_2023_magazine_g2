// @ts-nocheck
import React from 'react';
import MainNavigation from '../MainNavigation';
import styles from './styles.module.scss';
import { HeaderProps } from '../../interfaces';
import { SelectedProvider } from '../../context/SelectedContext';

const Header: React.FC<HeaderProps> = ({ selectedItemContent }) => {
  return (
    <header className={styles.header}>
      <SelectedProvider>
        <MainNavigation />
      </SelectedProvider>

      <div>{selectedItemContent}</div>
    </header>
  );
};

export default Header;
