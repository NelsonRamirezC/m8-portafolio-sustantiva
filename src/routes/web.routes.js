import express from 'express';
import webController from '../controllers/web.controller.js';


const router = express.Router();

router.get(["/", "/home", "/inicio"], webController.home);

//RUTAS DE USUARIOS
router.get("/usuarios", webController.usuarios);
router.get("/perfil/:id", webController.perfil);

//RUTAS DE PRODUCTOS
router.get("/productos", webController.productos);

//RUTAS DE VENTAS
router.get("/ventas", webController.ventas);


router.get("/register", webController.register);
router.get("/login", webController.login);

export default router;

