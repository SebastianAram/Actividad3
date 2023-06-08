const JWT = require("jsonwebtoken");

const verificarRol = (req, res, next) => {
    if (req.payload.rol !== "ADMIN") {
        return res.status(401).json({
            Error: "Token de administrador requerido",
        });
    }
    next();
};

module.exports = {
    verificarRol
}