import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { WorkExperience } from "./components/WorkExperience";
import { TechStack } from "./components/TechStack";
import { Experience } from "./components/Experience";
import { BeyondCoding } from "./components/BeyondCoding";
import { RecentProjects } from "./components/RecentProjects";
import { SocialLinks } from "./components/SocialLinks";
import { Contact } from "./components/Contact";
import { Gallery } from "./components/Gallery";
import { Footer } from "./components/Footer";
import { ChatButton } from "./components/ChatButton";

function App() {
  return (
    <div className="min-h-screen bg-background">
      <main className="container mx-auto px-4 py-8 md:py-16 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Main Content */}
          <div className="lg:col-span-2 space-y-8">
            <Hero />
            <About />
            <WorkExperience />
            <TechStack />
            <BeyondCoding />
            <RecentProjects />
          </div>

          {/* Right Column - Sidebar */}
          <div className="lg:sticky lg:top-8 lg:self-start space-y-8 lg:max-h-[calc(100vh-4rem)] lg:overflow-y-auto lg:pr-2 scrollbar-hide">
            <Experience />
            <SocialLinks />
            <Contact />
          </div>
        </div>

        {/* Full Width Sections */}
        <div className="mt-8">
          <Gallery />
        </div>
      </main>

      <Footer />
      <ChatButton />
    </div>
  );
}

export default App;
