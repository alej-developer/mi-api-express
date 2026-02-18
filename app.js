const express = require('express');
const { buscarPorApellido } = require('./data/alumns');
const { validarApellido } = require('./middleware/validation');

const app = express();
const PORT = 3000;

app.use(express.json());

app.get('/alumnos/:apellidos', validarApellido, (req, res) => {
    const apellido = req.params.apellidos;
    const resultados = buscarPorApellido(apellido);

    if (resultados.length > 0) {
        res.json({
            status: "success",
            data: resultados
        });
    } else {
        res.status(404).json({
            status: "not found",
            message: `No se encontraron alumnos con el apellido: ${apellido}`
        });
    }
});

app.listen(PORT, () => {
    console.log(`Servidor ejecutándose en http://localhost:${PORT}`);
});