const {Router} = require('express')
const router = Router()
const {validarJWT} = require('../middleware/validar-jwt')
const {verificarRol} = require('../middleware/validar-rol-admin');
const {
    createTipoEquipo, 
    getTipoEquipo,
    getTipoID,
    editTipoID,
    deleteTipo
} = require('../controllers/tipoEquipo')


router.post('/', [validarJWT, verificarRol], createTipoEquipo)

router.get('/', [validarJWT, verificarRol], getTipoEquipo)

router.get('/:id', [validarJWT, verificarRol], getTipoID)

router.put('/:id', [validarJWT, verificarRol], editTipoID)

router.delete('/:id', [validarJWT, verificarRol], deleteTipo)



module.exports = router