const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const ObjectID = mongoose.Types.ObjectId;
const multer = require('multer');
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './imagenesComics')
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + '-' + file.originalname)
  }
})
 
var upload = multer({ storage: storage })

const ArticuloComicsSchema = new Schema({
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
  cantidad: {
    type: Number,
  },
  precio: {
    type: Number,
  },
  likes: {
    type: Number,
  },

});

const ArticuloComicsModel = mongoose.model("articuloComics", ArticuloComicsSchema);

router.get("/", async (req, res) => {
  try {
    const respuesta = await ArticuloComicsModel.find();
    res.json({ mensaje: "Listado Articulo Comics", articuloComics: respuesta });
  } catch (error) {
    res.status(500).json({ mensaje: "error", tipo: err });
  }
});


router.get("/:id", async(req, res) => {
    const id = req.params.id
    try {
     const respuesta =  await ArticuloComicsModel.findById(id);
     res.json({ mensaje: "articuloComics", articuloComics: respuesta });
    } catch (error) {
      res.status(500).json({ mensaje: "error", tipo: error });
    }
  });

const newArticuloComics = async (req, res) => {
  const urlImage = 'http://localhost:3000/imagenesComics/' + req.files[0].filename
  const urlImage2 = 'http://localhost:3000/imagenesComics/' + req.files[1].filename
  const articuloComicsNuevo = new ArticuloComicsModel({
    _id: new ObjectID(),
    titulo: req.body.titulo,
    fecha: req.body.fecha,
    autor: req.body.autor,
    resumen: req.body.resumen,
    imagen: urlImage,
    imagen2:urlImage2,
    descripcion1: req.body.descripcion1,
    descripcion2: req.body.descripcion2,
    cantidad: req.body.cantidad,
    precio: req.body.precio,
    likes: 0
  });

  try {
    const respuesta = await articuloComicsNuevo.save();
    res.json({ mensaje: "Articulo comics nuevo creado con exito!!", articuloComics: respuesta });
  } catch (error) {
    res.status(500).json({ mensaje: "error al crear Articulo Comics", tipo: error });
  }
};

router.post("/", upload.array('imagen', 2), newArticuloComics)

router.put("/:id",upload.array('imagen', 2), async(req, res) => {
  const id = req.params.id;
  const urlImage = 'http://localhost:3000/imagenesComics/' + req.files[0].filename
  const urlImage2 = 'http://localhost:3000/imagenesComics/' + req.files[1].filename
  const articuloComicsModificada = req.body;
  articuloComicsModificada.imagen=urlImage
  articuloComicsModificada['imagen2']=urlImage2
  
  
  try {
    const respuesta =  await ArticuloComicsModel.findByIdAndUpdate(id,articuloComicsModificada);
    res.json({ mensaje: "Articulo Comics modificado", articuloComics: respuesta });
  } catch (error) {
    res.status(500).json({ mensaje: "error", tipo: error });
  }
});

// BORRAR SOLO UN ARCHIVO

router.delete("/:id", async(req, res) => {
    const id = req.params.id;
    try {
      const respuesta =  await ArticuloComicsModel.findByIdAndDelete(id);
      res.json({ mensaje: "Articulo Comics borrado", articuloComics: respuesta });
    } catch (error) {
      res.status(500).json({ mensaje: "error", tipo: error });
    }
  });
  
module.exports = router;