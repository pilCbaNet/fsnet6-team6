using Entities;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Negocio;

namespace WalletAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class TransferenciasController : Controller
    {
        BD_walletContext db = new();
        TransferenciaBC transferenciaBC = new TransferenciaBC();

        [HttpPost]
        [Route("")]
        public void Post([FromBody] Transferencia transferencia)

        {
            if (!ModelState.IsValid)
            {
                return;
            }
            transferenciaBC.NuevaTransferencia(db, transferencia);
        }

        [HttpGet]
        [Route("GetEgresos")]
        public List<Transferencia> GetEgreso([FromQuery] int idCuenta)

        {
            return transferenciaBC.ObtenerTransferenciasRealizadas(db, idCuenta);
            
        }

        [HttpGet]
        [Route("GetIngresos")]
        public List<Transferencia> GetIngreso([FromQuery] int idCuenta)

        {
            return transferenciaBC.ObtenerTransferenciasRecibidas(db, idCuenta);

        }
    }
}
