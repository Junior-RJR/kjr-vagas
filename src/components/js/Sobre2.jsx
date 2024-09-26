import React from 'react';
import styles from '../../components/css/Sobre2.module.css';
import logoKJR from '../../assets/images/logoazul.svg'; 

const Sobre2 = () => {
  return (
    <div className={styles.sobre2Container}>
        <img
            src={require('../../assets/images/vagasThumbnail9.jpg')}
            alt="Background"
            className={styles.backgroundImage} 
      />
      <div className={styles.textOverlay}>
        <h1>ADSA - VAGAS</h1>
        <div className={styles.subTextContainer}>
          <p className={styles.welcomeText}>Seja bem vindo ao portal de oportunidade</p>
          <img src={logoKJR} alt="Logo KJR" className={styles.logoKJR} />
        </div>
      </div>
    </div>
  );
};

export default Sobre2;
