import React from 'react';
import { Link } from 'react-router-dom';
import { ROUTES } from '../../routes'; // ajuste o caminho

const NavMenu = () => {
  return (
    <nav>
      <Link to={ROUTES.USUARIO}>Usuários</Link> | 
      <Link to={ROUTES.PERFIL}>Perfis</Link>
    </nav>
  );
}

export default NavMenu;
