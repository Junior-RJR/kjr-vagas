import React from 'react';
import styles from '../../components/css/Sobre.module.css';

const Sobre = () => {
  return (
    <div className={styles.sobreContainer}>
        <div className={styles.thumbnailContainer}>
            <img
            src={require('../../assets/images/vagasThumbnail.jpg')} 
            alt="Background"
            className={styles.thumbnail}
            />
            <div className={styles.textOverlay}>
            <h1>Oportunidades de Sucesso</h1>
            <p>Explore as melhores vagas e conquiste sua carreira!</p>
            {/* <p>
            Descubra as melhores vagas para impulsionar sua carreira. Venha fazer parte de algo
            grandioso! Não perca as oportunidades de trabalhar com as empresas que estão
            transformando o mercado.
          </p> */}
            <button className={styles.verVagasButton}>VER VAGAS</button>
            </div>
        </div>
        </div>
  );
};

export default Sobre;


