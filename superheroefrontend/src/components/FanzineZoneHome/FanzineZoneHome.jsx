//@ts-check
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./FanzineZoneHome.css";
import { Button } from 'antd';
import { Link } from 'react-router-dom';
import { InfoCircleFilled } from '@ant-design/icons';



import News2 from './fotoFanzineHome/FanzineHome002.jpg'
import News3 from './fotoFanzineHome/FanzineHome003.jpg'
import NoticiaResumida from '../NoticiaResumida/NoticiaResumida';



export default function FanzineZoneHome() {
  return (
    <div >
        <div className="intro">
          <h2 className="text-center">
            Últimas Noticias
            </h2>
          <p className="text-center">
            Entérate de las últimas Novedades de nuestro Universo Comic. Super Heroe te acerca la base de datos mas fantástica.
            </p>
        </div>
        <div>
        <NoticiaResumida />
        </div>
        <div>
        <NoticiaResumida />
        </div><div>
        <NoticiaResumida />
        </div>
        </div>
     
  );
}
