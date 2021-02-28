import { faHamburger } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const Nav = () => {
  const [toggleMenu, setToggle] = useState(false);
  const handleClick = () => {
    if (toggleMenu) {
      setToggle(false);
    } else {
      setToggle(true);
    }
  };
  return (
    <div className="nav">
      <h4>
        agency<small className="x">x</small>
      </h4>
      <div className="link-grp" id={toggleMenu ? 'show-menu' : 'hide-menu'}>
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
      <FontAwesomeIcon
        icon={faHamburger}
        className="hamburger"
        onClick={handleClick}
      />
    </div>
  );
};

export default Nav;
