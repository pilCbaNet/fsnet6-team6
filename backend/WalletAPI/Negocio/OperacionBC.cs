using Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Negocio
{
    public class OperacionBC
    {
        public void NuevaOperacion(BD_walletContext db, VistaOperacion vistaOperacion)
        {
            Operacion operacion= new Operacion();
            CuentaBanco cuentaBanco = db.CuentaBancos.Where(a => a.Cbu == vistaOperacion.Cbu).FirstOrDefault();
            if (cuentaBanco != null)
            {
                operacion.Importe = vistaOperacion.Importe;
                operacion.FechaHora = DateTime.UtcNow;
                operacion.IdTipoOperacion = vistaOperacion.IdTipoOperacion;
                operacion.IdCuentaBanco = cuentaBanco.IdCuentaBanco;
                operacion.IdCuenta = vistaOperacion.IdCuenta;
                db.Operaciones.Add(operacion);
                db.SaveChanges();
            }
            
        }

        public List<Operacion> ObtenerRetiros(BD_walletContext db, int idCuenta)
        {
            return db.Operaciones.Where(a => a.IdCuenta == idCuenta && a.Importe<0).ToList();
        }
        public List<Operacion> ObtenerIngresos(BD_walletContext db, int idCuenta)
        {
            return db.Operaciones.Where(a => a.IdCuenta == idCuenta && a.Importe > 0).ToList();
        }
    }
}
