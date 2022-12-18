using Microsoft.AspNetCore.Mvc;
using Entities;
using Negocio;


namespace WalletAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class BancosController : ControllerBase
    {
        BD_walletContext db = new();
        BancoBC bancosBC = new BancoBC();

        [HttpGet]
        [Route("")]
        public List<string> Get()
        {
           return bancosBC.ObtenerBancos(db);
        }

        [HttpGet]
        [Route("{nombre}")]
        public Banco? Get(string nombre)
        {
            try
            {
                return bancosBC.ObtenerBanco(db, nombre);
            }
            catch (Exception)
            {
                throw;
            }
        }

        /*[HttpPost]
        [Route("")]
        public void Post([FromBody] Banco banco)

        {
            if (!ModelState.IsValid)
            {
                return;
            }
            bancosBC.NuevoBanco(db, banco);
        }*/

        /*[HttpPut]
        [Route("")]
        public void Put([FromBody] Banco banco)
        {
            try
            {
                bancosBC.ActualizarBanco(db, banco);
            }
            catch (Exception)
            {

                throw;
            }

        }*/

        /*[HttpDelete]
        [Route("{id}")]
        public void Delete(int id)
        {
            try
            {
                bancosBC.EliminarBanco(db, id);
            }
            catch (Exception)
            {
                throw;
            }


        }*/

    }
}
