import express from 'express';
import ventasController from '../controllers/ventas.controller.js';


const router = express.Router();

router.post("/:id_usuario", ventasController.create);

export default router;

