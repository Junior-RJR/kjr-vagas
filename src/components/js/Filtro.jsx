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
            <option value="Administrativo">Administrativo</option>
            <option value="Ajudante">Ajudante</option>
            <option value="Designer">Designer</option>
            <option value="Marketing">Marketing</option>
            <option value="Recursos Humanos">Recursos Humanos</option>
            <option value="Tecnologia">Tecnologia</option>
            <option value="Vendedor">Vendedor</option>
            <option value="Outro">Outro</option>
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
            <option value="Estagio">Estágio</option>
            <option value="Trainee">Trainee</option>
            <option value="Auxiliar">Auxiliar</option>
            <option value="Tecnico">Técnico</option>
            <option value="Junior">Junior</option>
            <option value="Pleno">Pleno</option>
            <option value="Senior">Senior</option>
            <option value="Supervisor">Supervisor</option>
            <option value="Coordenador">Coordenador</option>
            <option value="Gerente">Gerente</option>
            <option value="Freelancer">Freelancer</option>
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
            <option value="até R$ 1.000,00">até R$ 1.000,00</option>
            <option value="R$ 1.001,00 até R$ 2.000,00">R$ 1.001,00 até R$ 2.000,00</option>
            <option value="R$ 2.001,00 até R$ 3.000,00">R$ 2.001,00 até R$ 3.000,00</option>
            <option value="R$ 3.001,00 até R$ 4.000,00">R$ 3.001,00 até R$ 4.000,00</option>
            <option value="R$ 4.001,00 até R$ 5.000,00">R$ 4.001,00 até R$ 5.000,00</option>
            <option value="R$ 5.001,00 até R$ 6.000,00">R$ 5.001,00 até R$ 6.000,00</option>
            <option value="R$ 6.001,00 até R$ 7.000,00">R$ 6.001,00 até R$ 7.000,00</option>
            <option value="acima de R$ 7.001,00">acima de R$ 7.001,00</option>
            <option value="A combinar">A combinar</option>
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