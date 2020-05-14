//@ts-check
import React from 'react';
import './App.css';
import { Layout } from 'antd';
import NavBar from './components/NavBar/NavBar'
import Footer from './components/Footer/Footer'
import Home from "./pages/Home";
import BookShop from "./pages/BookShop";
import Merchandising from "./pages/Merchandising"
import FanzineZone from "./pages/FanzineZone"
import Administrar from "./pages/Administrar";
import Registrar from "./pages/Registrar";
import AdminRegistros from "./pages/AdminRegistros";
import {   
        BrowserRouter as Router,   
        Switch,   
        Route,   
        Link 
        } from "react-router-dom";  

const { Content } = Layout;

  
  export default function App() {   
    return (     
    <Router>       
      <div>         
         <Content>
         <NavBar />
          </Content>      
        <Switch>
        <Route path="/adminregistros">
            <AdminRegistros/>
          </Route>
        <Route path="/administrar">
            <Administrar/>
          </Route>
          <Route path="/registrar">
            <Registrar/>
          </Route>
        <Route path="/fanzinezone">
            <FanzineZone />
          </Route>
          <Route path="/merchandising">
            <Merchandising />
          </Route>
          <Route path="/bookshop">
            <BookShop />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>     
    </div>     
   <Content>
     <Footer />
   </Content>
    </Router>   
    ); 
  } 
    