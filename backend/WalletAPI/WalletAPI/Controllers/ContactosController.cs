using Entities;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Negocio;
using WalletAPI.Contracts;

namespace WalletAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ContactosController : Controller
    {
        ContactoBC contactoBC = new ContactoBC();
        BD_walletContext db = new();

        [HttpPost]
        [Route("")]
        public void Post([FromBody] CrearContacto crearContactos)

        {
            if (!ModelState.IsValid)
            {
                return;
            }
            contactoBC.NuevoContacto(db,crearContactos);
        }

        [HttpPost]
        [Route("GetContactos")]
        public List<Contacto> Post([FromBody] int idUsuario)
        {
            return contactoBC.ObtenerContactos(db,idUsuario);
        }

        [HttpDelete]
        [Route("")]
        public string Delete(int idContacto) 
        {
            try
            {
                return contactoBC.EliminarContacto(db, idContacto);
                
            }
            catch (Exception)
            {
                throw;
            }
        }

        [HttpPut]
        [Route("")]
        public string Put(string descripcion,int id) 
        {
            return contactoBC.ActualizarContacto(db,id,descripcion);
        }
    }
}
