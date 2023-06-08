const {Router} = require('express')
const router = Router()
const {validarJWT} = require('../middleware/validar-jwt')
const {verificarRol} = require('../middleware/validar-rol-admin');
const {
    createUsuarioEquipo, 
    getUsuarioEquipo,
    getUsuarioID,
    editUsuarioID,
    deleteUsuario,
    
} = require('../controllers/usuarioEquipo')



router.post('/', [validarJWT, verificarRol], createUsuarioEquipo)

router.get('/', [validarJWT, verificarRol], getUsuarioEquipo)

router.get('/:id', [validarJWT, verificarRol] , getUsuarioID)

router.put('/:id', [validarJWT, verificarRol], editUsuarioID)

router.delete('/:id', [validarJWT, verificarRol], deleteUsuario)

module.exports = router