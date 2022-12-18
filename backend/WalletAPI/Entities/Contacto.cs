using System;
using System.Collections.Generic;

namespace Entities 
{
    public partial class Contacto
    {
        public int IdContacto { get; set; }
        public string Alias { get; set; } = null!;
        public string Cvu { get; set; } = null!;
        public string Descripcion { get; set; } = null!;
        public DateTime FechaAlta { get; set; }
        public DateTime? FechaModificacion { get; set; }
        public DateTime? FechaBaja { get; set; }
        public int IdCuenta { get; set; }
        public int IdUsuario { get; set; }

        public virtual Cuenta IdCuentaNavigation { get; set; } = null!;
        public virtual Usuario IdUsuarioNavigation { get; set; } = null!;
    }
}
