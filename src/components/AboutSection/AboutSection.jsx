import * as S from "./AboutSection.styles";
import useScrollAnimation from "../../hooks/useScrollAnimation";
import minhaIlustracao from '../../assets/Gabriel.png';

const AboutSection = () => {
  const setRef = useScrollAnimation();
  return (
    <S.AboutContainer id="sobre" ref={setRef}>
      <S.Title>Sobre Mim</S.Title>
      <S.Content>
        <S.ProfileImage src={minhaIlustracao} alt="Foto de Perfil" />
        <S.TextContent>
          <S.Paragraph>
            Olá! Meu nome é Gabriel Henrique. Sou um desenvolvedor web com uma
            paixão por tecnologia e design. Atuo na área desde 2017 e minha
            jornada profissional começou com suporte técnico, o que me deu uma
            base sólida para resolver problemas. Ao longo do tempo, também me
            especializei em design gráfico, combinando minhas habilidades para
            criar soluções digitais que são não apenas funcionais, mas também
            visualmente atraentes.
          </S.Paragraph>
          <S.Paragraph>
            Além de programar, gosto de praticar esportes e sou apaixonado pelo
            Corinthians. Também dedico meu tempo ao desenho, uma atividade que
            me permite explorar a criatividade de forma manual. Acredito que a
            combinação de criatividade, lógica e paixão é a chave para construir
            experiências digitais incríveis.
          </S.Paragraph>
        </S.TextContent>
      </S.Content>
    </S.AboutContainer>
  );
};

export default AboutSection;
