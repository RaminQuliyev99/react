import React from 'react';
import {NavLink} from 'react-router-dom'



const Navbar = () => {


    return (
        <div >
            <nav className={`navbar navbar-expand-lg `} >
  <div className="container-fluid">
    <a className="navbar-brand text-success" href="#">Navbar</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <NavLink className="nav-link active text-primary" aria-current="page" to="/">Home</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link text-primary" to="/add">Add</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link text-primary" to="/list">List</NavLink>
        </li>
      </ul>
    </div>
  </div>
</nav>
        </div>
    );
}

export default Navbar;