import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Aboutme from "./components/Aboutme";
import Portfolio from "./components/Portfolio";
import Skills from "./components/Skills";

function App() {
  return (
    <div className="min-h-screen bg-base-100 transition-colors duration-300">
      <Navbar />
      <main className="container mx-auto px-4 pt-24 md:pt-28">
      </main>
      <Hero />
      <Aboutme />
      <Portfolio />
      <Skills />

    </div>
  );
}

export default App;