using Entities;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using WalletAPI.Contracts;

namespace Negocio
{
    public class ContactoBC
    {
        public List<Contacto> ObtenerContactos(BD_walletContext db, int idUsuario)
        {
            List<Contacto> contactos = new List<Contacto>();
            Cuenta? cuenta = new Cuenta();
            Usuario? user = db.Usuarios.Where(a => a.IdUsuario == idUsuario).FirstOrDefault();
            if (user != null)
            {
                contactos = db.Contactos.Where(a => a.IdUsuario == idUsuario && a.FechaBaja == null).ToList();
                
            }
            return contactos;
        }

        public void NuevoContacto(BD_walletContext db, CrearContacto crearContacto)
        {
            Contacto contacto = new Contacto
            {
                FechaAlta = DateTime.UtcNow,
                Descripcion = crearContacto.Descripcion,
                IdCuenta = crearContacto.IdCuenta,
                IdUsuario = crearContacto.IdUsuario,
                Alias = crearContacto.Alias,
                Cvu = crearContacto.Cvu
            };

            db.Contactos.Add(contacto);
            db.SaveChanges();
        }

        public string EliminarContacto(BD_walletContext db, int idContacto)
        {
            Contacto? contacto = db.Contactos.Where(a => a.IdContacto == idContacto).FirstOrDefault();
            if (contacto != null)
            {
                contacto.FechaBaja = DateTime.UtcNow;
                db.SaveChanges();
                return "Operacion Exitosa";
            }
            else return "No se pudo completar la acción";
        }

        public string ActualizarContacto(BD_walletContext db, int idContacto, string descripcion) 
        {
            Contacto? contacto = new Contacto();
            contacto = db.Contactos.Where(a => a.IdContacto == idContacto).FirstOrDefault();

            if (contacto != null)
            {
                contacto.Descripcion = descripcion;
                contacto.FechaModificacion = DateTime.UtcNow;
                db.SaveChanges();
                return "Descripcion modificada";
            }
            else return "El contacto no existe";
        }   

    }
}
