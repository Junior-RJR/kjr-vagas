import React from 'react';
import '../../components/css/Footer.css';
import logoKJR from '../../assets/images/logoazul.svg'; 

const Footer = () => {
  return (
    <footer className="footer">
      <img src={logoKJR} alt="Logo KJR Desenvolvimento" className="footer-logo" />
      <p>&copy; 2024 - Todos os direitos reservados</p>
      <p>
        Desenvolvido por <a href="https://kjrdev.com.br" target="_blank" rel="noopener noreferrer">KJR Desenvolvimento</a>
      </p>
    </footer>
  );
};

export default Footer;
