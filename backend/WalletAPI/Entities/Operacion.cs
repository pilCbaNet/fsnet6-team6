using System;
using System.Collections.Generic;

namespace Entities
{
    public partial class Operacion
    {
        public int IdOperacion { get; set; }
        public decimal Importe { get; set; }
        public string? Detalle { get; set; }
        public DateTime FechaHora { get; set; }
        public int IdTipoOperacion { get; set; }
        public int IdCuentaBanco { get; set; }
        public int IdCuenta { get; set; }

        public virtual CuentaBanco? IdCuentaBancoNavigation { get; set; } = null!;
        public virtual Cuenta? IdCuentaNavigation { get; set; } = null!;
        public virtual TipoOperacion? IdTipoOperacionNavigation { get; set; } = null!;
    }
}
