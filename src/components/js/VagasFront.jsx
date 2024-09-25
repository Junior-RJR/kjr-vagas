import React, { useState } from 'react';
import Filtro from './Filtro';
import Modal from './Modal';
import { FaBriefcase, FaGraduationCap, FaDollarSign } from 'react-icons/fa';
import '../../components/css/Vagas.css'; 

const vagasExemplo = [
  { 
    titulo: 'Desenvolvedor Front-end', 
    empresa: 'Tech Solutions', 
    area: 'Tecnologia', 
    nivel: 'Junior', 
    salario: '2001 a 3000', 
    contatos: 'contato@techsolutions.com', 
    celular: '+5511982183363', 
    responsavel: 'Carlos Silva', 
    atribuicoes: 'Desenvolver interfaces', 
    competencias: 'React, CSS, HTML' 
  },
  { 
    titulo: 'Analista de RH', 
    empresa: 'Human Co.', 
    area: 'Recursos Humanos', 
    nivel: 'Pleno', 
    salario: '1001 a 2000', 
    contatos: 'rh@humanco.com', 
    celular: '+5511982183363', 
    responsavel: 'Fernanda Costa', 
    atribuicoes: 'Gerir processos de recrutamento', 
    competencias: 'Comunicação, Liderança' 
  },
  { 
    titulo: 'Ajudante Geral', 
    empresa: 'Helper Group', 
    area: 'Ajudante', 
    nivel: 'Outro', 
    salario: 'Até 1000', 
    contatos: 'contato@helpergroup.com', 
    celular: '+5511977777777', 
    responsavel: 'João Pereira', 
    atribuicoes: 'Auxiliar em tarefas diversas', 
    competencias: 'Proatividade' 
  },
  { 
    titulo: 'Engenheiro de Software', 
    empresa: 'Inovatech', 
    area: 'Tecnologia', 
    nivel: 'Senior', 
    salario: 'Acima de 3000', 
    contatos: 'engenharia@inovatech.com', 
    celular: '+5511966666666', 
    responsavel: 'Marcelo Oliveira', 
    atribuicoes: 'Desenvolvimento de sistemas', 
    competencias: 'Arquitetura de Software, Java' 
  },
  { 
    titulo: 'Assistente Administrativo', 
    empresa: 'Admin Corp', 
    area: 'Administração', 
    nivel: 'Junior', 
    salario: '1001 a 2000', 
    contatos: 'admin@admincorp.com', 
    celular: '+5511955555555', 
    responsavel: 'Patrícia Souza', 
    atribuicoes: 'Suporte administrativo', 
    competencias: 'Organização, MS Office' 
  },
  { 
    titulo: 'Estagiário em Marketing', 
    empresa: 'Creative Minds', 
    area: 'Marketing', 
    nivel: 'Estágio', 
    salario: 'Até 1000', 
    contatos: 'estagio@creativeminds.com', 
    celular: '+5511944444444', 
    responsavel: 'Rafael Lima', 
    atribuicoes: 'Auxílio em campanhas', 
    competencias: 'Comunicação, Design' 
  },
  { 
    titulo: 'Gerente de Projetos', 
    empresa: 'Global Corp', 
    area: 'Tecnologia', 
    nivel: 'Pleno', 
    salario: '2001 a 3000', 
    contatos: 'projetos@globalcorp.com', 
    celular: '+5511933333333', 
    responsavel: 'Beatriz Nunes', 
    atribuicoes: 'Gerenciamento de projetos', 
    competencias: 'Liderança, Gestão de Projetos' 
  },
  { 
    titulo: 'Técnico de Suporte', 
    empresa: 'HelpTech', 
    area: 'Tecnologia', 
    nivel: 'Junior', 
    salario: '1001 a 2000', 
    contatos: 'suporte@helptech.com', 
    celular: '+5511922222222', 
    responsavel: 'Gabriel Mendes', 
    atribuicoes: 'Suporte técnico', 
    competencias: 'Windows, Redes' 
  }
];


// const vagasExemplo = [
//   { titulo: 'Desenvolvedor Front-end', empresa: 'Tech Solutions', area: 'Tecnologia', nivel: 'Junior', salario: '2001 a 3000', contatos: 'contato@techsolutions.com', atribuicoes: 'Desenvolver interfaces', competencias: 'React, CSS, HTML' },
//   { titulo: 'Analista de RH', empresa: 'Human Co.', area: 'Recursos Humanos', nivel: 'Pleno', salario: '1001 a 2000', contatos: 'rh@humanco.com', atribuicoes: 'Gerir processos de recrutamento', competencias: 'Comunicação, Liderança' },
//   { titulo: 'Ajudante Geral', empresa: 'Helper Group', area: 'Ajudante', nivel: 'Outro', salario: 'Até 1000', contatos: 'contato@helpergroup.com', atribuicoes: 'Auxiliar em tarefas diversas', competencias: 'Proatividade' },
//   { titulo: 'Engenheiro de Software', empresa: 'Inovatech', area: 'Tecnologia', nivel: 'Senior', salario: 'Acima de 3000', contatos: 'engenharia@inovatech.com', atribuicoes: 'Desenvolvimento de sistemas', competencias: 'Arquitetura de Software, Java' },
//   { titulo: 'Assistente Administrativo', empresa: 'Admin Corp', area: 'Administração', nivel: 'Junior', salario: '1001 a 2000', contatos: 'admin@admincorp.com', atribuicoes: 'Suporte administrativo', competencias: 'Organização, MS Office' },
//   { titulo: 'Estagiário em Marketing', empresa: 'Creative Minds', area: 'Marketing', nivel: 'Estágio', salario: 'Até 1000', contatos: 'estagio@creativeminds.com', atribuicoes: 'Auxílio em campanhas', competencias: 'Comunicação, Design' },
//   { titulo: 'Gerente de Projetos', empresa: 'Global Corp', area: 'Tecnologia', nivel: 'Pleno', salario: '2001 a 3000', contatos: 'projetos@globalcorp.com', atribuicoes: 'Gerenciamento de projetos', competencias: 'Liderança, Gestão de Projetos' },
//   { titulo: 'Técnico de Suporte', empresa: 'HelpTech', area: 'Tecnologia', nivel: 'Junior', salario: '1001 a 2000', contatos: 'suporte@helptech.com', atribuicoes: 'Suporte técnico', competencias: 'Windows, Redes' }
// ];

const Vagas = () => {
    const [filteredVagas, setFilteredVagas] = useState(vagasExemplo);
    const [selectedVaga, setSelectedVaga] = useState(null);
  
    const handleFilter = ({ searchTerm, area, nivel, salario }) => {
      const filtered = vagasExemplo.filter((vaga) => {
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
            filteredVagas.map((vaga, index) => (
              <div key={index} className="vagaItem" onClick={() => handleOpenModal(vaga)}>
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
