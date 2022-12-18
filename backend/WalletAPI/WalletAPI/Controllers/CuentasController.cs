using Microsoft.AspNetCore.Mvc;
using Entities;
using Negocio;
// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace WalletAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CuentasController : ControllerBase
    {
        BD_walletContext db = new();
        CuentaBC cuentasBC = new CuentaBC();

        [HttpGet]
        [Route("GetSaldo")]
        public decimal GetSaldo([FromQuery] int id) 
        {
            return cuentasBC.ObtenerSaldo(db,id);
        }


        [HttpGet]
        [Route("GetAlias")]
        public int GetAlias([FromQuery] string alias)
        {
            int id = cuentasBC.ObtenerAlias(db, alias);
            return id;
        }

        [HttpGet]
        [Route("GetCvu")]
        public int GetCvu([FromQuery] string cvu)
        {
            int id = cuentasBC.ObtenerCvu(db, cvu);
            return id;
        }

        [HttpPut]
        [Route("")]
        public void PutSaldo([FromBody] int id,[FromQuery]decimal importe)
        {
           cuentasBC.ActualizarSaldo(db,id,importe);
        }
        [HttpGet]
        [Route("GetCuenta")]
        public VistaCuenta Post([FromQuery] int idCuenta)
        {
            return cuentasBC.ObtenerCuenta(db, idCuenta);
        }
    }
}
