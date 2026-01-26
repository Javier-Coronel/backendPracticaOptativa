const proveedorService = require("../services/proveedorService");

class ProveedorController {
    async getAllProveedores(req, res) {
        try {
            const proveedores = await proveedorService.getAllProveedores();
            return res.status(200).json({
                ok: true,
                datos: proveedores,
                mensaje: "Proveedores recuperados correctamente",
            });
        } catch (err) {
            return res.status(500).json({
                ok: false,
                datos: null,
                mensaje: "Error al recuperar los proveedores",
            });
        }
    }
    async getProveedorById(req, res) {
        const id_proveedor = req.params.id;
        try {
            const proveedor = await proveedorService.getProveedorById(id_proveedor);
            if (proveedor) {
                return res.status(200).json({
                    ok: true,
                    datos: proveedor,
                    mensaje: "Proveedor recuperado correctamente",
                });
            } else {
                return res.status(404).json({
                    ok: false,
                    datos: null,
                    mensaje: "Proveedor no encontrado",
                });
            }
        } catch (err) {
            return res.status(500).json({
                ok: false,
                datos: null,
                mensaje: "Error al recuperar un proveedor",
            });
        }
    }
    async createProveedor(req, res) {
        const proveedor = req.body;

        try {
            const proveedorNew = await proveedorService.createProveedor(proveedor);

            return res.status(201).json({
                ok: true,
                datos: proveedorNew,
                mensaje: "Proveedor creado correctamente",
            });
        } catch (err) {
            return res.status(500).json({
                ok: false,
                datos: null,
                mensaje: "Error al crear un proveedor",
            });
        }
    }
}

module.exports = new ProveedorController();
