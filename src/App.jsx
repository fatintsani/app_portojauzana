import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Education from './components/Education';
import Experience from './components/Experience';
import Footer from './components/Footer';
import AccessibilitySettings from './components/AccessibilitySettings';
import { AccessibilityProvider } from './context/AccessibilityContext';

function App() {
  return (
    <AccessibilityProvider>
      <div className="bg-[#F8F9FA] dark:bg-[#121212] min-h-screen transition-colors duration-300">
        <Navbar />
        <Hero />
        <About />
        <Education />
        <Experience />
        <Footer />
        <AccessibilitySettings />
      </div>
    </AccessibilityProvider>
  );
}

export default App;
