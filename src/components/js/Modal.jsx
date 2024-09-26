import React, { useState } from 'react';
import '../../components/css/Modal.css'; 

const Modal = ({ vaga, onClose }) => {
  const [nomeCandidato, setNomeCandidato] = useState('');
  const [showForm, setShowForm] = useState(false);

  const handleCandidatar = () => {
    setShowForm(true);
  };

  const handleEnviarMensagem = () => {
    const mensagem = `Olá ${vaga.responsavel}, me chamo ${nomeCandidato}.
    Vi a vaga ${vaga.titulo} da empresa ${vaga.empresa} e me interessei. 
    Queria alinhar contigo para conversarmos a respeito.

    Vim pelo portal  ADSA-Vagas em parceria com a KJR Desenvolvimentos.
    Obrigado.`;

    const telefoneContato = vaga.contatoCelular; 

    const urlWhatsApp = `https://api.whatsapp.com/send?phone=${telefoneContato}&text=${encodeURIComponent(mensagem)}`;

    window.open(urlWhatsApp, '_blank'); 
  };

  return (
    <div className="modal">
      <div className="modalContent">
        <h2>{vaga.titulo}</h2>
        <p><strong>Empresa:</strong> {vaga.empresa}</p>
        <p><strong>Área:</strong> {vaga.area}</p>
        <p><strong>Nível:</strong> {vaga.nivel}</p>
        <p><strong>Salário:</strong> {vaga.salario}</p>
        <p><strong>Responsável:</strong> {vaga.responsavel}</p>
        <p><strong>Contato Email:</strong> {vaga.contatoEmail}</p> 
        <p><strong>Contato Celular:</strong> {vaga.contatoCelular}</p> 
        <p><strong>Atribuições:</strong> {vaga.atribuicoes}</p>
        <p><strong>Competências Necessárias:</strong> {vaga.competencias}</p> 

        {showForm ? (
          <div className="formCandidatura">
            <input 
              type="text" 
              placeholder="Seu nome" 
              value={nomeCandidato} 
              onChange={(e) => setNomeCandidato(e.target.value)} 
            />
            <button onClick={handleEnviarMensagem} className="btnEnviarWhatsApp">Enviar para WhatsApp</button>
          </div>
        ) : (
          <div className="modalFooter">
            <button onClick={handleCandidatar} className="btnCandidatar">Candidatar-se</button>
            <button onClick={onClose} className="btnFechar">Fechar</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Modal;
