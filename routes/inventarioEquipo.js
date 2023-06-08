const {Router} = require('express')
const router = Router()
const {validarJWT} = require('../middleware/validar-jwt')
const {verificarRol} = require('../middleware/validar-rol-admin');
const {
    createInventarioEquipo, 
    getInventarioEquipo,
    getInventarioID,
    editInventario,
    deleteInventario
} = require('../controllers/inventarioEquipo')





router.post('/', [validarJWT, verificarRol], createInventarioEquipo)

router.get('/', [validarJWT], getInventarioEquipo)

router.get('/:id', [validarJWT], getInventarioID)

router.put('/:id', [validarJWT, verificarRol], editInventario)

router.delete('/:id', [validarJWT, verificarRol], deleteInventario)



module.exports = router