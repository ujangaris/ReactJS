import logo from './logo.svg';
import './App.css'; 

import Kontak from './pages/Kontak';
import Nav from './pages/Nav';
import Sejarah from './pages/Sejarah';
import Tentang from './pages/Tentang';

function App() {
  return (
    <div className="App">
      <Nav />
      <Kontak />
      <Sejarah />
      <Tentang />
    </div>
  );
}

export default App;
