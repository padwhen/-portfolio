import About from "./components/About";
import AirbnbAnalysis from "./components/AirbnbAnalysis";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import { AppProvider } from "./AppContext";

function App() {
  return (
    <AppProvider>
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Projects />
    </AppProvider>      
  );
}

export default App;
