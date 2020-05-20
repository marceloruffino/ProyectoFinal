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

const TarjetaConmeSchema = new Schema({
  _id: ObjectID,
  imagen: String,
  
  titulo: {
    type: String,
  },
  descripcion: {
    type: String,
  },
  fecha : {
    type: String,
  },
  likes: {
    type: Number,
  },
});

const TarjetaConmeModel = mongoose.model("tarjetaConme", TarjetaConmeSchema);

router.get("/", async (req, res) => {
  try {
    const respuesta = await TarjetaConmeModel.find();
    res.json({ mensaje: "listado tarjetaConme", tarjetaConme: respuesta });
  } catch (error) {
    res.status(500).json({ mensaje: "error", tipo: err });
  }
});


router.get("/:id", async(req, res) => {
    const id = req.params.id
    try {
     const respuesta =  await TarjetaConmeModel.findById(id);
     res.json({ mensaje: "tarjetaConme", tarjetaConme: respuesta });
    } catch (error) {
      res.status(500).json({ mensaje: "error", tipo: error });
    }
  });

const newTarjetaConme = async (req, res) => {
  const urlImage = 'http://localhost:3000/imagenesConmemorativas/' + req.file.filename
  const tarjetaConmeNueva = new TarjetaConmeModel({
    _id: new ObjectID(),
    imagen: urlImage,
    titulo: req.body.titulo,
    descripcion: req.body.descripcion,
    fecha: req.body.fecha,
    likes: req.body.likes
  });

  try {
    const respuesta = await tarjetaConmeNueva.save();
    res.json({ mensaje: "TarjetaConme nueva creada con exito!!", tarjetaConme: respuesta });
  } catch (error) {
    res.status(500).json({ mensaje: "error al crear tarjetaConme", tipo: error });
  }
};

router.post("/", upload.single('imagen'), newTarjetaConme)

router.put("/:id", async(req, res) => {
  const id = req.params.id;
  const tarjetaConmeModificada = req.body;
  try {
    const respuesta =  await TarjetaConmeModel.findByIdAndUpdate(id,tarjetaConmeModificada);
    res.json({ mensaje: "tarjeta modificada", tarjeta: respuesta });
  } catch (error) {
    res.status(500).json({ mensaje: "error", tipo: error });
  }
});

// BORRAR SOLO UN ARCHIVO

router.delete("/:id", async(req, res) => {
    const id = req.params.id;
    try {
      const respuesta =  await TarjetaConmeModel.findByIdAndDelete(id);
      res.json({ mensaje: "tarjetaConme borrada", tarjetaConme: respuesta });
    } catch (error) {
      res.status(500).json({ mensaje: "error", tipo: error });
    }
  });
  
module.exports = router;