import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'antd';
import { Link } from 'react-router-dom';
import { InfoCircleFilled } from '@ant-design/icons';

import News1 from './fotoNoticiaResumida/FanzineHome001.jpg'


export default function NoticiaResumida() {
  return (
    <div >
       
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
                <div style={{ display: 'flex', justifyContent: 'center', paddingTop: '10px'}}>
            <Link to="noticias">
                <Button shape="round" icon={<InfoCircleFilled />} style={{ display: 'flex', justifyContent: 'center', paddingTop: '6px'}} >
                </Button>
             </Link>
        </div>
     </div>
     </div>
     </div>
     
  );
}
