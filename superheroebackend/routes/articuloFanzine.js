const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const ObjectID = mongoose.Types.ObjectId;
const multer = require('multer');
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './imagenesFanzine')
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + '-' + file.originalname)
  }
})
 
var upload = multer({ storage: storage })

const ArticuloFanzineSchema = new Schema({
  _id: ObjectID,

  titulo: {
    type: String,
  },

  fecha: {
    type: String,
  },
  
  subtitulo: {
    type: String,
  },

  resumen: {
    type: String,
  },
  imagen: String,
  
  descripcion1: {
    type: String,
  },
  
  descripcion2: {
    type: String,
  },

});

const ArticuloFanzineModel = mongoose.model("articuloFanzine", ArticuloFanzineSchema);

router.get("/", async (req, res) => {
  try {
    const respuesta = await ArticuloFanzineModel.find();
    res.json({ mensaje: "listado Articulo", articuloFanzine: respuesta });
  } catch (error) {
    res.status(500).json({ mensaje: "error", tipo: err });
  }
});


router.get("/:id", async(req, res) => {
    const id = req.params.id
    try {
     const respuesta =  await ArticuloFanzineModel.findById(id);
     res.json({ mensaje: "articuloFanzine", articuloFanzine: respuesta });
    } catch (error) {
      res.status(500).json({ mensaje: "error", tipo: error });
    }
  });

const newArticuloFanzine = async (req, res) => {
  const urlImage = 'http://localhost:3000/imagenesFanzine/' + req.file.filename
  const articuloFanzineNuevo = new ArticuloFanzineModel({
    _id: new ObjectID(),
    titulo: req.body.titulo,
    fecha: req.body.fecha,
    subtitulo: req.body.subtitulo,
    resumen: req.body.resumen,
    imagen: urlImage,
    descripcion1: req.body.descripcion1,
    descripcion2: req.body.descripcion2,
  });

  try {
    const respuesta = await articuloFanzineNuevo.save();
    res.json({ mensaje: "articuloFanzine nuevo creado con exito!!", articuloFanzine: respuesta });
  } catch (error) {
    res.status(500).json({ mensaje: "error al crear articuloFanzine", tipo: error });
  }
};

router.post("/", upload.single('imagen'), newArticuloFanzine)

router.put("/:id", async(req, res) => {
  const id = req.params.id;
  const articuloFanzineModificada = req.body;
  try {
    const respuesta =  await ArticuloFanzineModel.findByIdAndUpdate(id,articuloFanzineModificada);
    res.json({ mensaje: "articuloFanzine modificada", articuloFanzine: respuesta });
  } catch (error) {
    res.status(500).json({ mensaje: "error", tipo: error });
  }
});

// BORRAR SOLO UN ARCHIVO

router.delete("/:id", async(req, res) => {
    const id = req.params.id;
    try {
      const respuesta =  await ArticuloFanzineModel.findByIdAndDelete(id);
      res.json({ mensaje: "articuloFanzine borrado", articuloFanzine: respuesta });
    } catch (error) {
      res.status(500).json({ mensaje: "error", tipo: error });
    }
  });
  
module.exports = router;