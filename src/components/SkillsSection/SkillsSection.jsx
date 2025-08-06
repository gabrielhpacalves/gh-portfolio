import * as S from "./SkillsSection.styles";
import useScrollAnimation from "../../hooks/useScrollAnimation";

// Array de objetos com as suas habilidades
const skills = [
  { name: "Node", icon: "⚫" },
  { name: "React", icon: "⚛️" },
  { name: "Tailwind CSS", icon: "💨" },
  { name: "CSS", icon: "🎨" },
  { name: "Html 5", icon: "🌐" },
  { name: "Asp .Net", icon: "🖥️" },
  { name: "C#", icon: "🚀" },
  { name: "Figma", icon: "🖌️" },
  { name: "Angular", icon: "🅰️" },
  { name: "SQL Server", icon: "🗄️" },
  { name: "MySql", icon: "🐬" },
  { name: "Photoshop", icon: "🖼️" },
  { name: "Illustrator", icon: "✒️" },
  { name: "CorelDraw", icon: "✏️" },
  { name: "Python", icon: "🐍" },
  { name: "Machine Learning", icon: "🧠" },
];

const SkillsSection = () => {
  const setRef = useScrollAnimation();
  return (
    <S.SkillsContainer id="habilidades" ref={setRef}>
      <S.Title>Habilidades</S.Title>
      <S.SkillsGrid>
        {skills.map((skill, index) => (
          <S.SkillItem key={index}>
            <S.SkillIcon>{skill.icon}</S.SkillIcon>
            <S.SkillName>{skill.name}</S.SkillName>
          </S.SkillItem>
        ))}
      </S.SkillsGrid>
    </S.SkillsContainer>
  );
};

export default SkillsSection;