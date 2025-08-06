import * as S from "./ProjectsSection.styles";
import useScrollAnimation from "../../hooks/useScrollAnimation";

const ProjectsSection = () => {
  const setRef = useScrollAnimation();
  const projects = [
    {
      title: "HB Steak House - Cardápio",
      description:
        "Cardápio digital",
      link: "https://stores.cardi.digital/cardapio/hbsteakhouse",
    },
    {
      title: "DVJPet",
      description:
        "Sistema de Gestão para Pet Shops e Clínicas Veterinárias",
      link: "https://www.dvjpet.com.br/",
    },
    {
      title: "Análise de Desempenho Escolar",
      description:
        "Projeto desenvolvido com Machine Learnig + Python",
      link: "https://github.com/gabrielhpacalves/projeto-desempenho-escola",
    },
  ];

  return (
    <S.ProjectsContainer id="projetos" ref={setRef}>
      <S.Title>Projetos</S.Title>
      <S.ProjectsGrid>
        {projects.map((project, index) => (
          <S.ProjectCard key={index}>
            <S.ProjectTitle>{project.title}</S.ProjectTitle>
            <S.ProjectDescription>{project.description}</S.ProjectDescription>
            <S.ProjectLink href={project.link}>Ver Projeto</S.ProjectLink>
          </S.ProjectCard>
        ))}
      </S.ProjectsGrid>
    </S.ProjectsContainer>
  );
};

export default ProjectsSection;
