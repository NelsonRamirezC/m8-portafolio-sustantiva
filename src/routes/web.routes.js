import express from 'express';
import webController from '../controllers/web.controller.js';


const router = express.Router();

router.get(["/", "/home", "/inicio"], webController.home);
router.get("/usuarios", webController.usuarios);
router.get("/perfil/:id", webController.perfil);


router.get("/register", webController.register);
router.get("/login", webController.login);

export default router;

