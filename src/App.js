import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Meme from './components/Meme';
import Image from './components/Image';
import memesData from './components/memesData.json'


function App() {
  return (
    <div>
      <Header />
      <Meme />
      <Image />
    </div>
  );
}

export default App;
