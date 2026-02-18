const alumnos = [
    { id: 1, nombre: 'Nancy', apellido: 'Saenz' },
    { id: 2, nombre: 'Ignacio', apellido: 'Tintori' },
    { id: 3, nombre: 'Manuela', apellido: 'Saenz' },
    { id: 4, nombre: 'Rafael', apellido: 'Cadenas' }
];

const buscarPorApellido = (apellido) => {
    return alumnos.filter(alumno => 
        alumno.apellido.toLowerCase() === apellido.toLowerCase()
    );
};

module.exports = { buscarPorApellido };