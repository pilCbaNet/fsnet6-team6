using System;
using System.Collections.Generic;

namespace Entities
{
    public partial class Banco
    {
        public Banco()
        {
            CuentaBancos = new HashSet<CuentaBanco>();
        }

        public int IdBanco { get; set; }
        public string Nombre { get; set; } = null!;
        public string? Descripcion { get; set; }
        public DateTime FechaAlta { get; set; }
        public DateTime? FechaModificacion { get; set; }
        public DateTime? FechaBaja { get; set; }

        public virtual ICollection<CuentaBanco> CuentaBancos { get; set; }
    }
}
