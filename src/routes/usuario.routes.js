import express from 'express';
import usuarioController from '../controllers/usuario.controller.js';


const router = express.Router();


//OBTENER TODOS LOS USUARIOS
router.get("/", usuarioController.findAll);

router.get("/:id", usuarioController.findById);


router.patch("/email", usuarioController.changeEmail);

//CREAR USUARIOS
router.post("/", usuarioController.create);

router.post("/login", usuarioController.login);




export default router;

