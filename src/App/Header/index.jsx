import { Link } from "react-router-dom";
import React from "react";

const Header = () => (
    <header>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/roster">Roster</Link></li>
          <li><Link to="/schedule">Schedule</Link></li>
          <li><Link to="/crear-producto">Nuevo producto</Link></li>
          <li><Link to="/login">Login</Link></li>
        </ul>
      </nav>
    </header>
);

export default Header;