import React, { Component } from 'react';
import Navbar from "./navbar";

class Header extends Component {
  render() {
    return (
     
      <header>
      <Navbar/>
        <div className="head">
            <h1>We Help,< br/> We Consult</h1>
            <div>
              <p>Integer posuere leo non erat ornare dictum id vitae magna. Proin consectetur iaculis nisi, ut convallis tortor tempor congue. Curabitur sit amet tempus felis. Duis tellus eros, pellentesque at rhoncus eu, maximus ut diam.</p>
              <div><a className="contact" href="#">Contact Us</a></div>
            </div>
        </div>
       
      </header>
      
    );
  }
}

export default Header;