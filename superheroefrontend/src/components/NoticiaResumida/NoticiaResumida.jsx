import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'antd';
import { Link, useHistory } from 'react-router-dom';
import { InfoCircleFilled } from '@ant-design/icons';
import axios from 'axios';





export default function NoticiaResumida() {
// variable
  const history = useHistory();
  // variable de estado por que tiene useState
  const [respuestanoticia, setRespuestaNoticia] = useState([]);
  console.log(respuestanoticia);

// funcion

  const traerid = (id) => {console.log(id)
  history.push(`/noticias/${id}`)
  }
  

// useEffect es un hook
  useEffect(() => {
    const getnoticias = async () => {
      axios.get("http://localhost:3000/articuloFanzine")
        .then((res) => {
          console.log(res.data);
          setRespuestaNoticia(res.data.articuloFanzine)
        })
        .catch((error) => {
          console.log(error.data);
        })

    }
    getnoticias();
  }, [])

 
// aqui comienza el componente
return (
  <>

    <div >
      {
        respuestanoticia.map((respuesta) => (
          <div className="">
            <a href="#">
              <img className="img-fluid" src={respuesta.imagen}></img>
            </a>
            <h4 style={{fontSize: '20px', paddingTop: '10px'}}>
              {respuesta.titulo}
            </h4>
            <p className="description">
              {respuesta.resumen}
            </p>
            <div style={{ display: 'flex', justifyContent: 'center', paddingTop: '10px' }}>

              <Button onClick={() => {traerid(respuesta._id)}} shape="round" icon={<InfoCircleFilled />} style={{ display: 'flex', justifyContent: 'center', paddingTop: '6px' }} >
              </Button>

            </div>
          </div>
        ))
      }
    </div>
  </>

);
};
