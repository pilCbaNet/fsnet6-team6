using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Entities
{
    public class VistaTransferencia
    {
        public int? IdTransferencia { get; set; }
        public decimal Importe { get; set; }
        public string? Detalles { get; set; }
        public DateTime FechaHora { get; set; }
        public int IdCuentaOrigen { get; set; }
        public int IdCuentaDestino { get; set; }
    }
}
