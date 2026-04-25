import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import ProjectSection from './components/ProjectSection';
import Timeline from './components/Timeline';
import BlogSection from './components/BlogSection';
import Footer from './components/Footer';
import AccessibilitySettings from './components/AccessibilitySettings';
import { AccessibilityProvider } from './context/AccessibilityContext';

function App() {
  return (
    <AccessibilityProvider>
      <div className="bg-[var(--bg-color)] min-h-screen">
        <Navbar />
        <main>
          <Hero />
          <About />
          <ProjectSection />
          <Timeline />
          <BlogSection />
        </main>
        <Footer />
        <AccessibilitySettings />
      </div>
    </AccessibilityProvider>
  );
}

export default App;
