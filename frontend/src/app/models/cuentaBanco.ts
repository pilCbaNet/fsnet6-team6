export class CuentaBanco
{
    descripcion: string;
    cuil: string;
    cbu: string;
    banco: string;
    nombre:string;
    apellido:string;
    idUsuario: number;

    constructor( descripcion: string, cuil: string,cbu: string,banco: string, nombre:string, apellido:string, idUsuario: number) {
        this.descripcion = descripcion;
        this.cuil = cuil;
        this.cbu = cbu;
        this.banco = banco;
        this.nombre = nombre;
        this.apellido = apellido; 
        this.idUsuario = idUsuario; 
    }
}
