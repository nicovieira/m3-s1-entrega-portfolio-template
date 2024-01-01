import { AboutMeSection } from "./components/AboutMeSection";
import { BannerSection } from "./components/BannerSection";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { ProjectsSection } from "./components/ProjectsSection";
import { TechSection } from "./components/TechSection";
import { user, username } from "./data/user";

function App() {
  return (
    <>
      <Header />
      <BannerSection user={username} />
      <AboutMeSection />
      <TechSection />
      <ProjectsSection />
      <Footer user={user} />
    </>
  );
}

export default App;
