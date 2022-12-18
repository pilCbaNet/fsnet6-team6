using System;
using System.Collections.Generic;

namespace Entities
{
    public partial class Transferencia
    {
        public int? IdTransferencia { get; set; }
        public decimal Importe { get; set; }
        public string? Detalles { get; set; }
        public DateTime FechaHora { get; set; }
        public int IdCuentaOrigen { get; set; }
        public int IdCuentaDestino { get; set; }

        public virtual Cuenta? IdCuentaDestinoNavigation { get; set; } = null!;
        public virtual Cuenta? IdCuentaOrigenNavigation { get; set; } = null!;
    }
}
