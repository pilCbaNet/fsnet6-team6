using Entities;
using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Negocio
{
    public class TransferenciaBC
    {
        public void NuevaTransferencia(BD_walletContext db, Transferencia transferencia)
        {
            transferencia.FechaHora = DateTime.UtcNow;
            db.Transferencia.Add(transferencia);
            db.SaveChanges();
        }

        public List<Transferencia> ObtenerTransferenciasRealizadas(BD_walletContext db, int idCuenta)
        {
            List<Transferencia> transferencias= new List<Transferencia>();
         
            return db.Transferencia.Where(a => a.IdCuentaOrigen == idCuenta).ToList();
            
        }
        public List<Transferencia> ObtenerTransferenciasRecibidas(BD_walletContext db, int idCuenta)
        {
            List<Transferencia> transferencias= new List<Transferencia>();
         
            return db.Transferencia.Where(a => a.IdCuentaDestino == idCuenta).ToList();
            
        }
    }
}
