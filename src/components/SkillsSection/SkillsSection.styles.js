import styled from 'styled-components';

export const SkillsContainer = styled.section`
  padding: 50px;
  background-color: #1a1a2e;
  text-align: center;
  scroll-margin-top: 80px; /* Para ajustar a rolagem e não esconder a seção atrás do menu fixo, caso você o fixe */
`;

export const Title = styled.h2`
  font-size: 2.5rem;
  color: #fff;
  margin-bottom: 40px;
`;

export const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 30px;
  max-width: 900px;
  margin: 0 auto;
`;

export const SkillItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background-color: #2e2e4a;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-10px);
  }
`;

export const SkillIcon = styled.span`
  font-size: 3rem;
  margin-bottom: 10px;
`;

export const SkillName = styled.p`
  font-size: 1.2rem;
  color: #ccc;
`;