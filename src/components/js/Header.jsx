import React from 'react';
import '../../components/css/Header.css'; 
import logo from '../../assets/images/logo.svg';

const Header = () => {
  return (
    <header className="header">
      <div className="header-left">
        <p>Em busca do sucesso</p>
      </div>
      <div className="header-center">
        <img src={logo} alt="Logo" className="header-logo" />
      </div>
      <div className="header-right">
        <p>Jesus é Top</p>
      </div>
    </header>
  );
};

export default Header;
