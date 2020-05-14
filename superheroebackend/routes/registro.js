const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const ObjectID = mongoose.Types.ObjectId;
const multer = require('multer');
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './imagenesRegistro')
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + '-' + file.originalname)
  }
})
 
var upload = multer({ storage: storage })

const RegistroSchema = new Schema({
  _id: ObjectID,
  imagen: String,
  nombre: {
    type: String,
  },
  apellido: {
    type: String,
  },
  sexo: {
    type: String,
  },
  fechaNacimiento: {
    type: String,
  },
  direccion: {
    type: String,
  },
  provincia: {
    type: String,
  },
  codigoPostal: {
    type: Number
  },
  telefono:{
    type: Number
  },
  email: {
    type: String,
  },
  newsLetter: {
    type: Boolean,
  },
});

const RegistroModel = mongoose.model("registro", RegistroSchema);

router.get("/", async (req, res) => {
  try {
    const respuesta = await RegistroModel.find();
    res.json({ mensaje: "registrado con exito", registro: respuesta });
  } catch (error) {
    res.status(500).json({ mensaje: "error", tipo: err });
  }
});


router.get("/:id", async(req, res) => {
    const id = req.params.id
    try 
    {
      const respuesta =  await RegistroModel.findById(id);
      res.json({ mensaje: "tarjeta", tarjeta: respuesta });
    } catch (error) 
    {
      res.status(500).json({ mensaje: "error", tipo: error });
    }
  });

  const newRegistro = async (req, res) => {
    const urlImage = 'http://localhost:3000/imagenesRegistro/' + req.file.filename
    const registroNuevo = new RegistroModel({
    _id: new ObjectID(),
    imagen: urlImage,
    nombre: req.body.nombre,
    apellido: req.body.apellido,
    sexo: req.body.sexo,
    fechaNacimiento: req.body.fechaNacimiento,
    direccion: req.body.direccion,
    provincia: req.body.provincia,
    codigoPostal: req.body.codigoPostal,
    telefono: req.body.telefono,
    email: req.body.email,
    newsLetter: req.body.newsLetter
 });

  try {
    const respuesta = await registroNuevo.save();
    res.json({ mensaje: "registro nuevo creado", registro: respuesta });
  } catch (error) {
    res.status(500).json({ mensaje: "error al crear registro", tipo: error });
  }
};

router.post("/", upload.single('imagen'), newRegistro)

router.put("/:id", async(req, res) => {
  const id = req.params.id;
  const registroModificado = req.body;
  try {
    const respuesta =  await RegistroModel.findByIdAndUpdate(id,registroModificado);
    res.json({ mensaje: "registro modificado", registro: respuesta });
  } catch (error) {
    res.status(500).json({ mensaje: "error", tipo: error });
  }
});

// BORRAR SOLO UN ARCHIVO

router.delete("/:id", async(req, res) => {
    const id = req.params.id;
    try {
      const respuesta =  await RegistroModel.findByIdAndDelete(id);
      res.json({ mensaje: "registro borrado", registro: respuesta });
    } catch (error) {
      res.status(500).json({ mensaje: "error", tipo: error });
    }
  });
  
module.exports = router;