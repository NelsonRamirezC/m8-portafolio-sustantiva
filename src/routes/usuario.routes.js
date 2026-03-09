import express from 'express';
import usuarioController from '../controllers/usuario.controller.js';


const router = express.Router();


//OBTENER TODOS LOS USUARIOS
router.get("/", usuarioController.findAll);

//CREAR USUARIOS
router.post("/", usuarioController.create);



export default router;

