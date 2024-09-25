import React, { useState } from 'react';
import '../../components/css/Filtro.css'; 
import { FaBriefcase, FaGraduationCap, FaDollarSign, FaSearch, FaPlus } from 'react-icons/fa'; 
import ModalCadastrarVaga from './ModalCadastrarVaga'; 

const Filtro = ({ onFilter }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [area, setArea] = useState('');
  const [nivel, setNivel] = useState('');
  const [salario, setSalario] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [vaga, setVaga] = useState({
    titulo: '',
    empresa: '',
    area: '',
    nivel: '',
    salario: '',
    responsavel: '',
    contatoEmail: '',
    contatoCelular: '',
    atribuicoes: '',
    competencias: '',
  });

  const handleFilterChange = () => {
    onFilter({ searchTerm, area, nivel, salario });
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setVaga({ 
      titulo: '',
      empresa: '',
      area: '',
      nivel: '',
      salario: '',
      responsavel: '',
      contatoEmail: '',
      contatoCelular: '',
      atribuicoes: '',
      competencias: '',
    });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setVaga({ ...vaga, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(vaga);
    closeModal(); 
  };

  return (
    <div className="filtroContainer">
      <div className="searchBox">
        <FaSearch className="searchIcon" />
        <input
          type="text"
          placeholder="Pesquisar por título da vaga..."
          value={searchTerm}
          onChange={(e) => {
            setSearchTerm(e.target.value);
            handleFilterChange();
          }}
        />
      </div>

      <div className="dropdown">
        <FaBriefcase className="icon" />
        <select
          value={area}
          onChange={(e) => {
            setArea(e.target.value);
            handleFilterChange();
          }}
        >
          <option value="">Área</option>
          <option value="Recursos Humanos">Recursos Humanos</option>
          <option value="Tecnologia">Tecnologia</option>
          <option value="Ajudante">Ajudante</option>
          <option value="Outros">Outros</option>
        </select>
      </div>

      <div className="dropdown">
        <FaGraduationCap className="icon" />
        <select
          value={nivel}
          onChange={(e) => {
            setNivel(e.target.value);
            handleFilterChange();
          }}
        >
          <option value="">Nível</option>
          <option value="Estágio">Estágio</option>
          <option value="Junior">Junior</option>
          <option value="Pleno">Pleno</option>
          <option value="Senior">Senior</option>
          <option value="Trainee">Trainee</option>
          <option value="Outro">Outro</option>
        </select>
      </div>

      <div className="dropdown">
        <FaDollarSign className="icon" />
        <select
          value={salario}
          onChange={(e) => {
            setSalario(e.target.value);
            handleFilterChange();
          }}
        >
          <option value="">Salário</option>
          <option value="ate1000">Até R$1.000</option>
          <option value="1001a2000">De R$1.001 a R$2.000</option>
          <option value="2001a3000">De R$2.001 a R$3.000</option>
          <option value="acima3000">Acima de R$3.001</option>
        </select>
      </div>

      <button className="botaoCadastrarVaga" onClick={openModal}>
        <FaPlus /> Cadastrar Vaga
      </button>

      {isModalOpen && (
        <ModalCadastrarVaga vaga={vaga} onClose={closeModal} onSubmit={handleSubmit} onInputChange={handleInputChange} />
      )}
    </div>
  );
};

export default Filtro;