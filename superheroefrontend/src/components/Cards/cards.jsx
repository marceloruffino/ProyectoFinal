//@ts-check
import React, { useState, useEffect } from 'react';
import { Card, } from 'antd';
import { InfoCircleOutlined, InstagramOutlined } from '@ant-design/icons';
import 'antd/dist/antd.css';
import './Card.css';
import axios from 'axios';
import HeartLikes from '../BotonCorazon/BotonCorazon';
import { useHistory } from 'react-router-dom';

const { Meta } = Card;

const Tarjeta = () => {
  // variable
  const history = useHistory();


  const [respuestatarjeta, setRespuestatarjeta] = useState([]);
  console.log(respuestatarjeta);

  // funcion

  const traerid = (id) => {console.log(id)
    history.push(`/articulocomics/${id}`)
    }

  useEffect(() => {
    const getlistadodetarjetas = async () => {
      axios.get("http://localhost:3000/articuloComics")
        .then((res) => {
          console.log(res.data);
          setRespuestatarjeta(res.data.articuloComics)
        })
        .catch((error) => {
          console.log(error.data);
        })

    }
    getlistadodetarjetas();
  }, [])

  return (

    <div className='CardsContainer'> {

      respuestatarjeta.map((respuesta) => (

        <Card

          cover={
            <img
              alt="comics"
              src={respuesta.imagen}
            ></img>
          }
          
          actions={[
            <InfoCircleOutlined onClick={() => {traerid(respuesta._id)}} />,
            <InstagramOutlined />,
            <HeartLikes idComics={respuesta._id} initialValue={respuesta.likes} />,
          ]}
          key={respuesta._id}
        >
          
          <Meta
            title={respuesta.titulo}
            description={respuesta.resumen}
          />
          <br></br>
          <p>Cantidad: {respuesta.cantidad}</p>
          <p>Precio: ${respuesta.precio}</p>
        </Card>


      ))
    }
    </div>


  );


};
export default Tarjeta;
