import models from '../models/index.js';

const findAll = async (req, res) => {
    try {
        let usuarios = await models.Usuario.findAll();;

        res.json({usuarios, message: "ok"});
        
    } catch (error) {
        console.log(error);
        res.status(500).json({message: "Error al intentar obtener los datos."});
    }
};

const create = async (req, res) => {
    try {
        let { nombre, apellido, email, fecha_nacimiento, nickname } = req.body;

        console.log(req.body);


        res.json({message: "Usuario creado con éxito."});

    } catch (error) {
        console.log(error);
        res.status(500).json({message: "Error al intentar crear el usuario."});
    }
};


export default {
    findAll,
    create
}
