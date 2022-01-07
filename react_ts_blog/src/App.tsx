import React from 'react';
import './App.css';
import 'antd/dist/antd.css';
import { Route, Routes } from 'react-router-dom';
import Home from './page/home/home';
import PaddingBox from "./components/PaddingBox/PaddingBox";
import MenuHeader from './components/MenuHeader/index'
import LogoBox from "./components/LogoBox";
import Fan from './page/algorithm/algorithm';
import Acticle from './page/frontend/frontend';
import Self from './page/self/self';
function App(props: any) {  
    return (
        <div className="App">
           <PaddingBox className="PaddingBox">
            <div className="header_top" style={{height: '100%'}}>
              <LogoBox className="LogoBox"/>
              <MenuHeader></MenuHeader>  
            </div>
          </PaddingBox>
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/home' element={<Home/>}/>
            <Route path='/frontend' element={<Acticle />}/>
            <Route path='/algorithm' element={<Fan />}/>
            <Route path={`/self`} element={<Self />}/>
          </Routes>
        </div>
    );
}

export default App;
