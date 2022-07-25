import './App.css';
import Appbar from './components/Appbar/Appbar'
import Hero from './components/hero/Hero';
import Aft from './components/Aft/Aft';
import Wsy from './components/Wsy/Wsy';
import Wbm from './components/Wbm/Wbm';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <>
      <div className="gradient__bg">
        <Appbar />
        <Hero />
      </div>
      <Aft />
      <Wsy />
      <Wbm />
      <Contact />
      <div className="gradient__bg" >
        <Footer />
      </div>
    </>
  );
}

export default App;
