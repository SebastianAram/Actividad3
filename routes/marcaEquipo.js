const {Router} = require('express')
const router = Router()
const {validarJWT} = require('../middleware/validar-jwt')
const {verificarRol} = require('../middleware/validar-rol-admin');
const {
    createMarcaEquipo, 
    getMarcaEquipo,
    getMarcaID,
    editMarcaID,
    deleteMarca
} = require('../controllers/marcaEquipo')



router.post('/', [validarJWT, verificarRol], createMarcaEquipo)

router.get('/', [validarJWT, verificarRol], getMarcaEquipo)

router.get('/:id', [validarJWT, verificarRol], getMarcaID)

router.put('/:id', [validarJWT, verificarRol], editMarcaID)

router.delete('/:id', [validarJWT, verificarRol], deleteMarca)


module.exports = router