import styled from 'styled-components';

export const SkillsContainer = styled.section`
  padding: 50px;
  background-color: #1a1a2e;
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

export const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 30px;
  max-width: 900px;
  margin: 0 auto;

  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
    gap: 20px;
  }
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

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

export const SkillName = styled.p`
  font-size: 1.2rem;
  color: #ccc;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;