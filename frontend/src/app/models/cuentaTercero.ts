export class CuentaTercero
{
    ide: string;
    dni: number;
    alias: string;
    cbu: number;
    banco: string;

    constructor( ide: string, dni: number, alias: string,cbu: number,banco: string) {
        this.ide = ide;
        this.dni = dni;
        this.alias = alias;
        this.cbu = cbu;
        this.banco = banco;
    }
}
