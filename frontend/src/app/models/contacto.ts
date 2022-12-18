export class Contacto
{
    alias: string;
    cvu: string;
    descripcion: string;
    idCuenta: number;
    idUsuario: number;

    constructor( alias: string, cvu: string, descripcion: string, idCuenta: number, idUsuario: number ) {
        this.alias = alias;
        this.cvu = cvu;
        this.descripcion = descripcion;
        this.idCuenta = idUsuario;
        this.idUsuario = idUsuario;
    }
    
}