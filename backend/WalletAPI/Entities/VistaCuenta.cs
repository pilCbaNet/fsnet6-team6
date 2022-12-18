using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Entities
{
    public class VistaCuenta
    {
        public int? Id { get; set; }
        public string Alias { get; set; }    
        public string Cvu { get; set; }
        public string? Saldo { get; set; }

    }
}
