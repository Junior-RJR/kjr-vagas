import React, { useState } from 'react';
import axios from 'axios'; 
import '../../components/css/ModalCadastrarVaga.css';

const ModalCadastrarVaga = ({ vaga, onClose, onInputChange }) => {
  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState('');

  const validateForm = () => {
    const newErrors = {};
    const requiredFields = [
      'titulo',
      'empresa',
      'area',
      'nivel',
      'salario',
      'responsavel',
      'contatoEmail',
      'contatoCelular',
      'atribuicoes',
      'competencias',
    ];

    requiredFields.forEach(field => {
      if (!vaga[field] || vaga[field].trim() === '') {
        newErrors[field] = 'Este campo é obrigatório.';
      }
    });

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (validateForm()) {
      try {
        const response = await axios.post('https://kjr-vagas-back.vercel.app/api/vagas', vaga); 

        console.log('Vaga cadastrada com sucesso:', response.data);
        setSuccessMessage('Vaga cadastrada com sucesso!');

        setTimeout(() => {
          setSuccessMessage('');
          onClose();
        }, 3000);
      } catch (error) {
        console.error('Erro ao cadastrar a vaga:', error);
        setErrors({ submit: 'Erro ao cadastrar a vaga. Tente novamente.' });
      }
    }
  };

  return (
    <div className="modal-overlay">
      <div className="modalContent">
        <h2>Cadastrar Vaga</h2>
        {successMessage && <div className="success-message">{successMessage}</div>}
        {errors.submit && <div className="error-message">{errors.submit}</div>}
        <form onSubmit={handleSubmit}>
          <div>
            <input 
              type="text" 
              name="titulo" 
              placeholder="Título da Vaga" 
              value={vaga.titulo} 
              onChange={onInputChange} 
            />
            {errors.titulo && <div className="error-message">{errors.titulo}</div>}
          </div>
          <div>
            <input 
              type="text" 
              name="empresa" 
              placeholder="Empresa" 
              value={vaga.empresa} 
              onChange={onInputChange} 
            />
            {errors.empresa && <div className="error-message">{errors.empresa}</div>}
          </div>
          <div>
            <select name="area" value={vaga.area} onChange={onInputChange}>
              <option value="" disabled>Área</option>
              <option value="Administrativo">Administrativo</option>
              <option value="Ajudante">Ajudante</option>
              <option value="Designer">Designer</option>
              <option value="Marketing">Marketing</option>
              <option value="Recursos Humanos">Recursos Humanos</option>
              <option value="Tecnologia">Tecnologia</option>
              <option value="Vendedor">Vendedor</option>
              <option value="Outro">Outro</option>
            </select>
            {errors.area && <div className="error-message">{errors.area}</div>}
          </div>
          <div>
            <select name="nivel" value={vaga.nivel} onChange={onInputChange}>
              <option value="" disabled>Nível</option>
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
            {errors.nivel && <div className="error-message">{errors.nivel}</div>}
          </div>
          <div>
            <select name="salario" value={vaga.salario} onChange={onInputChange}>
              <option value="" disabled>Salário</option>
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
            {errors.salario && <div className="error-message">{errors.salario}</div>}
          </div>
          <div>
            <input 
              type="text" 
              name="responsavel" 
              placeholder="Responsável" 
              value={vaga.responsavel} 
              onChange={onInputChange} 
            />
            {errors.responsavel && <div className="error-message">{errors.responsavel}</div>}
          </div>
          <div>
            <input 
              type="email" 
              name="contatoEmail" 
              placeholder="Contato Email" 
              value={vaga.contatoEmail} 
              onChange={onInputChange} 
            />
            {errors.contatoEmail && <div className="error-message">{errors.contatoEmail}</div>}
          </div>
          <div>
            <input 
              type="tel" 
              name="contatoCelular" 
              placeholder="Contato Celular" 
              value={vaga.contatoCelular} 
              onChange={onInputChange} 
            />
            {errors.contatoCelular && <div className="error-message">{errors.contatoCelular}</div>}
          </div>
          <div>
            <textarea 
              name="atribuicoes" 
              placeholder="Atribuições" 
              value={vaga.atribuicoes} 
              onChange={onInputChange}
            ></textarea>
            {errors.atribuicoes && <div className="error-message">{errors.atribuicoes}</div>}
          </div>
          <div>
            <textarea 
              name="competencias" 
              placeholder="Competências Necessárias" 
              value={vaga.competencias} 
              onChange={onInputChange}
            ></textarea>
            {errors.competencias && <div className="error-message">{errors.competencias}</div>}
          </div>
          <button type="submit">Cadastrar</button>
          <button type="button" onClick={onClose}>Fechar</button>
        </form>
      </div>
    </div>
  );
};

export default ModalCadastrarVaga;
