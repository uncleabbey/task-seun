import React from 'react';
import { NavLink } from 'react-router-dom';

const Nav = () => {
  return (
    <div className="nav">
      <h4>
        agency<small className="x">x</small>
      </h4>
      <div className="link-grp">
        <ul className="link-list-cont">
          <li>
            <NavLink to="/home">Home</NavLink>
          </li>
          <li>
            <NavLink to="/services">Services</NavLink>
          </li>
          <li>
            <NavLink to="/projects">Project</NavLink>
          </li>
          <li>
            <NavLink to="/aboutus">about us</NavLink>
          </li>
          <li>
            <NavLink to="/contact">contact</NavLink>
          </li>
        </ul>
        <div className="cta-cont">
          <NavLink to="/projects">
            <button>My Project</button>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Nav;
