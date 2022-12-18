using Microsoft.AspNetCore.Mvc;
using Entities;
using Negocio;
// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace WalletAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class OperacionesController : ControllerBase
    {
        BD_walletContext db = new();
        OperacionBC operacionBC = new OperacionBC();

        [HttpPost]
        [Route("")]
        public void Post([FromBody] VistaOperacion vistaOperacion)

        {
            if (!ModelState.IsValid)
            {
                return;
            }
            operacionBC.NuevaOperacion(db, vistaOperacion);
        }

        [HttpGet]
        [Route("GetRetiros")]
        public List<Operacion> GetRetiros([FromQuery] int idCuenta)

        {
            return operacionBC.ObtenerRetiros(db, idCuenta);
        }

        [HttpGet]
        [Route("GetIngresos")]
        public List<Operacion> GetIngresos([FromQuery] int idCuenta)

        {
            return operacionBC.ObtenerIngresos(db, idCuenta);
        }
    }
}
