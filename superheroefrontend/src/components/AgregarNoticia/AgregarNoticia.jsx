//@ts-check
import React, { useState } from 'react';
import axios from "axios";
import { Link } from "react-router-dom";
import './AgregarNoticia.css'

export default function AddNews() {
  const [picture, setPicture] = useState("");
  const [titulo, setTitulo] = useState("");
  const [fecha, setFecha] = useState("");
  const [autor, setAutor] = useState("");
  const [descripcion1, setDescripcion1] = useState("");
  const [descripcion2, setDescripcion2] = useState("");
  const [resumen, setResumen] = useState("");

  const [loading, setLoading] = useState(false);
  const [respuestaMensaje, setRespuestaMensaje] = useState("");

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      setLoading(true);
      const payload = new FormData();
      payload.append("imagen", picture[0]);
      payload.append("imagen", picture[1]);
      payload.append("titulo", titulo.toString());
      payload.append("fecha", fecha.toString());
      payload.append("autor", autor.toString());
      payload.append("descripcion1", descripcion1.toString());
      payload.append("descripcion2", descripcion2.toString());
      payload.append("resumen", resumen.toString());






      const response = await axios.post(
        'http://localhost:3000/articuloFanzine',
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
  };

  // const imageURL = picture && URL.createObjectURL(picture);

  return (
    <div>
      <div className='TituloAdministrar'>
        <h2>
          Agregar Noticia
                </h2>
      </div>
      <div>

      </div>
      <div >
        <form
          className='FormularioAgregar'
          onSubmit={handleSubmit}>
          <label >Agregar Imagenes</label>
          {/* {picture && <img src={imageURL} style={{ width: 200 }} />} */}
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
            required
          />
          <br></br>
          <label >Autor</label>
          <input
            type="text"
            value={autor}
            onChange={(e) => setAutor(e.target.value)}
            required
          />
          <br></br>

          <label >Fecha</label>
          <input
            type="text"
            value={fecha}
            onChange={(e) => setFecha(e.target.value)}
            required
          />

          <br></br>
          <label>Texto Principal</label>
          <textarea
            type="text"
            value={descripcion1}
            onChange={(e) => setDescripcion1(e.target.value)}
            required
          ></textarea>
          <br></br>
          <label>Texto Secundario</label>
          <textarea
            type="text"
            value={descripcion2}
            onChange={(e) => setDescripcion2(e.target.value)}
            required
          ></textarea>
          <br></br>
          <label >Texto Resumido</label>
          <textarea
            type="text"
            value={resumen}
            onChange={(e) => setResumen(e.target.value)}
            required
          ></textarea>

          <br></br>

          {loading ? (
            <span >Loading...</span>
          ) : (
              <button className=" bg-blue-700 rounded p-2" type="submit">
                Agregar
              </button>
            )}
          <p className="text-white">{respuestaMensaje}</p>

        </form>
      </div>
    </div>
  );
}
