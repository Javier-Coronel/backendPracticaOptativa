var DataTypes = require("sequelize").DataTypes;
var _empresa = require("./empresa");
var _proveedor = require("./proveedor");

function initModels(sequelize) {
  var empresa = _empresa(sequelize, DataTypes);
  var proveedor = _proveedor(sequelize, DataTypes);

  pedidos.belongsTo(platos, { as: "idplato_plato", foreignKey: "idplato"});
  empresa.hasMany(proveedor, { as: "pedidos", foreignKey: "idplato"});

  return {
    empresa,
    proveedor
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;