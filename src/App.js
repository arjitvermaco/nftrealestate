import './App.css';
import About from './components/About';
import Banner from './components/Banner';
import Header from './components/Header';
import MInt from './components/MInt';
import Roadmap from './components/Roadmap';

function App() {
  return (
    <div className="App bg-black">
      <Header/>
      <Banner/>
      <About/>
      <MInt/>
      <Roadmap/>
    </div>
  );
}

export default App;
