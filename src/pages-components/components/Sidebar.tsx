import React from 'react';
import { NavLink } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className="sidebar">
        <ul>
          <li>
            <NavLink to="/home"  className={(nav)=> nav.isActive ? "active":""} >
              Dashboard
            </NavLink>
          </li>
          <li>
            <NavLink to="/profil"  className={(nav)=> nav.isActive ? "active":""} >
              Profil
            </NavLink>
          </li>
        </ul>
    </div>
  );
};

export default Sidebar;