export class Transferencia
{
    importe: number;
    detalles: string;
    idCuentaOrigen: number;
    idCuentaDestino: number;

    constructor(importe: number, detalles: string, idCuentaOrigen: number, idCuentaDestino: number) {
        this.importe = importe;
        this.detalles = detalles;
        this.idCuentaOrigen = idCuentaOrigen;
        this.idCuentaDestino = idCuentaDestino;
    }
}