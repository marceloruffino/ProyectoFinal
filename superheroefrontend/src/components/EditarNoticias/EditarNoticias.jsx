//@ts-check
import React, { useState, useEffect } from 'react';
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import './EditarNoticias.css'

export default function EditNews() {
  const { id } = useParams();
  const [picture, setPicture] = useState("");
  const [imagen, setImagen] = useState("");
  const [imagen2, setImagen2] = useState("");
  const [titulo, setTitulo] = useState("");
  const [fecha, setFecha] = useState("");
  const [autor, setAutor] = useState("");
  const [descripcion1, setDescripcion1] = useState("");
  const [descripcion2, setDescripcion2] = useState("");
  const [resumen, setResumen] = useState("");

  const [loading, setLoading] = useState(false);
  const [respuestaMensaje, setRespuestaMensaje] = useState("");

  useEffect(() => {
    const fetchNoticias = async (e) => {
      try {
        const response = await axios.get(
          `http://localhost:3000/articuloFanzine/${id}`
        );
        const { imagen, imagen2, titulo, fecha, autor, descripcion1, descripcion2, resumen } = response.data.articuloFanzine;
        setImagen(imagen)
        setImagen2(imagen2)
        setTitulo(titulo)
        setFecha(fecha)
        setAutor(autor)
        setDescripcion1(descripcion1)
        setDescripcion2(descripcion2)
        setResumen(resumen)
      } catch (error) {
        console.log("fetchNoticias -> error", error)
      }
    };
    fetchNoticias();
  }, []);


  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      setLoading(true);
      const payload = new FormData();
      picture && picture[0] && payload.append("imagen", picture[0]);
      picture && picture[1] && payload.append("imagen", picture[1]);
      payload.append("titulo", titulo.toString());
      payload.append("fecha", fecha.toString());
      payload.append("autor", autor.toString());
      payload.append("descripcion1", descripcion1.toString());
      payload.append("descripcion2", descripcion2.toString());
      payload.append("resumen", resumen.toString());

      const response = await axios.put(
        `http://localhost:3000/articuloFanzine/${id}`,
        payload
      );
      setRespuestaMensaje(response.data.mensaje);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const handlePicture = (e) => {
    setPicture(e.target.files);
    setImagen('')
    setImagen2('')
  };

  const imageURL = imagen || (picture && URL.createObjectURL(picture[0]));
  const imageURL2 = imagen2 || (picture && URL.createObjectURL(picture[1]));

  return (
    <div>
      <div >
        <form
          className='FormularioAgregar'
          onSubmit={handleSubmit}>
          <label >Imagenes</label>
          <div style={{ display: 'flex', padding: '5px' }}>

            <img src={imageURL} style={{ width: 200 }} />
            <img src={imageURL2} style={{ width: 200 }} />
          </div>
          <input
            type="file"
            multiple
            onChange={handlePicture}
          />
          <br></br>
          <label >Titulo</label>
          <input
            type="text"
            value={titulo}
            onChange={(e) => setTitulo(e.target.value)}

          />
          <br></br>

          <label >Fecha</label>
          <input
            type="text"
            value={fecha}
            onChange={(e) => setFecha(e.target.value)}

          />
          <br></br>
          <label >Autor</label>
          <input
            type="text"
            value={autor}
            onChange={(e) => setAutor(e.target.value)}

          />
          <br></br>
          <label >Texto Resumido</label>
          <textarea
            type="text"
            value={resumen}
            onChange={(e) => setResumen(e.target.value)}

          ></textarea>

          <label>Texto Principal</label>
          <textarea
            type="text"
            value={descripcion1}
            onChange={(e) => setDescripcion1(e.target.value)}

          ></textarea>
          <br></br>
          <label>Texto Secundario</label>
          <textarea
            type="text"
            value={descripcion2}
            onChange={(e) => setDescripcion2(e.target.value)}
          ></textarea>
          <br></br>

          {loading ? (
            <span >Loading...</span>
          ) : (
              <button className=" bg-blue-700 rounded p-2" type="submit">
                Modificar
              </button>
            )}
          <p className="text-white">{respuestaMensaje}</p>

        </form>
      </div>
    </div>
  );
}
