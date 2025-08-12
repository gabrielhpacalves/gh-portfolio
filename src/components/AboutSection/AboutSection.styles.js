import styled from 'styled-components';

export const AboutContainer = styled.section`
  padding: 50px;
  background-color: #1a1a2e;
  scroll-margin-top: 80px;

  @media (max-width: 768px) {
    padding: 30px 20px;
  }
`;

export const Title = styled.h2`
  font-size: 2.5rem;
  color: #fff;
  text-align: center;
  margin-bottom: 40px;

  @media (max-width: 768px) {
    font-size: 2rem;
    margin-bottom: 20px;
  }
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  gap: 50px;
  max-width: 900px;
  margin: 0 auto;

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
    gap: 30px;
  }
`;

export const ProfileImage = styled.img`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  object-fit: cover;
  border: 4px solid #fff;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
`;

export const TextContent = styled.div`
  flex: 1;
`;

export const Paragraph = styled.p`
  line-height: 1.6;
  color: #ccc;
  font-size: 1.1rem;
  margin-bottom: 20px;
`;