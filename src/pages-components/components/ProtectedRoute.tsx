import React from 'react';
import {Navigate, Outlet} from 'react-router-dom'
import AccesError from './AccesError';

interface Props{
  isAllowed: boolean
  redirectPath: string
  children: React.ReactElement 
  userId: string | null
}
const ProtectedRoute = (props: Props) => {
    if(props.userId === null){
      return <Navigate to="/" replace/>
    }
    if(!props.isAllowed){
      return <AccesError/>
    }
    return props.children ? props.children : <Outlet/>

};

export default ProtectedRoute;