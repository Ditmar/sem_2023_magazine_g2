'use client'
import * as React from 'react';
import { useState } from 'react';
import Button from '@mui/material/Button';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Image from 'next/image';
import { TransitionGroup } from 'react-transition-group';
import Styles from './styles.module.scss';
import closeIcon from './img/x.svg';
import menuIcon from './img/iconhamburger..svg';
import MenuList from './../Menu/MenuList';


interface RenderMenuOptions {
  menuTitle: string;
  handleCloseMenu: () => void;
}


function renderMenu({ menuTitle, handleCloseMenu }: RenderMenuOptions) {
  return (
    <Collapse in={true} timeout={500}>
      <div className={Styles.menu}>
        <MenuList />
        <IconButton
          edge="end"
          aria-label="close-menu"
          title="Close Menu"
          onClick={handleCloseMenu}
        >
          <Image src={closeIcon} alt="Close Menu" className={Styles.buttonx} />
        </IconButton>
      </div>
    </Collapse>
  );
}


export default function MenuTransition() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleToggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleCloseMenu = () => {
    setIsMenuOpen(false);
  };

  const menuToggleButton = (
    <div className={Styles.containerMenu}>
      <Button
        variant="contained"
        onClick={handleToggleMenu}
        className={Styles.iconHamburger}
      >
        <Image src={menuIcon} alt="Menu Icon" />
      </Button>
    </div>
  );

  return (
    <div className={Styles.menu}>
      {menuToggleButton}
      <TransitionGroup>
        {isMenuOpen && renderMenu({ menuTitle: 'Example Menu', handleCloseMenu })}
      </TransitionGroup>
    </div>
  );
}
