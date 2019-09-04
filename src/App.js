import React from 'react';


export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
    }

    //this.handleChange = this.handleChange.bind(this);
    this.handleSave = this.handleSave.bind(this);
  }

  handleSave() {
    localStorage.setItem('email', this.state.email);
  }



  render() {
    return (
      <div className="TOP">
      <nav class="navbar navbar-expand-sm bg-dark navbar-dark sticky-top">
        <ul class="navbar-nav">
          <li class="nav-item active">
            <a class="nav-link" href="">PitWorld</a>
          </li>
          <li class="nav-item">
            <a href="https://www.purina.com/pro-plan/dogs" target="_blank" class="btn btn-dark" role="button">Noticias</a>
          </li>

          <li class="nav-item">
            <a href="https://www.propacultimates.com/" target="_blank" class="btn btn-dark" role="button">Eventos</a>
          </li>

          <li class="nav-item">
            <a href="https://nutrisourcepetfoods.com/homepage" target="_blank" class="btn btn-dark" role="button">¿Quiénes somos?</a>
          </li>
          
        </ul>
      </nav>
      <a class="btn-floating btn-lg btn-fb" type="button" role="button"><i class="fab fa-facebook-f"></i></a>
      <button type="button" class="btn btn-fb"><i class="fab fa-facebook-f pr-1"></i> Facebook</button>
      <a class="btn-floating btn-lg btn-tw" type="button" role="button"><i class="fab fa-twitter"></i></a>
    </div>


     );
  }
}

