var DataTypes = require("sequelize").DataTypes;
var _empresa = require("./empresa");
var _proveedor = require("./proveedor");

function initModels(sequelize) {
    var empresa = _empresa(sequelize, DataTypes);
    var proveedor = _proveedor(sequelize, DataTypes);

    proveedor.belongsTo(empresa, {foreignKey: "id_empresa"});
    empresa.hasMany(proveedor, { as: "proveedor"});

    empresa.sync({ alter: true })
    proveedor.sync({ alter: true })
    
    return {
        empresa,
        proveedor
    };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;