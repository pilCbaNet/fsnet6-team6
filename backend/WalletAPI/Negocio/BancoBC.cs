using Entities;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Negocio
{
    public class BancoBC
    {
        public Banco? ObtenerBanco(BD_walletContext db, string nombre)
        {
            return db.Bancos.Where(a => a.Nombre == nombre).FirstOrDefault();
        }

        public List<string> ObtenerBancos(BD_walletContext db)
        {
            List <string> bancos = new List<string>();

            foreach (var banco in db.Bancos)
            {
                bancos.Add(banco.Nombre);
            }

            return bancos;
        }

        public void ActualizarBanco(BD_walletContext db, Banco banco)
        {
            Banco? oBanco = db.Bancos.Where(a => a.IdBanco == banco.IdBanco).FirstOrDefault();
            if (oBanco != null)
            {
                oBanco.Nombre = banco.Nombre;
                oBanco.Descripcion = banco.Descripcion;
                oBanco.FechaModificacion = DateTime.Today;
                db.SaveChanges();
            }
        }

        public void NuevoBanco(BD_walletContext db, Banco banco)
        {
            banco.FechaAlta = DateTime.UtcNow;
            db.Bancos.Add(banco);
            db.SaveChanges();
        }

        public void EliminarBanco(BD_walletContext db, int id)
        {
            Banco? banco = db.Bancos.Where(a => a.IdBanco == id).FirstOrDefault();
            if (banco != null)
            {
                banco.FechaBaja = DateTime.Today;
                db.SaveChanges();
            }
        }
    }
}
