import express from 'express';
import webController from '../controllers/web.controller.js';


const router = express.Router();

router.get("/register", webController.register);

export default router;

