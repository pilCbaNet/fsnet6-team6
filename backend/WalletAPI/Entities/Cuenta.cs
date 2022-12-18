using System;
using System.Collections.Generic;

namespace Entities
{
    public partial class Cuenta
    {
        public Cuenta()
        {
            Contactos = new HashSet<Contacto>();
            Operacions = new HashSet<Operacion>();
            TransferenciumIdCuentaDestinoNavigations = new HashSet<Transferencia>();
            TransferenciumIdCuentaOrigenNavigations = new HashSet<Transferencia>();
            Usuarios = new HashSet<Usuario>();
        }

        public int IdCuenta { get; set; }
        public string Alias { get; set; } = null!;
        public string Cvu { get; set; } = null!;
        public decimal Saldo { get; set; }
        public DateTime FechaAlta { get; set; }
        public DateTime? FechaModificacion { get; set; }
        public DateTime? FechaBaja { get; set; }

        public virtual ICollection<Contacto> Contactos { get; set; }
        public virtual ICollection<Operacion> Operacions { get; set; }
        public virtual ICollection<Transferencia> TransferenciumIdCuentaDestinoNavigations { get; set; }
        public virtual ICollection<Transferencia> TransferenciumIdCuentaOrigenNavigations { get; set; }
        public virtual ICollection<Usuario> Usuarios { get; set; }
    }
}
