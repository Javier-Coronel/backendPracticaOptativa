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
    async getProveedoresOfEmpresa(req, res) {
        const empresaId = req.params.empresa;
        try {
            const proveedores = await proveedorService.getProveedorByEmpresa(empresaId);
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
    async updateProveedor(req, res) {
        const { id } = req.params;
        const proveedorData = req.body;
        try {
            const updatedProveedor = await proveedorService.updateProveedor(id, proveedorData);
            if (!updatedProveedor) {
                return res.status(404).json({
                    ok: false,
                    datos: null,
                    mensaje: "Proveedor no encontrada",
                });
            }
            return res.status(200).json({
                ok: true,
                datos: updatedProveedor,
                mensaje: "Proveedor actualizado correctamente",
            });
        } catch (err) {
            logMensaje("Error en updateProveedor:", err);
            return res.status(500).json({
                ok: false,
                datos: null,
                mensaje: "Error al actualizar el proveedor",
            });
        }
    }
    async deleteProveedor(req, res) {
        const { id } = req.params;
        try {
            const deleted = await proveedorService.deleteProveedor(id);
            if (!deleted) {
                return res.status(404).json({
                    ok: false,
                    datos: null,
                    mensaje: "Proveedor no encontrado",
                });
            }
            return res.status(200).json({
                ok: true,
                datos: null,
                mensaje: "Proveedor eliminado correctamente",
            });
        } catch (err) {
            logMensaje("Error en deleteProveedor:", err);
            return res.status(500).json({
                ok: false,
                datos: null,
                mensaje: "Error al eliminar el proveedor",
            });
        }
    }


}

module.exports = new ProveedorController();
