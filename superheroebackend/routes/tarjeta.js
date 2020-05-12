const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const ObjectID = mongoose.Types.ObjectId;
const multer = require('multer');
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './imagenes')
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + '-' + file.originalname)
  }
})
 
var upload = multer({ storage: storage })

const TarjetaSchema = new Schema({
  _id: ObjectID,
  imagen: String,
  titulo: {
    type: String,
  },
  descripcion: {
    type: String,
  },
  cantidad : {
    type: String
  },
  precio: {
    type: String,
  },
});

const TarjetaModel = mongoose.model("tarjeta", TarjetaSchema);

router.get("/", async (req, res) => {
  try {
    const respuesta = await TarjetaModel.find();
    res.json({ mensaje: "listado tarjeta", tarjeta: respuesta });
  } catch (error) {
    res.status(500).json({ mensaje: "error", tipo: err });
  }
});


router.get("/:id", async(req, res) => {
    const id = req.params.id
    try {
     const respuesta =  await TarjetaModel.findById(id);
     res.json({ mensaje: "tarjeta", tarjeta: respuesta });
    } catch (error) {
      res.status(500).json({ mensaje: "error", tipo: error });
    }
  });

const newTarjeta = async (req, res) => {
  const urlImage = 'http://localhost:3000/imagenes/' + req.file.filename
  const tarjetaNueva = new TarjetaModel({
    _id: new ObjectID(),
    imagen: urlImage,
    titulo: req.body.titulo,
    descripcion: req.body.descripcion,
    cantidad: req.body.cantidad,
    precio: req.body.precio
  });

  try {
    const respuesta = await tarjetaNueva.save();
    res.json({ mensaje: "tarjeta nueva creada", tarjeta: respuesta });
  } catch (error) {
    res.status(500).json({ mensaje: "error al crear tarjeta", tipo: error });
  }
};

router.post("/", upload.single('imagen'), newTarjeta)

router.put("/:id", async(req, res) => {
  const id = req.params.id;
  const tarjetaModificada = req.body;
  try {
    const respuesta =  await TarjetaModel.findByIdAndUpdate(id,tarjetaModificada);
    res.json({ mensaje: "tarjeta modificada", tarjeta: respuesta });
  } catch (error) {
    res.status(500).json({ mensaje: "error", tipo: error });
  }
});

// BORRAR SOLO UN ARCHIVO

router.delete("/:id", async(req, res) => {
    const id = req.params.id;
    try {
      const respuesta =  await TarjetaModel.findByIdAndDelete(id);
      res.json({ mensaje: "tarjeta borrada", tarjeta: respuesta });
    } catch (error) {
      res.status(500).json({ mensaje: "error", tipo: error });
    }
  });
  
module.exports = router;