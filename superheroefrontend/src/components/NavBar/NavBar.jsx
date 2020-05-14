//@ts-check
import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";
import LogoBarra from './logo/superHeroLogoBarra.png'

const menu = [
  {
    name: "HOME",
    to: "/",
  },
  {
    name: "BOOKSHOP",
    to: "/bookshop",
  },
  {
    name: "MERCHANDISING",
    to: "/merchandising",
  },
  
  {
    name: "FANZINEZONE",
    to: "/fanzinezone",
  },
  {
    name: "REGISTRARSE",
    to: "/registrar",
  },
  {
    name: "ADMINISTRAR",
    to: "/administrar",
  },
];

export default function NavBar() {
  const [responsive, setResponsive] = useState(false);

  const toggleNavbar = () => setResponsive((state) => !state);

  return (
    <div className={`topnav ${responsive ? "responsive" : ""}`} id="myTopnav">
      <Link to="/" className="active">
       <img src={LogoBarra} alt=""/>
      </Link>
      {menu.map(({ name, to }) => (
        <Link key={name} to={to}>
          {name}
        </Link>
      ))}
      <a className="icon" onClick={toggleNavbar}>
        <i className="fa fa-bars"></i>
      </a>
    </div>
  );
}
