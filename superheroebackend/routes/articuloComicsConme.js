const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const ObjectID = mongoose.Types.ObjectId;
const multer = require('multer');
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './imagenesConmemorativas')
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + '-' + file.originalname)
  }
})
 
var upload = multer({ storage: storage })

const ArticuloConmemorativoSchema = new Schema({
  _id: ObjectID,

  titulo: {
    type: String,
  },

  fecha: {
    type: String,
  },
  
  autor: {
    type: String,
  },

  resumen: {
    type: String,
  },
  imagen: String,
  
  descripcion1: {
    type: String,
  },

  imagen2: String,


  descripcion2: {
    type: String,
  },


});

const ArticuloComicsConmeModel = mongoose.model("articuloComicsConme", ArticuloConmemorativoSchema);

router.get("/", async (req, res) => {
  try {
    const respuesta = await ArticuloComicsConmeModel.find();
    res.json({ mensaje: "Listado Articulo Comics Conmemorativos", articuloComicsConme: respuesta });
  } catch (error) {
    res.status(500).json({ mensaje: "error", tipo: err });
  }
});


router.get("/:id", async(req, res) => {
    const id = req.params.id
    try {
     const respuesta =  await ArticuloComicsConmeModel.findById(id);
     res.json({ mensaje: "Articulo Comic Conmemorativo", articuloComicsConme: respuesta });
    } catch (error) {
      res.status(500).json({ mensaje: "error", tipo: error });
    }
  });

const newArticuloComicsConme = async (req, res) => {
  const urlImage = 'http://localhost:3000/imagenesConmemorativas/' + req.files[0].filename
  const urlImage2 = 'http://localhost:3000/imagenesConmemorativas/' + req.files[1].filename
  const articuloComicsNuevo = new ArticuloComicsConmeModel({
    _id: new ObjectID(),
    titulo: req.body.titulo,
    fecha: req.body.fecha,
    autor: req.body.autor,
    resumen: req.body.resumen,
    imagen: urlImage,
    imagen2:urlImage2,
    descripcion1: req.body.descripcion1,
    descripcion2: req.body.descripcion2,
  
  });

  try {
    const respuesta = await articuloComicsNuevo.save();
    res.json({ mensaje: "Articulo comics conmemorativo nuevo creado con exito!!", articuloComicsConme: respuesta });
  } catch (error) {
    res.status(500).json({ mensaje: "error al crear Articulo Comics Conmemorativo", tipo: error });
  }
};

router.post("/", upload.array('imagen', 2), newArticuloComicsConme)

router.put("/:id", async(req, res) => {
  const id = req.params.id;
  const articuloComicsModificada = req.body;
  try {
    const respuesta =  await ArticuloComicsConmeModel.findByIdAndUpdate(id,articuloComicsModificada);
    res.json({ mensaje: "Articulo Comics Conmemorativo modificado", articuloComicsConme: respuesta });
  } catch (error) {
    res.status(500).json({ mensaje: "error", tipo: error });
  }
});

// BORRAR SOLO UN ARCHIVO

router.delete("/:id", async(req, res) => {
    const id = req.params.id;
    try {
      const respuesta =  await ArticuloComicsConmeModel.findByIdAndDelete(id);
      res.json({ mensaje: "Articulo Comics Conmemorativo borrado", articuloComicsConme: respuesta });
    } catch (error) {
      res.status(500).json({ mensaje: "error", tipo: error });
    }
  });
  
module.exports = router;