import express from 'express';
import webController from '../controllers/web.controller.js';


const router = express.Router();

router.get("/home", webController.home);
router.get("/register", webController.register);
router.get("/login", webController.login);
router.get("/usuarios", webController.usuarios);

export default router;

