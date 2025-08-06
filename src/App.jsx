import { ThemeProvider } from 'styled-components';
import GlobalStyles from './styles/GlobalStyles';
import Header from '../src/components/Header/Header';
import HeroSection from '../src/components/HeroSection/HeroSection';
import SkillsSection from '../src/components/SkillsSection/SkillsSection';
import ProjectsSection from '../src/components/ProjectsSection/ProjectsSection';
import AboutSection from '../src/components/AboutSection/AboutSection';
import theme from './styles/theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Header />
      <main>
        <HeroSection />
        <SkillsSection />
        <ProjectsSection />
        <AboutSection />
      </main>
    </ThemeProvider>
  );
}

export default App;