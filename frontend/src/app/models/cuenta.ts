export class Cuenta
{
    id: string;
    alias: string;
    cbu: number;
    banco: string;

    constructor( id: string,alias: string,cbu: number,banco: string) {
        this.id = id;
        this.alias = alias;
        this.cbu = cbu;
        this.banco = banco;
    }
}
