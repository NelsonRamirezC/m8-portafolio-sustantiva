import express from 'express';
import morgan from 'morgan';
import usuarioRoutes from './routes/usuario.routes.js';
import webRoutes from './routes/web.routes.js';
import { create } from 'express-handlebars';
import * as path from "path";
import { fileURLToPath } from "url";


const app = express();

//MIDDLEWARES GENERAL
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(morgan("dev"));


//CONFIGURACIÓN HANDLEBARS
const __dirname = path.dirname(fileURLToPath(import.meta.url));
const hbs = create({
	partialsDir: [
		"views/partials/",
	],
});

app.engine("handlebars", hbs.engine);
app.set("view engine", "handlebars");
app.set("views", path.resolve(__dirname, "./views"));


//RUTAS APP WEB
app.use("/", webRoutes);


//RUTAS API

//API USUARIOS
app.use("/api/usuarios", usuarioRoutes);


//EXPORTAR SERVIDOR
export default app;