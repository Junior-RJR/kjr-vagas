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
      'atribuições',
      'competenciasNecessarias',
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
              <option value="TI">TI</option>
              <option value="Marketing">Marketing</option>
              <option value="Vendas">Vendas</option>
            </select>
            {errors.area && <div className="error-message">{errors.area}</div>}
          </div>
          <div>
            <select name="nivel" value={vaga.nivel} onChange={onInputChange}>
              <option value="" disabled>Nível</option>
              <option value="Junior">Junior</option>
              <option value="Pleno">Pleno</option>
              <option value="Senior">Senior</option>
            </select>
            {errors.nivel && <div className="error-message">{errors.nivel}</div>}
          </div>
          <div>
            <select name="salario" value={vaga.salario} onChange={onInputChange}>
              <option value="" disabled>Salário</option>
              <option value="1000">R$ 1.000</option>
              <option value="2000">R$ 2.000</option>
              <option value="3000">R$ 3.000</option>
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
              name="atribuições" 
              placeholder="Atribuições" 
              value={vaga.atribuições} 
              onChange={onInputChange}
            ></textarea>
            {errors.atribuições && <div className="error-message">{errors.atribuições}</div>}
          </div>
          <div>
            <textarea 
              name="competenciasNecessarias" 
              placeholder="Competências Necessárias" 
              value={vaga.competenciasNecessarias} 
              onChange={onInputChange}
            ></textarea>
            {errors.competenciasNecessarias && <div className="error-message">{errors.competenciasNecessarias}</div>}
          </div>
          <button type="submit">Cadastrar</button>
          <button type="button" onClick={onClose}>Fechar</button>
        </form>
      </div>
    </div>
  );
};

export default ModalCadastrarVaga;
