import express from 'express';
import carritoController from '../controllers/carrito.controller.js';


const router = express.Router();


router.get("/cantidad/:id_usuario", carritoController.cantidad);

//AGREGAR PRODUCTOS AL CARRITO
router.post("/add/:id_usuario/:id_producto", carritoController.addProduct);

//ELIMINAR PRODUCTOS DEL CARRITO
router.delete("/:id", carritoController.deleteProduct);




export default router;

