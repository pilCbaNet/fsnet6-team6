using System;
using System.Collections.Generic;

namespace Entities
{
    public partial class CuentaBanco
    {
        public CuentaBanco()
        {
            Operacions = new HashSet<Operacion>();
        }

        public int IdCuentaBanco { get; set; }
        public string Cbu { get; set; } = null!;
        public string? Nombre { get; set; } = null!;
        public string? Apellido { get; set; } = null!;
        public string Cuil { get; set; } = null!;
        public string? Descripcion { get; set; }
        public DateTime FechaAlta { get; set; }
        public DateTime? FechaModificacion { get; set; }
        public DateTime? FechaBaja { get; set; }
        public int IdBanco { get; set; }
        public int IdUsuario { get; set; }

        public virtual Banco IdBancoNavigation { get; set; } = null!;
        public virtual Usuario IdUsuarioNavigation { get; set; } = null!;
        public virtual ICollection<Operacion> Operacions { get; set; }
    }
}
