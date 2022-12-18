using System;
using System.Collections.Generic;

namespace Entities
{
    public partial class Usuario
    {
        public Usuario()
        {
            Contactos = new HashSet<Contacto>();
            CuentaBancos = new HashSet<CuentaBanco>();
        }

        public int? IdUsuario { get; set; }
        public string User { get; set; } = null!;
        public string Nombre { get; set; } = null!;
        public string Apellido { get; set; } = null!;
        public string Cuil { get; set; } = null!;
        public string Email { get; set; } = null!;
        public string Contrasena { get; set; } = null!;
        public string Telefono { get; set; } = null!;
        public DateTime FechaAlta { get; set; }
        public DateTime? FechaModificacion { get; set; }
        public DateTime? FechaBaja { get; set; }
        public int? IdCuenta { get; set; }

        public virtual Cuenta? IdCuentaNavigation { get; set; }
        public virtual ICollection<Contacto> Contactos { get; set; }
        public virtual ICollection<CuentaBanco> CuentaBancos { get; set; }
    }
}
