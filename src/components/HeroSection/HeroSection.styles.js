import styled, { keyframes } from 'styled-components';

const flutuar = keyframes`
  0% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-30px);
  }
  100% {
    transform: translateY(0);
  }
`;

export const HeroContainer = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 50px;
`;

export const Content = styled.div`
  max-width: 50%;
`;

export const Subtitle = styled.p`
  font-size: 0.9rem;
  margin-bottom: 10px;
`;

export const Title = styled.h2`
  font-size: 3rem;
  color: ${props => props.theme.colors.purple};
  margin-bottom: 5px;
`;

export const Headline = styled.h3`
  font-size: 1.5rem;
  color: #ccc;
  margin-bottom: 20px;
`;

export const Description = styled.p`
  line-height: 1.6;
  max-width: 80%;
  margin-bottom: 30px;
`;

export const ButtonsContainer = styled.div`
  display: flex;
  gap: 20px;
`;

export const Button = styled.a`
  background: transparent;
  border: 1px solid #fff;
  color: #fff;
  padding: 10px 20px;
  text-decoration: none;
  border-radius: 5px;
  transition: all 0.3s ease;

  &:hover {
    background: #fff;
    color: #111122;
  }
`;

export const IllustrationContainer = styled.div`
  max-width: 40%;
  animation: ${flutuar} 2s ease-in-out infinite;

  img {
    width: 100%;
    height: auto;
  }
`;