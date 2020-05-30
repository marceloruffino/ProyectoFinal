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
import AdministrarComics from "./pages/AdministrarComics";
import AdministrarComicsConme from "./pages/AdministrarComicsConme";
import AgregarCardConme from "./pages/AgregarCardConme";
import AgregarNoticia from "./pages/AgregarNoticia";
import AdministrarNoticia from "./pages/AdministrarNoticia";
import Noticias from "./pages/Noticias";
import VideoFondoPantalla from "./pages/VideoFondoPantalla";
import ArticuloComics from "./pages/ArticuloComics";
import ArticuloComicsConme from "./pages/ArticuloComicsConme";
import EditarComics from "./pages/EditarComics";
import EditarNoticias from "./pages/EditarNoticia";
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
        <Route path="/videofondopantalla">
          <VideoFondoPantalla />
          </Route>
        <Route path="/articulocomicsconme/:id">
          <ArticuloComicsConme />
          </Route>
        <Route path="/articulocomics/:id">
          <ArticuloComics />
          </Route>
        <Route path="/noticias/:id">
          <Noticias />
          </Route>
        <Route path="/agregarcardconme">
          <AgregarCardConme />
          </Route>
        <Route path="/administrarcomicsconme">
          <AdministrarComicsConme />
          </Route>
        <Route path="/adminregistros">
          <AdminRegistros />
          </Route>
        <Route path="/adminitrarnoticia">
          <AdministrarNoticia />
          </Route>
        <Route path="/agregarnoticia">
          <AgregarNoticia />
          </Route>
        <Route path="/editarnoticias/:id">
          <EditarNoticias />
          </Route>
        <Route path="/editarcomics/:id">
          <EditarComics />
          </Route>
        <Route path="/administrarcomics">
          <AdministrarComics />
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
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/">
            <VideoFondoPantalla />
          </Route>
        </Switch>
      </div>
      <Content>
        <Footer />
      </Content>
    </Router>
  );
}
