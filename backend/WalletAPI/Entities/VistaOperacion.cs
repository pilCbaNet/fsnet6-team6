using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Entities
{
    public class VistaOperacion
    {
        public int IdOperacion { get; set; }
        public decimal Importe { get; set; }
        public string? Detalle { get; set; }
        public DateTime FechaHora { get; set; }
        public int IdTipoOperacion { get; set; }
        public string Cbu { get; set; }
        public int IdCuenta { get; set; }
    }
}
