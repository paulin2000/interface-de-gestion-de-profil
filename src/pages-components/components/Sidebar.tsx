import React from 'react';
import { NavLink } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className="sidebar">
        <ul>
          <li>
            <NavLink to="/home"  className={(nav)=> nav.isActive ? "active":""} >
              <i className='fa-solid fa-house'/>
              Dashboard
            </NavLink>
          </li>
          <li>
            <NavLink to="/profil"  className={(nav)=> nav.isActive ? "active":""} >
            <i className='fa-solid fa-user'/>
              Profil
            </NavLink>
          </li>
        </ul>
    </div>
  );
};

export default Sidebar;