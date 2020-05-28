//@ts-check
import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import { InfoCircleFilled, InfoCircleOutlined, HeartOutlined, WechatOutlined } from '@ant-design/icons';
import { Button } from 'antd';
import './CardsHome.css';




export default function TarjetaConmemorativa() {
    // variable
    const history = useHistory();


    const [respuestatarjetaconm, setRespuestatarjetaConm] = useState([]);
    console.log(respuestatarjetaconm);

    const traerid = (id) => {
        console.log(id)
          history.push(`/articulocomicsconme/${id}`)
    }
    useEffect(() => {
        const getlistadodetarjetasconm = async () => {
            axios.get("http://localhost:3000/articuloComicsConme")
                .then((res) => {
                    console.log(res.data);
                    setRespuestatarjetaConm(res.data.articuloComicsConme)
                })
                .catch((error) => {
                    console.log(error.data);
                })

        }
        getlistadodetarjetasconm();
    }, [])

    return (

        <div> {
            respuestatarjetaconm.map((respuesta) => (

                <figure className="snip1253" onClick={() => { traerid(respuesta._id) }}>
                    <div className="image"><img src={respuesta.imagen} alt="" /></div>
                    <img style={{display: 'none'}} className="imagenMedia" src={respuesta.imagen} alt="" />
                    <figcaption>
                        <div className="date"><span className="day">{respuesta.fecha}</span><span className="month">Ene</span></div>
                        <h3>{respuesta.titulo}</h3>
                        <p >
                            {respuesta.resumen}
                        </p>
                    </figcaption>
                    <footer>
                        <div className="love"><HeartOutlined /></div>
                        <div className="comments"><WechatOutlined /> 23</div>
                    </footer><a href="#"></a>
           
                </figure>
            ))
        }
        </div>


    );
}