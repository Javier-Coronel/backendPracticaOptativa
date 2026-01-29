const initModels = require("../models/init-models.js").initModels;

const sequelize = require("../config/sequelize.js");

const models = initModels(sequelize);

const Empresa = models.empresa;
const Proveedor = models.proveedor;

class ProveedorService {
    async getAllProveedores(){
        const result = await Proveedor.findAll({
            include: Empresa
        });
        return result;
    }

    async getProveedorByEmpresa(id_empresa){
        const result = await Proveedor.findAll({
            where:{empresaIdEmpresa:id_empresa},
            include: Empresa
        });
        return result;
    }
    
    async createProveedor(proveedor){
        const result = await Proveedor.create(proveedor);
        return result;
    }
    
    async getProveedorById(id_proveedor){
        const result = await Proveedor.findByPk(id_proveedor,
            {include: Empresa});
        return result;
    }
    
    async updateProveedor(id, proveedor) {
        let numFilas = await Proveedor.update(proveedor, {
            where: { id_proveedor: id },
        });
        if(numFilas == 0 && await Proveedor.findByPk(proveedor.id_proveedor)){
            numFilas = 1;
        }
        return numFilas;
    }
    
    async deleteProveedor(id_proveedor) {
        const numFilas = await Proveedor.destroy({
            where: { id_proveedor: id_proveedor },
        });
        return numFilas;
    }
}
module.exports = new ProveedorService();