using Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Negocio
{
    public class CuentaBancoBC
    {
        BancoBC bancoBC = new BancoBC();
        public void NuevaCuentaBanco(BD_walletContext db, VistaCuentaBanco vistaCuentaBanco)
        {
            CuentaBanco cuentaBanco = new CuentaBanco();
            Usuario? user = db.Usuarios.Where(a => a.IdUsuario == vistaCuentaBanco.IdUsuario).FirstOrDefault();
            Banco? banco = bancoBC.ObtenerBanco(db,vistaCuentaBanco.Banco);

            cuentaBanco.Descripcion = vistaCuentaBanco.Descripcion;
            cuentaBanco.Cuil = vistaCuentaBanco.Cuil;
            cuentaBanco.Cbu = vistaCuentaBanco.Cbu;
            cuentaBanco.Nombre = vistaCuentaBanco.Nombre;
            cuentaBanco.Apellido = vistaCuentaBanco.Apellido;
            cuentaBanco.IdBanco = banco.IdBanco;
            cuentaBanco.FechaAlta = DateTime.UtcNow;
            cuentaBanco.IdUsuario = vistaCuentaBanco.IdUsuario;
            

            db.CuentaBancos.Add(cuentaBanco);
            db.SaveChanges();
        }

        public List<CuentaBanco> ObtenerCuentasBancos(BD_walletContext db, int idUsuario)
        {
            List<CuentaBanco> cuentasBancos = new List<CuentaBanco>();
            Usuario? user = db.Usuarios.Where(a => a.IdUsuario == idUsuario).FirstOrDefault();
            if (user != null)
            {
                cuentasBancos = db.CuentaBancos.Where(a => a.IdUsuario == idUsuario && a.FechaBaja == null && a.Cuil != user.Cuil).ToList();

            }
            return cuentasBancos;
        }

        public List<CuentaBanco> ObtenerCuentasBancosPropias(BD_walletContext db, int idUsuario)
        {
            List<CuentaBanco> cuentasBancos = new List<CuentaBanco>();
            Usuario? user = db.Usuarios.Where(a => a.IdUsuario == idUsuario).FirstOrDefault();
            if (user != null)
            {
                cuentasBancos = db.CuentaBancos.Where(a => a.IdUsuario == idUsuario && a.FechaBaja == null && a.Cuil == user.Cuil).ToList();

            }
            return cuentasBancos;
        }

    }
}
