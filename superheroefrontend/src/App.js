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
import Registrar from "./pages/Registrar";
import SingIn from "./pages/SingIn";
import Administrar from "./pages/Administrar";
import Agregar from "./pages/AgregarComics";
import AdminRegistros from "./pages/AdminRegistros";
import ModificarComics from "./pages/ModificarComics";
import AgregarCardConme from "./pages/AgregarCardConme";
import Noticias from "./pages/Noticias";
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
        <Route path="/noticias">
          <Noticias />
          </Route>
        <Route path="/agregarcardconme">
          <AgregarCardConme />
          </Route>
        <Route path="/modificarcomics">
          <ModificarComics />
          </Route>
        <Route path="/adminregistros">
          <AdminRegistros />
          </Route>
        <Route path="/agregarcomics">
          <Agregar />
          </Route>
        <Route path="/administrar">
          <Administrar />
          </Route>
          <Route path="/signin">
          <SingIn />
          </Route>
          <Route path="/registrar">
            <Registrar />
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
