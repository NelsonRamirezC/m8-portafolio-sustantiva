import models from '../models/index.js';

const findAll = async (req, res) => {
    try {
        let usuarios = await models.Usuario.findAll({
            attributes: ['id', 'nombre', 'apellido'],
        });

        usuarios = usuarios.map(u => {
            u = u.toJSON();
            u.url = "http://localhost:3000/api/usuarios/"+u.id
            return u;
        });
        console.log(usuarios);

        res.json({usuarios, message: "ok"});
        
    } catch (error) {
        console.log(error);
        res.status(500).json({message: "Error al intentar obtener los datos."});
    }
};

const findById = async (req, res) => {
    try {
        
        let id = req.params.id;

        let usuario = await models.Usuario.findByPk(id, {
            attributes: { exclude: ['password'] },
        });

        if(!usuario) return res.status(404).json({message: "no existe un usuario con ese id"});

        res.json({usuario, message: "ok"});
        
    } catch (error) {
        console.log(error);
        res.status(500).json({message: "Error al intentar obtener los datos."});
    }
};

const create = async (req, res) => {
    try {
        let { nombre, apellido, email, fecha_nacimiento, nickname, password } = req.body;

        
        let usuario = await models.Usuario.create({nombre, apellido, email, fecha_nacimiento, nickname, password});

        res.status(201).json({usuario, message: "Usuario creado con éxito."});

    } catch (error) {
        console.log(error);
        res.status(500).json({message: "Error al intentar crear el usuario."});
    }
};

const login = async (req, res) => {
    try {
        let { email, password } = req.body;

        
        let usuario = await models.Usuario.findOne(
            {
                where: { email, password },
                attributes: { exclude: ['password'] },
            }
        );

        if(!usuario) return res.status(404).json({message: "Email y/o password incorrectos."});

        res.json({usuario, message: "Login correcto."});

    } catch (error) {
        console.log(error);
        res.status(500).json({message: "Error al intentar crear el usuario."});
    }
};


export default {
    findAll,
    create,
    login,
    findById
}
