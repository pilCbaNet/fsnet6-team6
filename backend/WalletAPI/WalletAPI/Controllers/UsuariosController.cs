using Entities;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Negocio;

namespace WalletAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UsuariosController : ControllerBase
    {
        BD_walletContext db = new();
        UsuarioBC usuariosBC = new UsuarioBC();

        [HttpGet]
        [Route("")]
        public List<Usuario> Get()
        {
            return usuariosBC.ObtenerUsuarios(db);
        }

        [HttpGet]
        [Route("{id:int}")]
        public Usuario? Get(int id)
        {
            try
            {
                return usuariosBC.ObtenerUsuario(db, id);
            }
            catch (Exception)
            {
                throw;  // Completar
            }
        }

        [HttpPost]
        [Route("GetLogin")]
        public Usuario? Post([FromBody] Login datosLogin)
        {
            return usuariosBC.GetLogin(db, datosLogin);
        }

        [HttpPost]
        [Route("")]
        public void Post([FromBody] Usuario user)

        {
            if (!ModelState.IsValid)
            {
                return;
            }
            usuariosBC.NuevoUsuario(db, user);
        }

        [HttpPut]
        [Route("")]
        public void Put([FromBody] Usuario user)
        {
            try
            {
                usuariosBC.ActualizarUsuario(db, user);
            }
            catch (Exception)
            {

                throw;
            }

        }

        [HttpDelete]
        [Route("{id}")]
        public void Delete(int id)
        {
            try
            {
                usuariosBC.EliminarUsuario(db, id);
            }
            catch (Exception)
            {
                throw;
            }


        }
    }
}
