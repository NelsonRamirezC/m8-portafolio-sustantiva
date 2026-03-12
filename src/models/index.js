import Usuario from './Usuario.model.js';
import Producto from './Producto.model.js';
import Venta from './Venta.model.js';


Usuario.hasMany(Venta, {
    foreignKey: 'id_usuario',
    as: "ventas"
});

Venta.belongsTo(Usuario, {
    foreignKey: 'id_usuario',
    as: "usuario"
});

export default {
    Usuario,
    Producto,
    Venta
};