using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Entities;

namespace Negocio
{
    public class UsuarioBC
    {
        public Usuario? ObtenerUsuario(BD_walletContext db, int id)
        {
            return db.Usuarios.Where(a => a.IdUsuario == id).FirstOrDefault();
        }

        public List<Usuario> ObtenerUsuarios(BD_walletContext db)
        {
            return db.Usuarios.ToList();
        }

        public Usuario? GetLogin(BD_walletContext db, Login datosLogin)
        {
            return db.Usuarios.Where(a => a.User == datosLogin.User && a.Contrasena == datosLogin.Password).FirstOrDefault();
        }

        public void ActualizarUsuario(BD_walletContext db, Usuario user)
        {
            Usuario? oUsuario = db.Usuarios.Where(a => a.IdUsuario == user.IdUsuario).FirstOrDefault();
            if (oUsuario != null)
            {
                oUsuario.Nombre = user.Nombre;
                oUsuario.Apellido = user.Apellido;
                oUsuario.Email = user.Email;
                oUsuario.Contrasena = user.Contrasena;
                oUsuario.Telefono = user.Telefono;
                oUsuario.FechaModificacion = DateTime.Today;
                db.SaveChanges();   
            }
        }

        public void NuevoUsuario(BD_walletContext db, Usuario user)
        {
            CuentaBC cuentaBC= new CuentaBC();
            user.FechaAlta = DateTime.UtcNow;
            user.IdCuenta = cuentaBC.NuevaCuenta(db); 
            db.Usuarios.Add(user);
            db.SaveChanges();
        }

        public void EliminarUsuario(BD_walletContext db, int id)
        {
            Usuario? user = db.Usuarios.Where(a => a.IdUsuario == id).FirstOrDefault();
            if (user != null)
            {
                user.FechaBaja = DateTime.Today;
                db.SaveChanges();
            }
        }
    }
}
