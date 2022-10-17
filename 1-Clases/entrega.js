class Usuer {

    constructor (nombre, apellido, libros, mascotas) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.libros = libros;
        this.mascotas = mascotas;
    }

    getFullName = () => 'Nombre del usuario: ' + this.nombre + ' ' + this.apellido;
    
    addMascotas = (mascota) => {
        this.mascotas.push (mascota) ;
        return console.log (this.mascotas);
    }
    contarMascotas () {
        return console.log(this.mascotas.length);
    }
    addBook (nombre, autor) {
        this.libros.push({nombre: nombre, autor: autor});
        return console.log(this.libros);
    }
}

const usuario = new Usuer ('Jose', 'Lamensa', [{ nombre: 'Los 7 enanitos', autor: 'Disney'}], ['Gato', 'Hamster']);

usuario.addMascotas('Perro');
usuario.addBook("Messi es un perro", "Hernan Casciari");

console.log(usuario.getFullName())