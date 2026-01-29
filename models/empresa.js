const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
    return sequelize.define('empresa',{
        id_empresa:{
            autoIncrement: true,
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true
        },
        nombre: {
            type: DataTypes.STRING(50),
            allowNull: false
        },
        descripcion: {
            type: DataTypes.STRING(50),
            allowNull: true
        },
        fechaCreacion:{
            type: DataTypes.DATE,
            allowNull: false
        },
        activa: {
            type: DataTypes.BOOLEAN,
            defaultValue: true,
            allowNull: false
        },
        facturacion: {
            type: DataTypes.INTEGER,
            defaultValue: 0,
            allowNull: false
        },
        porcentajeEnBolsa: {
            type: DataTypes.FLOAT,
            defaultValue: 0,
            allowNull: false
        },
    },{
        sequelize,
        tableName: 'empresa',
        timestamps: false,
        indexes: [
            {
                name: "PRIMARY",
                unique: true,
                using: "BTREE",
                fields: [
                  { name: "id_empresa" },
                ]
            }
        ]
    })
}
