import './App.css';
import About from './components/About';
import Banner from './components/Banner';
import Community from './components/Community';
import Faq from './components/Faq';
import Footer from './components/Footer';
import Header from './components/Header';
import MInt from './components/MInt';
import Roadmap from './components/Roadmap';
import Team from './components/Team';

function App() {
  return (
    <div className="App bg-black">
      <Header/>
      <Banner/>
      <About/>
      <MInt/>
      <Community/>
      <Roadmap/>
      <Team/>
      <Faq/>
      <Footer/>
    </div>
  );
}

export default App;
