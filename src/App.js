import logo from './logo.svg';
import './App.css';

import Nav from './pages/Nav';
import Home from './pages/Home';
import Kontak from './pages/Kontak';
import Sejarah from './pages/Sejarah';
import Tentang from './pages/Tentang';
import Siswa from './pages/Siswa';
import Menu from './pages/Menu';
import { BrowserRouter, Route, Switch } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Nav />
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/kontak" component={Kontak} />
          <Route path="/sejarah" component={Sejarah} />
          <Route path="/tentang" component={Tentang} />
          <Route path="/siswa" component={Siswa} />
          <Route path="/menu" component={Menu} />

        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
