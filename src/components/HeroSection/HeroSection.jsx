import * as S from './HeroSection.styles';
import minhaIlustracao from '../../assets/programador.png';

const HeroSection = () => {
  return (
    <S.HeroContainer>
      <S.Content>
        <S.Title>Gabriel Henrique</S.Title>
        <S.Headline>Desenvolvedor Web/Design Gráfico</S.Headline>
        <S.Description>
          A minha jornada no desenvolvimento começou com C# e, em seguida, me aprofundei em tecnologias como React e Angular. Desde então, tenho trabalhado para aprimorar minhas habilidades e criar sites e aplicativos envolventes e dinâmicos.
        </S.Description>
        <S.ButtonsContainer>
          <S.Button href="https://www.linkedin.com/in/gh-cavalcante/">Linkedin</S.Button>
          <S.Button href="https://github.com/gabrielhpacalves">GitHub</S.Button>
          <S.Button 
            href="/GabrielHenrique-CVDEV.pdf" 
            download="GabrielHenrique-CVDEV.pdf"
          >
            Currículo
          </S.Button>
        </S.ButtonsContainer>
      </S.Content>
      <S.IllustrationContainer>
        <img src={minhaIlustracao} alt="Ilustração de uma mesa de trabalho" />
      </S.IllustrationContainer>
    </S.HeroContainer>
  );
};

export default HeroSection;