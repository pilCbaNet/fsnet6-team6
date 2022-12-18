export class Usuario
{
    idUsuario: number;
    email: string;
    user: string;
    password: string;
    idCuenta:number;
    cuil:string;
    nombre:string;
    apellido:string;

    constructor(idUsuario: number, email: string, user: string, password: string, idCuenta: number, cuil:string, nombre:string, apellido:string) {
        this.idUsuario = idUsuario;
        this.email = email ;
        this.user = user;
        this.password = password ;
        this.idCuenta = idCuenta ;
        this.cuil = cuil ;
        this.nombre = nombre ;
        this.apellido = apellido ;
    }
}
