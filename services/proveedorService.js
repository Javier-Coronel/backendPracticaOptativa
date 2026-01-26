const initModels = require("../models/init-models.js").initModels;

const sequelize = require("../config/sequelize.js");

const models = initModels(sequelize);

const Empresa = models.empresa;
const Proveedor = models.proveedor;

class ProveedorService {
    async createProveedor(proveedor){
        const result = await Proveedor.create(proveedor);
        return result;
    }
    
    async getAllProveedores(){
        const result = await Proveedor.findAll({
            include:[
                {
                    model: Empresa,
                    as: "id_empresa_empresa",
                }
            ]
        });
        return result;
    }

    async getProveedorById(id_proveedor){
        const result = await Proveedor.findByPk(id_proveedor);
        return result;
    }

    async getProveedorByEmpresa(id_empresa){
        const result = await Proveedor.findAll({
            where:{id_empresa:id_empresa}
        });
        return result;
    }

    async updateProveedor(proveedor) {
        let numFilas = await Proveedor.update(proveedor, {
            where: { id: proveedor.id },
        });
        if(numFilas == 0 && await Proveedor.findByPk(proveedor.id)){
            numFilas = 1;
        }
        return numFilas;
    }

    async deleteProveedor(id_proveedor) {
        const numFilas = await Proveedor.destroy({
            where: { id: id_proveedor },
        });
        return numFilas;
    }
}

module.exports = new ProveedorService();