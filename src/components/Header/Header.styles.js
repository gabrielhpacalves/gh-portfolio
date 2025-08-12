import styled from 'styled-components';

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 50px;

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 20px 20px;
    background: #111122;
  }
`;

export const Logo = styled.h1`
  font-size: 1.5rem;
  font-weight: bold;
`;

export const Nav = styled.nav`
  display: flex;
  gap: 30px;

  @media (max-width: 768px) {
    margin-top: 15px;
    gap: 15px;
    flex-wrap: wrap;
    justify-content: center;
  }
`;

export const NavLink = styled.a`
  color: #fff;
  text-decoration: none;
  font-size: 1rem;
  &:hover {
    color: #ccc;
  }
`;