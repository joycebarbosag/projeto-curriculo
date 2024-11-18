import React from 'react';
import { Link } from 'react-router-dom';
import HomeIcon from '@mui/icons-material/Home';
import StarIcon from '@mui/icons-material/Star';
import PhoneIcon from '@mui/icons-material/Phone';
import VideogameAssetIcon from '@mui/icons-material/VideogameAsset';
import './Menu.css';

const Menu = () => {
  return (
    <nav className="menu">
      <ul>
        <li className="menu-item">
          <HomeIcon className="menu-icon" />
          <Link to="/">Início</Link>
        </li>
        <li className="menu-item">
          <StarIcon className="menu-icon" />
          <Link to="/projetos">Projetos</Link>
        </li>
        <li className="menu-item">
          <PhoneIcon className="menu-icon" />
          <Link to="/contato">Contato</Link>
        </li>
        <li className="menu-item">
          <VideogameAssetIcon className="menu-icon" />
          <Link to="/forfun">4Fun</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Menu;