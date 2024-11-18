import React from 'react';
import './Inicio.css';
import BigBox from '../components/BigBox';
import ProfilePhoto from '../components/ProfilePhoto';
import Knowlege from '../components/Knowlege'

const Inicio = () => {
  return (
    <div className="inicio">
      <BigBox>
        <div className='profile-photo'>
        <ProfilePhoto />
        </div>
        <h1>Quem sou eu?</h1>
        <p>Olá! Meu nome é Joyce Barbosa e sou desenvolvedora back-end com uma paixão também pelo front-end!
          <br/>Já possuo três anos de experiência em TI, sobretudo com projetos distribuídos.
          <br/>As tecnologias que possuo conhecimento, são:
        </p>
        <Knowlege/>
        <p>Fique à vontade para conhecer mais de mim e meus projetos!</p>
      </BigBox>
    </div>
  );
};

export default Inicio;