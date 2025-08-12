import styled from 'styled-components';

export const ProjectsContainer = styled.section`
  padding: 50px;
  background-color: #111122;
  text-align: center;
  scroll-margin-top: 80px;

  @media (max-width: 768px) {
    padding: 30px 20px;
  }
`;

export const Title = styled.h2`
  font-size: 2.5rem;
  color: #fff;
  margin-bottom: 40px;

  @media (max-width: 768px) {
    font-size: 2rem;
    margin-bottom: 20px;
  }
`;

export const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;
  max-width: 1100px;
  margin: 0 auto;

  @media (max-width: 768px) {
    grid-template-columns: 1fr; /* Força uma coluna única em telas menores */
    gap: 20px;
  }
`;

export const ProjectCard = styled.div`
  background-color: #1a1a2e;
  padding: 30px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  transition: transform 0.3s ease;
  text-align: left;

  &:hover {
    transform: scale(1.05);
  }

  @media (max-width: 768px) {
    text-align: center;
  }
`;

export const ProjectTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 15px;
  color: #fff;
`;

export const ProjectDescription = styled.p`
  color: #ccc;
  line-height: 1.6;
  margin-bottom: 20px;
`;

export const ProjectLink = styled.a`
  background: #334466;
  color: #fff;
  padding: 10px 20px;
  text-decoration: none;
  border-radius: 5px;
  transition: background 0.3s ease;

  &:hover {
    background: #445588;
  }
`;