
const register = async (req, res) => {
    try {

        res.render("register");
        
    } catch (error) {
        console.log(error);
        res.status(500).json({message: "Error al intentar cargar la vista."});
    }
};

export default {
    register
}
