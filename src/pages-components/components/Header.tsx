import { NavLink } from 'react-router-dom';
import { useContext } from 'react';
import { UserInfoContext } from '../../App';
import FontAwesomeIcon from "react-fontawesome"


const Header = () => {
  const user = useContext(UserInfoContext)

  const  handleLogout = ()=>{
    localStorage.removeItem('welcome')
    //delete token, all localStorage Datas and redirect to login page
    window.location.href="/"
  }
  return (
    <div className="header">
        <div className="logo">
         <NavLink to="/home">Portail</NavLink>
        </div>
        <div className="left-nav">
          <ul>
            <li><NavLink to="/profil"><img src="img/logo192.jpg" className= "user-pic"alt='user-pic'/></NavLink></li>
            <li><NavLink to="/profil">{user.username}</NavLink></li>
            <li><NavLink to={`/${user.access}`}>{user.access}</NavLink></li>
            <li className="logout" onClick={handleLogout}>
              Logout
              <i className="fas fa-sign-out"></i>
            </li>
          </ul>
        </div>
      </div>
  );
};

export default Header;