using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using vizsga_backend.Service.Dtoos;
using vizsga_backend.Service.IAuthService;

namespace vizsga_backend.Controllers
{
    [Route("Auth")]
    [ApiController]
    public class AuthController : ControllerBase
    {
        private readonly IAuth auth;

        public AuthController(IAuth auth)
        {
            this.auth = auth;
        }

        [HttpPost]
        public async Task<ActionResult> AddNewUser(RegiszterRequsetDto regiszterRequsetDto)
        {
            var user = auth.Regiszter(regiszterRequsetDto);


            if (user != null)
            {
                return StatusCode(201, user);
            }
            return BadRequest(new { result = "", message = "Siekrtelen regisztráció." });
        }
    }
}
