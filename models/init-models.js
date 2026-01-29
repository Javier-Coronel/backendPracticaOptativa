const DataTypes = require("sequelize").DataTypes;
const _empresa = require("./empresa");
const _proveedor = require("./proveedor");

function initModels(sequelize) {
    const empresa = _empresa(sequelize, DataTypes);
    const proveedor = _proveedor(sequelize, DataTypes);
    proveedor.belongsTo(empresa, {foreignKey: "empresaIdEmpresa"});
    empresa.hasMany(proveedor, { as: "proveedor"});

    //empresa.sync({ alter: true })
    //proveedor.sync({ alter: true })
    
    return {
        empresa,
        proveedor
    };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;