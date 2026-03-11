import models from '../models/index.js';

const home = async (req, res) => {
    try {

        res.render("home");
        
    } catch (error) {
        console.log(error);
        res.status(500).json({message: "Error al intentar cargar la vista."});
    }
};

const usuarios = async (req, res) => {
    try {

        res.render("usuarios");
        
    } catch (error) {
        console.log(error);
        res.status(500).json({message: "Error al intentar cargar la vista."});
    }
};

const register = async (req, res) => {
    try {

        res.render("register");
        
    } catch (error) {
        console.log(error);
        res.status(500).json({message: "Error al intentar cargar la vista."});
    }
};

const login = async (req, res) => {
    try {

        res.render("login");
        
    } catch (error) {
        console.log(error);
        res.status(500).json({message: "Error al intentar cargar la vista."});
    }
};


const perfil = async (req, res) => {
    let id = req.params.id;
    try {

        let usuario = await models.Usuario.findByPk(id, {
            attributes: { exclude: ['password'] },
        });

        res.render("perfil", {
            usuario: usuario.toJSON()
        });
        
    } catch (error) {
        console.log(error);

        res.render("perfil", {
            error: "No existe ningún usuario con el id: " + id
        });
    }
};



const productos = async (req, res) => {
    let id = req.params.id;
    try {

        let listaProductos= await models.Producto.findAll();

        listaProductos = listaProductos.map(p => p.toJSON());

        res.render("productos", {
            productos: listaProductos
        });
        
    } catch (error) {
        console.log(error);

        res.render("productos", {
            error: "Error al intentar leer los productos, intente más tarde..."
        });
    }
};


export default {
    register, login, home, usuarios, perfil, productos
}
