import React from 'react';
import './App.css';
import Nav from "./Componentes/Nav";
import Inicio from "./Componentes/Inicio";
import Noticias from "./Componentes/Noticias";
import qsomos from "./Componentes/Quienessomos";
import Login from "./Componentes/Login";
import Events from "./Componentes/Eventos";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import imagen from './Img/full.jpg';



function App() {
  return (

    <Router>
      <div className="App">
        <Nav />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/Inicio" component={Inicio} />
          <Route path="/Noticias" component={Noticias} />
          <Route path="/Eventos" component={Events} />
          <Route path="/QuienesSomos" component={qsomos} />
          <Route path="/Login" component={Login} />
        </Switch>
      </div>
    </Router>
  );
}

const Home = () => (
  <div>
    <img src={imagen} class="rounded" alt="Cinque Terre"></img>
  </div>
)

export default App;
