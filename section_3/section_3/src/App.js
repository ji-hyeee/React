import './App.css';
import Header from './Header';
import Meme from './Meme';

function App() {
  return (
    <div className="App">
      <Header />

      {/* 3. Build a Meme Generator
      Meme Generator: Form */}
      <Meme />
    </div>
  );
}

export default App;