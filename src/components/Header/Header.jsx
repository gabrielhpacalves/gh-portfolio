import React from 'react';
import * as S from './Header.styles';

const Header = () => {
  return (
    <S.HeaderContainer>
      <S.Logo>#</S.Logo>
      <S.Nav>
        <S.NavLink href="#">Início</S.NavLink>
        <S.NavLink href="#habilidades">Habilidades</S.NavLink>
        <S.NavLink href="#projetos">Projetos</S.NavLink>
        <S.NavLink href="#sobre">Sobre</S.NavLink>
      </S.Nav>
    </S.HeaderContainer>
  );
};

export default Header;