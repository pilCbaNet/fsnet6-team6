export class Cuenta
{
    id: string;
    alias: string;
    cvu: number;
    

    constructor( id: string,alias: string,cvu: number) {
        this.id = id;
        this.alias = alias;
        this.cvu = cvu;
    }
}
