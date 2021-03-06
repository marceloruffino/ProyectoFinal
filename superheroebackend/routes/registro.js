const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const ObjectID = mongoose.Types.ObjectId;


const RegistroSchema = new Schema({
  _id: ObjectID,
  nombre: {
    type: String,
  },
  apellido: {
    type: String,
  },
  email: {
    type: String,
    lowercase: true,
    required: [true, "can't be blank"],
    match: [/\S+@\S+\.\S+/, "is invalid"],
    index: true,
  },
  dcComics: {
    type: Boolean,
  },
  marvelComics: {
    type: Boolean,
  },
  horseComics: {
    type: Boolean,
  },
  imageComics: {
    type: Boolean,
  },
  newsLetter: {
    type: Boolean,
  },
},{timestamps:true});

const RegistroModel = mongoose.model("registro", RegistroSchema);

router.get("/", async (req, res) => {
  try {
    const respuesta = await RegistroModel.find().sort({createdAt: 'desc'});
    res.json({ mensaje: "registrado con exito", registro: respuesta });
  } catch (error) {
    res.status(500).json({ mensaje: "error", tipo: err });
  }
});


router.get("/:id", async (req, res) => {
  const id = req.params.id
  try {
    const respuesta = await RegistroModel.findById(id);
    res.json({ mensaje: "tarjeta", tarjeta: respuesta });
  } catch (error) {
    res.status(500).json({ mensaje: "error", tipo: error });
  }
});

const newRegistro = async (req, res) => {
  try {
    const registroNuevo = new RegistroModel({
      _id: new ObjectID(),
      nombre: req.body.nombre,
      apellido: req.body.apellido,
      email: req.body.email,
      dcComics: req.body.dcComics,
      marvelComics: req.body.marvelComics,
      horseComics: req.body.horseComics,
      imageComics: req.body.imageComics,
      newsLetter: req.body.newsLetter,
    });
    const respuesta = await registroNuevo.save();
    res.json({ mensaje: "registro nuevo creado", registro: respuesta });
  } catch (error) {
  console.log("newRegistro -> error", error)
    
    res.status(500).json({ mensaje: "error al crear registro", tipo: error });
  }
};

router.post("/", newRegistro)

router.put("/:id", async (req, res) => {
  const id = req.params.id;
  const registroModificado = req.body;
  try {
    const respuesta = await RegistroModel.findByIdAndUpdate(id, registroModificado);
    res.json({ mensaje: "registro modificado", registro: respuesta });
  } catch (error) {
    res.status(500).json({ mensaje: "error", tipo: error });
  }
});

// BORRAR SOLO UN ARCHIVO

router.delete("/:id", async (req, res) => {
  const id = req.params.id;
  try {
    const respuesta = await RegistroModel.findByIdAndDelete(id);
    res.json({ mensaje: "registro borrado", registro: respuesta });
  } catch (error) {
    res.status(500).json({ mensaje: "error", tipo: error });
  }
});

module.exports = router;