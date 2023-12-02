import React, { ReactNode } from 'react';
import styles from './styles.module.scss';
import Navbar from '../Navbar';

type Props = {
  children?: ReactNode;
};

const Layout = ({ children }: Props) => (
  <div className={styles.mainNavigation}>
    <div className={styles.navHeader}>
      <Navbar />
    </div>
  </div>
);

export default Layout;
