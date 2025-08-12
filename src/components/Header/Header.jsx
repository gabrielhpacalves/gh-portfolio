import { useState } from 'react';
import * as S from './Header.styles';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <S.HeaderContainer>
      <S.Logo>#</S.Logo>
      <S.HamburgerMenu onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </S.HamburgerMenu>
      <S.Nav isOpen={isOpen}>
        <S.NavLink href="#">Início</S.NavLink>
        <S.NavLink href="#habilidades">Habilidades</S.NavLink>
        <S.NavLink href="#projetos">Projetos</S.NavLink>
        <S.NavLink href="#sobre">Sobre</S.NavLink>
      </S.Nav>
    </S.HeaderContainer>
  );
};

export default Header;