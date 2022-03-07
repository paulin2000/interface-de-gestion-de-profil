import {BrowserRouter, Routes, Route} from "react-router-dom"
import ProtectedRoute from "../pages-components/components/ProtectedRoute";
import Admin from "./Admin";
import Client from "./Client";
import Home from './Home';
import Partner from "./Partner";
import Profil from "./Profil";
import Shipper from "./Shipper";
import Login from './Login';
import PageNotFound from './PageNotFound';

interface User{
  id:string,
  name:string ,
  permission:string
}

const user:User ={
  id:"ezrze",
  name:"paulin",
  permission: "admin"
}
const Index = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login/>} />
        <Route 
          path="/home" 
          element={<ProtectedRoute 
                      redirectPath="/"
                      userId = {user.id}
                      isAllowed={user.id!==null}>
                        <Home/>
                  </ProtectedRoute>
          } />
        <Route 
          path="/profil" 
          element={<ProtectedRoute 
                    redirectPath="/"
                    userId = {user.id}
                    isAllowed={user.id!==null}>
                      <Profil/>
                   </ProtectedRoute>} />
        <Route 
          path="/client" 
          element= {<ProtectedRoute 
                      redirectPath="/home"
                      userId = {user.id}
                      isAllowed={user.permission === "client"}>
                        <Client/>
                    </ProtectedRoute>
                   }/>
        <Route path="/partner" 
        element= {<ProtectedRoute 
                      redirectPath="/home"
                      userId = {user.id}
                      isAllowed={user.permission === "partner"}>
                        <Partner/>
                    </ProtectedRoute>
                   }/>
        <Route path="/shipper" 
          element= {<ProtectedRoute 
                      redirectPath="/home"
                      userId = {user.id}
                      isAllowed={user.permission === "shipper"}>
                        <Shipper/>
                    </ProtectedRoute>
                    }
        />
        <Route path="/admin" 
          element= {<ProtectedRoute 
                      redirectPath="/home"
                      userId = {user.id}
                      isAllowed={user.permission === "admin"}>
                        <Admin/>
                    </ProtectedRoute>
                    }
        />
        <Route path="*" 
          element= {<ProtectedRoute 
                      redirectPath="/home"
                      userId = {user.id}
                      isAllowed={true}>
                        <PageNotFound/>
                    </ProtectedRoute>
                    } />
      </Routes>
    </BrowserRouter>
  );
};

export default Index;