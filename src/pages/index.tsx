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
import { useContext } from "react";
import { UserInfoContext } from "../App";


interface userInfo{
  id:string | null,
  username:string | null,
  access:string | null
}


const Index = () => {
  const user:userInfo = useContext(UserInfoContext)
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
                      isAllowed={user.access === "client"}>
                        <Client/>
                    </ProtectedRoute>
                   }/>
        <Route path="/partner" 
        element= {<ProtectedRoute 
                      redirectPath="/home"
                      userId = {user.id}
                      isAllowed={user.access === "partner"}>
                        <Partner/>
                    </ProtectedRoute>
                   }/>
        <Route path="/shipper" 
          element= {<ProtectedRoute 
                      redirectPath="/home"
                      userId = {user.id}
                      isAllowed={user.access === "shipper"}>
                        <Shipper/>
                    </ProtectedRoute>
                    }
        />
        <Route path="/admin" 
          element= {<ProtectedRoute 
                      redirectPath="/home"
                      userId = {user.id}
                      isAllowed={user.access === "admin"}>
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