const validarApellido = (req, res, next) => {
    const apellido = req.params.apellidos;
    if (/\d/.test(apellido)) {
        return res.status(400).json({
            status: "error",
            message: "El apellido no debe contener números"
        });
    }
    next();
};

module.exports = { validarApellido };
