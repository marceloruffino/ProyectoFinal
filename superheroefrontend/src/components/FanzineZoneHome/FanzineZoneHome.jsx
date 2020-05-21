import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./FanzineZoneHome.css";
import { InfoCircleOutlined } from '@ant-design/icons';
import { Button } from 'antd';
import { Link } from 'react-router-dom';
import { FileAddOutlined } from '@ant-design/icons';



import News1 from './fotoFanzineHome/FanzineHome001.jpg'
import News2 from './fotoFanzineHome/FanzineHome002.jpg'
import News3 from './fotoFanzineHome/FanzineHome003.jpg'



export default function FanzineZoneHome() {
  return (
    <div className="article-list">
      <div className="container">
        <div className="intro">
          <h2 className="text-center">
            Últimas Noticias
            </h2>
          <p className="text-center">
            Entérate de las últimas Novedades de nuestro Universo Comic. Super Heroe te acerca la base de datos mas fantástica.
            </p>
        </div>
        <div className="row articles">
          <div className="col-sm-6 col-md-4 item">
            <a href="#">
              <img className="img-fluid" src={News1}></img>
            </a>
            <h3 className="name">
            Temporada dos de Doom Patrol
                </h3>
            <p className="description">
            Los inadaptados favoritos de los fanáticos de Crazy Jane (Diane Guerrero - "Orange is the New Black") Cliff Steele / Robotman (Brendan Fraser - "The Mummy"), Larry Trainer / Negative Man (Matt Bomer - "American Horror Story") Rita Farr / Elasti-Woman (April Bowlby - "Two and a Half Men") y Vic Stone / Cyborg (Joivan Wade - "Doctor Who") regresan en la segunda temporada de DOOM PATROL en DC UNIVERSE, con nuevos episodios que debutan todos los jueves.
                </p>
                <div className='botonAgregar'>
            <Link to="noticias">
                <Button shape="round" icon={<FileAddOutlined />} >
                </Button>
             </Link>
      </div>
          </div>
          <div className="col-sm-6 col-md-4 item">
            <a href="#">
              <img className="img-fluid" src={News2}></img>
            </a>
            <h3 className="name">
            DC Revela Trailer Exclusivo
                </h3>
            <p className="description">
            DC UNIVERSE (DCU), el servicio de suscripción digital de DC, reveló hoy un avance exclusivo de su próxima serie dramática original, STAR’GIRL de DC. Sirviendo como el trailer oficial disponible para los fanáticos antes del estreno del programa el lunes 18 de mayo. el nuevo avance incluye imágenes del programa muy esperado y destaca las ofertas exclusivas que los miembros de DCU recibirán cuando vean STARGIRL de DC directamente en el servicio.
                </p>
            <a href="#" className="action">
            <InfoCircleOutlined />
            </a>
          </div>
          <div className="col-sm-6 col-md-4 item">
            <a href="#">
              <img className="img-fluid" src={News3}></img>
            </a>
            <h3 className="name">
              Flash tiene un problema
              </h3>
            <p className="description">
            Han pasado varias semanas desde nuestro último cómic Flash y considerando dónde dejamos las cosas para Barry y su equipo, la espera no ha sido fácil. "The Flash Age", la historia actual que enfrenta a Barry contra el nuevo villano formidable conocido como Paradox, ya ha visto a Flash derrotado y aparentemente asesinado a manos de su nuevo adversario. ya que muchos de los libros más populares de DC comienzan a regresar a tiendas y medios digitales.
              </p>
            <a href="#" className="action">
            <InfoCircleOutlined />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
