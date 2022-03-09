import { NavLink } from "react-router-dom";
import { useEffect, useState, useContext } from 'react';
import { UserInfoContext } from '../../App';

const Main = () => {
  const [welcome , setWelcome] = useState<boolean>(false)
  const user = useContext(UserInfoContext)
  useEffect(()=>{

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
      {welcome === true && <div className="welcome">
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