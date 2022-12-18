export class Operacion
{
    importe: number;
    idTipoOperacion: number;
    cbu: string;
    idCuenta: number;

    constructor(importe: number, idTipoOperacion: number, cbu: string, idCuenta: number) {
        this.idCuenta = idCuenta;
        this.cbu = cbu;
        this.idTipoOperacion = idTipoOperacion;
        this.importe = importe;
    }
}
