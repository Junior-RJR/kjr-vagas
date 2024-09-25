import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Filtro from './Filtro';
import Modal from './Modal';
import { FaBriefcase, FaGraduationCap, FaDollarSign } from 'react-icons/fa';
import '../../components/css/Vagas.css'; 

const Vagas = () => {
    const [vagas, setVagas] = useState([]);
    const [filteredVagas, setFilteredVagas] = useState([]);
    const [selectedVaga, setSelectedVaga] = useState(null);

    useEffect(() => {
        const fetchVagas = async () => {
            try {
                const response = await axios.get('https://kjr-vagas-back.vercel.app/api/vagas'); 
                setVagas(response.data);
                setFilteredVagas(response.data);
            } catch (error) {
                console.error('Erro ao buscar vagas:', error);
            }
        };
        fetchVagas();
    }, []);

    const handleFilter = ({ searchTerm, area, nivel, salario }) => {
      const filtered = vagas.filter((vaga) => {
        const matchesSearchTerm = vaga.titulo.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesArea = area === '' || vaga.area === area;
        const matchesNivel = nivel === '' || vaga.nivel === nivel;
        const matchesSalario = salario === '' || vaga.salario === salario;

        return matchesSearchTerm && matchesArea && matchesNivel && matchesSalario;
      });
      setFilteredVagas(filtered);
    };

    const handleOpenModal = (vaga) => {
      setSelectedVaga(vaga);
    };

    const handleCloseModal = () => {
      setSelectedVaga(null);
    };

    return (
      <div>
        <Filtro onFilter={handleFilter} />

        <div className="vagasContainer">
          {filteredVagas.length > 0 ? (
            filteredVagas.map((vaga) => (
              <div key={vaga._id} className="vagaItem" onClick={() => handleOpenModal(vaga)}>
                <h2>{vaga.titulo}</h2>
                <p className="empresa">{vaga.empresa}</p>
                <div className="infoItem">
                  <FaBriefcase className="icon" /><span>{vaga.area}</span>
                </div>
                <div className="infoItem">
                  <FaGraduationCap className="icon" /><span>{vaga.nivel}</span>
                </div>
                <div className="infoItem">
                  <FaDollarSign className="icon" /><span>{vaga.salario}</span>
                </div>

                <button className="verBtn">Ver</button>
              </div>
            ))
          ) : (
            <p>Nenhuma vaga encontrada.</p>
          )}
        </div>

        {selectedVaga && (
          <Modal vaga={selectedVaga} onClose={handleCloseModal} />
        )}
      </div>
    );
};

export default Vagas;

