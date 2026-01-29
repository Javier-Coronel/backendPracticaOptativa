const express = require('express');
const router = express.Router();
const proveedorControler = require('../controllers/proveedorController');

router.get('/', proveedorControler.getAllProveedores);
router.get('/empresa/:empresa', proveedorControler.getProveedoresOfEmpresa);
router.get('/:id', proveedorControler.getProveedorById);
router.post('/', proveedorControler.createProveedor);
router.put('/:id', proveedorControler.updateProveedor);
router.delete('/:id', proveedorControler.deleteProveedor);

module.exports = router;