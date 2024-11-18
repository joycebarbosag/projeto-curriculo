import React, { useState } from 'react';
import './Contato.css';
import BigBox from '../components/BigBox';

const Contato = () => {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    mensagem: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { mensagem } = formData;
    window.location.href = `mailto:joycebarbosa.gomess@gmail.com?subject=Tive interesse em seu currículo!&body=${mensagem}`;
  };

  return (
    <div className="inicio">
      <BigBox>
        <h1>Entre em contato comigo!</h1>
        <p>Ficou interessado em me contatar?
          <br />Você pode fazer isso pelo <a href="https://www.linkedin.com/in/joycebarbosagomes/" target="_blank" rel="noopener noreferrer">LinkedIn</a> ou me preenchendo os campos abaixo!
        </p>

        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="nome">Nome:</label>
            <input
              type="text"
              id="nome"
              name="nome"
              value={formData.nome}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label htmlFor="email">E-mail:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label htmlFor="mensagem">Mensagem:</label>
            <textarea
              id="mensagem"
              name="mensagem"
              value={formData.mensagem}
              onChange={handleChange}
              required
            ></textarea>
          </div>
          <button type="submit">Enviar</button>
        </form>
      </BigBox>
    </div>
  );
};

export default Contato;