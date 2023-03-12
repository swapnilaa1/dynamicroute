//import logo from './logo.svg';
//import './App.css';

import { Route, Routes } from "react-router-dom";
import NavItems from "./components/NavItems/NavItems";
import Portmain from "./components/Portmain/Portmain";
import Portsub from "./components/Portsub/Portsub";
import Portsubmain from "./components/Portsubmain/Portsubmain";
import Portsubpart from "./components/Portsubpart/Portsubpart";
import SubSubPart from "./components/SubSubPart/SubSubPart";
import Connect from "./pages/Connect/Connect";
import Holdings from "./pages/Holdings/Holdings";
import Home from "./pages/Home/Home";
import Others from "./pages/Others/Others";
import Portfolio from "./pages/Portfolio/Portfolio";
import "bulma/css/bulma.min.css"; 

function App() {
  return (
    <div className="App">
      <NavItems/>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="holdings" element={<Holdings />}/>
        <Route path="others" element={<Others />}/>
        <Route path="connect" element={<Connect />}/>
        <Route path="/portfolio" element={<Portfolio />}>
          <Route index element={<Portmain />} />
          <Route path=":id1"  element={<Portsub />} >
            <Route index element={<Portsubmain/>}/>
              <Route path=":id2" element={<Portsubpart/>} >
                <Route path=":id3" element={<SubSubPart />}/>
              </Route>
          </Route>
         
        </Route>
      </Routes>
    </div>
  );
}

export default App;
