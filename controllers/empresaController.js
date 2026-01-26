const empresaService = require("../services/empresaService");

class EmpresaController {
    async createEmpresa(req,res){
        const empresa = req.body
        try {
            const nuevaEmpresa = await empresaService.createEmpresa(empresa)
            return res.status(201).json({
                ok: true,
                datos: nuevaEmpresa,
                mensaje: "Empresa creada correctamente",
            })
        }
        catch (err){
            return res.status(501).json({
                ok: false,
                datos: null,
                mensaje: "Error al crear la empresa",
            })
        }
    }
    async getAllEmpresas(req,res){
        try {
            const empresas = await empresaService.getAllEmpresas()
            return res.status(200).json({
                ok: true,
                datos: empresas,
                mensaje: "Empresas recuperadas correctamente",
            });
        }
        catch (err){
            return res.status(500).json({
                ok: false,
                datos: null,
                mensaje: "Error al recuperar las empresas",
            });
        }
    }
}