import styled from 'styled-components';

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 50px;
  position: relative; 

  @media (max-width: 768px) {
    padding: 20px 20px;
    opacity: 0;
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
    display: flex; 
    flex-direction: column;
    position: fixed;
    top: 0;
    right: 0;
    width: 50%;
    height: 100%;
    background: #111122;
    padding: 60px 20px 20px 20px;
    gap: 15px;
    box-shadow: -2px 0px 5px rgba(0, 0, 0, 0.2);
    z-index: 1000;
    transform: translateX(${({ isOpen }) => (isOpen ? '0%' : '100%')});
    transition: transform 0.3s ease-in-out;
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

export const HamburgerMenu = styled.div`
  display: none;
  flex-direction: column;
  cursor: pointer;
  z-index: 1001;

  @media (max-width: 768px) {
    display: flex;
  }

  span {
    height: 3px;
    width: 25px;
    background: #fff;
    margin-bottom: 4px;
    border-radius: 5px;
    transition: all 0.3s ease;
  }
`;