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

export default {
    register, login, home, usuarios
}
