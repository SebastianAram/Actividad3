const {Schema, model} = require('mongoose')
const UsuarioEquipoSchema = Schema(
    {
        nombre: {
            type: String,
            required: [true, 'Nombre requerido']
        },
        email: {
            type: String,
            required: [true, 'Email requerido'],
            unique: true
        },
        contrasena:{
            type: String,
            required: true
        },
        rol:{
            type: String,
            required: true,
            enum: ['ADMIN', 'DOCENTE']
        },
        estado: {
            type: Boolean,
            default: true,
            required: true
        },
        fechacreacion: {
            type: Date,
            default: new Date()
        },
        fechaactualizacion: {
            type: Date,
            default: new Date() 
        }
    }
)

module.exports = model('UsuarioEquipo', UsuarioEquipoSchema)