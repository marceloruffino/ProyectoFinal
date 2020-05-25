import React, { useState, useEffect } from 'react';
import './ArticuloComicsConme.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { useParams } from 'react-router-dom';

import axios from 'axios';


export default function ArticuloComicsConme() {


    const { id } = useParams();
    console.log("Noticias -> id", id)

    const [titulo, setTitulo] = useState('');
    const [fecha, setFecha] = useState('');
    const [autor, setAutor] = useState('');
    const [imagen, setImagen] = useState('');
    const [imagen2, setImagen2] = useState('');
    const [descripcion1, setDescripcion1] = useState('');
    const [descripcion2, setDescripcion2] = useState('');


    useEffect(() => {
        const getcomics = async (e) => {
            axios.get(`http://localhost:3000/articuloComicsConme/${id}`)
                .then((res) => {
                    console.log(res.data);
                    setTitulo(res.data.articuloComicsConme.titulo);
                    setFecha(res.data.articuloComicsConme.fecha);
                    setAutor(res.data.articuloComicsConme.autor);
                    setImagen(res.data.articuloComicsConme.imagen);
                    setImagen2(res.data.articuloComicsConme.imagen2);
                    setDescripcion1(res.data.articuloComicsConme.descripcion1);
                    setDescripcion2(res.data.articuloComicsConme.descripcion2)
                })
                .catch((error) => {
                    console.log(error.data);
                })

        }
        getcomics();
    }, [])
    return (

        <div className="article-dual-column">
            <div className="container">

                <div className="col-md-10 offset-md-1">
                    <div className="intro">
                        <h1 className="text-center">{titulo}
                        </h1>
                        <p className="text-center">
                            <span className="by">por</span>
                            <a href="#">{autor}</a>
                            <span className="date">{fecha} </span>
                        </p>
                    </div>
                    <div className='FotoCenter'>
                        <img className="img-fluid" src={imagen}></img>
                    </div>
                    <div className="textArticulo">
                        <p>{descripcion1}</p>
                    </div>
                    <div className='FotoCenter'>
                        <img className="img-fluid" src={imagen2}></img>
                    </div>
                    <div className="textArticulo">
                        <p style={{paddingBottom: '30px', marginBottom: '10px', borderBottom: '1px solid' }}>{descripcion2}
                        </p>
                    </div>
                </div>

            </div>

        </div>



    );
};
