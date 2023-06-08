const {Router} = require('express')
const router = Router()
const {validarJWT} = require('../middleware/validar-jwt')
const {verificarRol} = require('../middleware/validar-rol-admin');
const {
    createEstadoEquipo, 
    getEstadoEquipo,
    getEstadoEquipoID,
    editEstadoID,
    deleteEstado
} = require('../controllers/estadoEquipo')

router.post('/', [validarJWT, verificarRol], createEstadoEquipo)

router.get('/', [validarJWT, verificarRol], getEstadoEquipo)

router.get('/:id', [validarJWT, verificarRol], getEstadoEquipoID)

router.put('/:id', [validarJWT, verificarRol], editEstadoID)

router.delete('/:id', [validarJWT, verificarRol], deleteEstado)

module.exports = router