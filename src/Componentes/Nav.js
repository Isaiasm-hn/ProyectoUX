import React from 'react';
import '../App.css';
import { Link } from 'react-router-dom';
function Nav() {
  return (
    <nav class="navbar navbar-expand-sm bg-dark navbar-dark sticky-top">
      <ul class="navbar-nav">
        <Link to='/'>
          <li class="nav-item active">
            <a class="nav-link" href="">PitWorld</a>
          </li>
        </Link>
        <Link to='/Inicio'>
          <li class="nav-item"><a href="" class="btn btn-dark" role="button">Inicio</a></li>
        </Link>
        <Link to='/Noticias'>
          <li class="nav-item"><a href="" class="btn btn-dark" role="button">Noticias</a></li>
        </Link>
        <Link to='/Eventos'>
          <li class="nav-item"><a href="" class="btn btn-dark" role="button">Eventos</a></li>
        </Link>
        <Link to='/QuienesSomos'>
          <li class="nav-item"><a href="" class="btn btn-dark" role="button">¿Quienes somos?</a></li>
        </Link>
        <li class="nav-item">
          <a href="https://www.facebook.com/PitworldAssociation/" target="_blank" class="btn btn-dark" role="button">Facebook</a>
        </li>
        <li class="nav-item">
          <a href="https://www.instagram.com/pitworldassociation/" target="_blank" class="btn btn-dark" role="button">Instagram</a>
        </li>

        <Link to='/Login'>
          <li class="nav-item"><a href="" class="btn btn-dark" role="button">Login</a></li>
        </Link>

      </ul>
    </nav>
  );
}

export default Nav;
