import { NavLink } from "react-router-dom";
import { useEffect, useState, useContext } from 'react';
import { UserInfoContext } from '../../App';
import AOS from "aos"
import 'aos/dist/aos.css';

const Main = () => {

  const [welcome , setWelcome] = useState<boolean>(false)
  const user = useContext(UserInfoContext)

  useEffect(()=>{
    AOS.init({
      duration:2000
    }); 
    AOS.refresh();
    if(localStorage.getItem("welcome")){
      setWelcome(false)
    }else{
      setWelcome(true)
      setTimeout(()=>{
        setWelcome(false)
        localStorage.setItem("welcome","welcome")
      },10000)
    } 
  },[])


  
  return (
    <div className="main">
      {welcome === true && <div data-aos="fade-down"className="welcome">
        Welcome {user.access} {user.username}
      </div>}
      <div className="nav-bar">
        <ul>
          <li className='admin'>
            <NavLink to="/admin" >
              Admin
            </NavLink>
          </li>
          <li className='client'>
            <NavLink to="/client" >
              Client
            </NavLink>
          </li>
          <li className='partner'>
            <NavLink to="/partner" >
              Partner
            </NavLink>
          </li>
          <li className='shipper'>
            <NavLink to="/shipper" >
              Shipper
            </NavLink>
          </li>
        </ul>
      </div>
      </div>
  );
};

export default Main;