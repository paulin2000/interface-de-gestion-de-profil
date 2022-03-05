import {BrowserRouter, Routes, Route} from "react-router-dom"
import Admin from "./Admin";
import Client from "./Client";
import Home from './Home';
import Partner from "./Partner";
import Profil from "./Profil";
import Shipper from "./Shipper";

const Index = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/profil" element={<Profil />} />
        <Route path="/client" element= {< Client/>}/>
        <Route path="/partner" element= {< Partner/>}/>
        <Route path="/shipper" element= {< Shipper/>}/>
        <Route path="/admin" element= {< Admin/>}/>
        <Route path="*" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Index;