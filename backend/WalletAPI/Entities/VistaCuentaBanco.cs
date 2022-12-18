using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Entities
{
    public class VistaCuentaBanco
    {
        public int IdUsuario { get; set; } = 0;
        public string Cbu { get; set; } = null!;
        public string? Nombre { get; set; } = null!;
        public string? Apellido { get; set; } = null!;
        public string Cuil { get; set; } = null!;
        public string? Descripcion { get; set; }
        public DateTime FechaAlta { get; set; }
        public string Banco { get; set; }
    }
}
