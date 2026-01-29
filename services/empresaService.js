const initModels = require("../models/init-models.js").initModels;

const sequelize = require("../config/sequelize.js");
const { Op } = require('sequelize');

const models = initModels(sequelize);

const Empresa = models.empresa;
const Proveedor = models.proveedor;

class EmpresaService {

    async getAllEmpresas(){
        const result = await Empresa.findAll();
        return result;
    }

    async getEmpresaByFacturacion(minFact){
        const result = await Empresa.findAll({
            where:{
                facturacion: {[Op.gte]: minFact}
            }
        });
        return result;
    }
    
    async createEmpresa(empresa){
        const result = await Empresa.create(empresa);
        return result;
    }

    async getEmpresaById(id_empresa){
        const result = await Empresa.findByPk(id_empresa);
        return result;
    }
    
    async updateEmpresa(id, empresa) {
        let numFilas = await Empresa.update(empresa, {
            where: { id_empresa: id },
        });
        if(numFilas == 0 && await Empresa.findByPk(empresa.id_empresa)){
            numFilas = 1;
        }
        return numFilas;
    }
    
    async deleteEmpresa(id_empresa) {
        const numFilas = await Empresa.destroy({
            where: { id_empresa: id_empresa },
        });
        return numFilas;
    }
}

module.exports = new EmpresaService();