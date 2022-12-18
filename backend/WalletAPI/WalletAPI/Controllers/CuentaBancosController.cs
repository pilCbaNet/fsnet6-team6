using Entities;
using Microsoft.AspNetCore.Mvc;
using Negocio;
using WalletAPI.Contracts;

namespace WalletAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CuentaBancosController : Controller
    {
        CuentaBancoBC cuentaBancoBC = new CuentaBancoBC();
        BD_walletContext db = new BD_walletContext();

        [HttpPost]
        [Route("")]
        public void Post([FromBody] VistaCuentaBanco vistaCuentaBanco )

        {
            if (!ModelState.IsValid)
            {
                return;
            }
            cuentaBancoBC.NuevaCuentaBanco(db, vistaCuentaBanco);
        }

        [HttpPost]
        [Route("GetCuentasBancos")]
        public List<CuentaBanco> Post([FromBody] int idUsuario)
        {
            return cuentaBancoBC.ObtenerCuentasBancos(db, idUsuario);
        }

        [HttpPost]
        [Route("GetCuentasBancosPropias")]
        public List<CuentaBanco> ObtenerCUnetasBancosPropias([FromBody] int idUsuario)
        {
            return cuentaBancoBC.ObtenerCuentasBancosPropias(db, idUsuario);
        }

    }
}
