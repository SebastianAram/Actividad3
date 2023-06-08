const jwt = require('jsonwebtoken')

const generarJWT = (usuario) => {
    const payload = {_id: usuario._id, nombre: usuario.nombre, email: usuario.email, contrasena: usuario.contrasena, rol: usuario.rol}
    const token = jwt.sign(payload, '123a', { expiresIn: '6h'})
    return token
}

module.exports = {
    generarJWT
}