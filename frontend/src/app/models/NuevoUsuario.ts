export class NuevoUsuario
{
    user: string;
    email: string;
    contrasena: string;
    nombre: string;
    apellido: string;
    cuil: string;
    telefono: string;


    constructor(user: string, email: string, contrasena: string , nombre: string, apellido: string, cuil: string, telefono: string ) {
        this.user = user;
        this.email = email;
        this.contrasena = contrasena;
        this.nombre = nombre;
        this.apellido = apellido;
        this.cuil = cuil;
        this.telefono = telefono;
    }
}