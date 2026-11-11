import './App.css';

import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Services from './components/Services';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <main>
        <section id="home">
          <Home />
        </section>

        <section id="about">
          <About />
        </section>

        <section id="portfolio">
          <Portfolio />
        </section>

        <section id="skills">
          <Skills />
        </section>
<section id="skills">
          <Services />
        </section>
        <section id="contact">
          <Contact />
        </section>
         <section id="footer">
          <Footer />
        </section>
      </main>
    </div>
  );
}

export default App;