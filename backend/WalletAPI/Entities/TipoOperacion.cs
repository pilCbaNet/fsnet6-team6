using System;
using System.Collections.Generic;

namespace Entities
{
    public partial class TipoOperacion
    {
        public TipoOperacion()
        {
            Operacions = new HashSet<Operacion>();
        }

        public int IdTipoOperacion { get; set; }
        public string Descripcion { get; set; } = null!;

        public virtual ICollection<Operacion> Operacions { get; set; }
    }
}
