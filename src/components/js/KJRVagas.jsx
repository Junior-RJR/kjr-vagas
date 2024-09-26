import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Sobre2 from './Sobre2';
// import Filtro from './Filtro';
import Vagas from './Vagas';
import '../../components/css/Vagas.css'; 

const KJRVagas = () => {
  return (
    <div className="vagas-container">
      <header>
      <Header />
      </header>
      <main>
        <Sobre2 />
        {/* <Filtro /> */}
        <Vagas />
      </main>
    <footer>
      <Footer />
    </footer>
    </div>
  );
};

export default KJRVagas;
