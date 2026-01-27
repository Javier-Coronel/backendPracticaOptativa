const initModels = require("../models/init-models.js").initModels;

const sequelize = require("../config/sequelize.js");

const models = initModels(sequelize);

const Empresa = models.empresa;
const Proveedor = models.proveedor;

class EmpresaService {
    async createEmpresa(empresa){
        const result = await Empresa.create(empresa);
        return result;
    }

    async getAllEmpresas(){
        const result = await Empresa.findAll();
        return result;
    }

    async getEmpresaById(id_empresa){
        const result = await Empresa.findByPk(id_empresa);
        return result;
    }
    
    async updateEmpresa(empresa) {
        let numFilas = await Empresa.update(empresa, {
            where: { id_empresa: empresa.id_empresa },
        });
        if(numFilas == 0 && await Empresa.findByPk(empresa.id)){
            numFilas = 1;
        }
        return numFilas;
    }
    
    async deleteEmpresa(id_empresa) {
        const numFilas = await Empresa.destroy({
            where: { id: id_empresa },
        });
        return numFilas;
    }
}

module.exports = new EmpresaService();