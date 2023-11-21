import React from 'react';
import '../../_utils/fonts/_vars.scss';
import styles from './header.module.scss';
import rickAndMortyImg from '../../images/rick-and-morty-header.svg';

export const Header = () => (
  <div className={styles.header}>
    <div className={styles.iconRandMWrapper}>
      <img src={rickAndMortyImg} alt="rickAndMortyImg" />
    </div>
    <div className={styles.headerMain}>
      <h1 className={styles.title}>The Rick and Morty API</h1>
    </div>
  </div>
);
