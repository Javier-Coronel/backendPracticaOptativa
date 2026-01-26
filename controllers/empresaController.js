const empresaService = require("../services/empresaService");

class EmpresaController {
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
}

module.exports = new EmpresaController();
