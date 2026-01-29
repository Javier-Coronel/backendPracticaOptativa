const empresaService = require("../services/empresaService");

class EmpresaController {
    async createEmpresa(req, res) {
        const empresa = req.body;

        try {
            const empresaNew = await empresaService.createEmpresa(empresa);

            return res.status(201).json({
                ok: true,
                datos: empresaNew,
                mensaje: "Empresa creada correctamente",
            });
        } catch (err) {
            return res.status(500).json({
                ok: false,
                datos: null,
                mensaje: "Error al crear una empresa",
            });
        }
    }
    async getAllEmpresas(req, res) {
        try {
            const empresas = await empresaService.getAllEmpresas();
            return res.status(200).json({
                ok: true,
                datos: empresas,
                mensaje: "Empresas recuperadas correctamente",
            });
        } catch (err) {
            return res.status(500).json({
                ok: false,
                datos: null,
                mensaje: "Error al recuperar las empresas",
            });
        }
    }

    async getEmpresasByFacturation(req, res) {
        const facturation = req.params.facturation;
        try {
            const empresas = await empresaService.getEmpresaByFacturacion(facturation);
            return res.status(200).json({
                ok: true,
                datos: empresas,
                mensaje: "Empresas recuperadas correctamente",
            });
        } catch (err) {
            return res.status(500).json({
                ok: false,
                datos: null,
                mensaje: "Error al recuperar las empresas",
            });
        }
    }
    async getEmpresaById(req, res) {
        const id_empresa = req.params.id;
        try {
            const empresa = await empresaService.getEmpresaById(id_empresa);
            // empresa != null -- se ha encontrado la empresa
            if (empresa) {
                return res.status(200).json({
                    ok: true,
                    datos: empresa,
                    mensaje: "Empresa recuperada correctamente",
                });
            } else {
                return res.status(404).json({
                    ok: false,
                    datos: null,
                    mensaje: "Empresa no encontrada",
                });
            }
        } catch (err) {
            return res.status(500).json({
                ok: false,
                datos: null,
                mensaje: "Error al recuperar una empresa",
            });
        }
    }

    async updateEmpresa(req, res) {
        // El objeto del empresa llega en el body
        const empresa = req.body;
        const id = req.params.id;
        try {
            const numFilas = await empresaService.updateEmpresa(id, empresa);

            if (numFilas == 0) {
                // No se ha encontrado lo que se quería actualizar o no hay nada que cambiar
                return res.status(404).json({
                    ok: false,
                    datos: null,
                    mensaje: "No encontrado: " + empresa.id_empresa,
                });
            } else {
                return res.status(200).json({
                    ok: true,
                    datos: updatedProveedor,
                    mensaje: "Empresa actualizada correctamente",
                });
            }
        } catch (err) {
            logMensaje("Error en EditEmpresa:", err);
            return res.status(500).json({
                ok: false,
                datos: null,
                mensaje: "Error al editar un empresa",
            });
        }
    }
    async deleteEmpresa(req, res) {
        const { id } = req.params;
        try {
            const deleted = await empresaService.deleteEmpresa(id);
            if (!deleted) {
                return res.status(404).json({
                    ok: false,
                    datos: null,
                    mensaje: "Empresa no encontrada",
                });
            }
            return res.status(200).json({
                ok: true,
                datos: null,
                mensaje: "Empresa eliminada correctamente",
            });
        } catch (err) {
            logMensaje("Error en deleteEmpresa:", err);
            return res.status(500).json({
                ok: false,
                datos: null,
                mensaje: "Error al eliminar la empresa",
            });
        }
    }

}

module.exports = new EmpresaController();
