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

    if (vaga.contatoEmail && !vaga.contatoEmail.includes('@')) {
      newErrors.contatoEmail = 'Por favor, insira um e-mail válido.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputFocus = (field) => {
    setErrors(prevErrors => ({
      ...prevErrors,
      [field]: undefined 
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formattedPhone = vaga.contatoCelular.replace(/\D/g, '');
    const dataToSend = { ...vaga, contatoCelular: formattedPhone };

    if (validateForm()) {
      try {
        const response = await axios.post('https://kjr-vagas-back.vercel.app/api/vagas', dataToSend); 

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
      <div className="modalContentCadastrar">
        <h2>Cadastrar Vaga</h2>
        {successMessage && <div className="success-message">{successMessage}</div>}
        {errors.submit && <div className="error-message">{errors.submit}</div>}
        <form onSubmit={handleSubmit} className="form-container">
          <div className="form-column">
            <div>
              <input 
                type="text" 
                name="titulo" 
                placeholder="Título da Vaga" 
                value={vaga.titulo} 
                onChange={onInputChange} 
                onFocus={() => handleInputFocus('titulo')}
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
                onFocus={() => handleInputFocus('empresa')}
              />
              {errors.empresa && <div className="error-message">{errors.empresa}</div>}
            </div>
            <div>
              <input 
                type="email" 
                name="contatoEmail" 
                placeholder="Contato Email" 
                value={vaga.contatoEmail} 
                onChange={onInputChange} 
                onFocus={() => handleInputFocus('contatoEmail')}
              />
              {errors.contatoEmail && <div className="error-message">{errors.contatoEmail}</div>}
            </div>
            <div>
              <input 
                type="tel" 
                name="contatoCelular" 
                placeholder="Digite 11999999999" 
                value={vaga.contatoCelular} 
                onChange={onInputChange} 
                onFocus={() => handleInputFocus('contatoCelular')}
              />
              {errors.contatoCelular && <div className="error-message">{errors.contatoCelular}</div>}
            </div>
            <div>
              <textarea 
                name="atribuicoes" 
                placeholder="Atribuições" 
                value={vaga.atribuicoes} 
                onChange={onInputChange}
                onFocus={() => handleInputFocus('atribuicoes')}
              ></textarea>
              {errors.atribuicoes && <div className="error-message">{errors.atribuicoes}</div>}
            </div>
          </div>
          <div className="form-column">
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
                <option value="R$ 7.001,00 até R$ 8.000,00">R$ 7.001,00 até R$ 8.000,00</option>
                <option value="R$ 8.001,00 até R$ 9.000,00">R$ 8.001,00 até R$ 9.000,00</option>
                <option value="R$ 9.001,00 até R$ 10.000,00">R$ 9.001,00 até R$ 10.000,00</option>
                <option value="acima de R$ 10.000,00">acima de R$ 10.000,00</option>
              </select>
              {errors.salario && <div className="error-message">{errors.salario}</div>}
            </div>
            <div>
              <input 
                type="text" 
                name="responsavel" 
                placeholder="Nome do Responsável" 
                value={vaga.responsavel} 
                onChange={onInputChange} 
                onFocus={() => handleInputFocus('responsavel')}
              />
              {errors.responsavel && <div className="error-message">{errors.responsavel}</div>}
            </div>
            <div>
              <textarea 
                name="competencias" 
                placeholder="Competências" 
                value={vaga.competencias} 
                onChange={onInputChange}
                onFocus={() => handleInputFocus('competencias')}
              ></textarea>
              {errors.competencias && <div className="error-message">{errors.competencias}</div>}
            </div>
          </div>
        </form>
        {/* <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
          <button type="submit" onClick={handleSubmit}>Cadastrar</button>
          <button onClick={onClose} className="btnFechar">Fechar</button>
        </div> */}
        
        <div className="modalFooterCadastrar">
            <button onClick={handleSubmit} className="btnCandastrar">Cadastrar</button>
            <button onClick={onClose} className="btnFecharCadastrar">Fechar</button>
          </div>

      </div>
    </div>
  );
};

export default ModalCadastrarVaga;
