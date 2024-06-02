import './App.css';
import Contact from './components/Contact';
import Desc from './components/Desc';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Project from './components/Projects';
import Skills from './components/Skills';

function App() {
  return (
    <div className='bg-[#12071F] w-[100vw] h-full'>
      <Navbar/>
      <Hero/>
      <Desc/>
      <Skills/>
      <Project/>
      <Contact/>
    </div>
  );
}

export default App;
