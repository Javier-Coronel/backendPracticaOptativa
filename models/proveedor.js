const Sequelize = require("sequelize");
module.exports = function (sequelize, DataTypes) {
    return sequelize.define("proveedor", {
        id: {
            autoIncrement: true,
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
        },
        nombre: {
            type: DataTypes.STRING(50),
            allowNull: false
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
        recurso:{
            type: DataTypes.STRING(50),
            allowNull: false
        },
        cantidad: {
            type: DataTypes.FLOAT,
            allowNull: false
        },
        facturacion: {
            type: DataTypes.INTEGER,
            defaultValue: 0,
            allowNull: false
        },
        id_empresa: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'empresa',
                key: 'id_empresa'
            }
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
                  { name: "id" },
                ]
            },
            {
                name: "FK_EMPRESA",
                using: "BTREE",
                fields: [
                    { name: "id_empresa" },
                ]
            },
        ]
    });
};
