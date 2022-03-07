import { NavLink } from 'react-router-dom';


const Header = () => {

  const  handleLogout = ()=>{
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
            <li><NavLink to="/admin">Admin</NavLink></li>
            <li><NavLink to="/profil">Username / Email</NavLink></li>
            <li className="logout"onClick={handleLogout}>Logout</li>
          </ul>
        </div>
      </div>
  );
};

export default Header;