import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState, useEffect } from 'react';
import Index from './pages';

interface userInfo{
  id: string | null,
  username: string  | null,
  access: string | null
}
const defaultState = {
  id: "id",
  username:"paulin",
  access: "shipper"
}
export const UserInfoContext = React.createContext<userInfo>(defaultState)


function App() {
  const[ userInfo, setUserInfo] = useState<userInfo>(defaultState)

  useEffect(()=>{
    
    //recupérer l'objet ayant comme type userInfo depuis le serveur et l'envoyer au provider

  },[userInfo])
  return (
    <div className="App">
      <UserInfoContext.Provider value={userInfo}>
        <Index/>  
      </UserInfoContext.Provider>
    </div>
  );
}

export default App;
