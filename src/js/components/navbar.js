import React, { Component } from "react";

class Navbar extends Component {
  render() {
    return (
      <nav>
        <ul>
          <li className="logo">
            James Grey<span> Consulting</span>
          </li>
        </ul>
        <ul>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Mission</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </ul>
      </nav>
    );
  }
}

export default Navbar;
