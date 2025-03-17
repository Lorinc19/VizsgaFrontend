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

        [HttpPost("Regisztráció")]
        public async Task<ActionResult> AddNewUser(RegiszterRequestDto regiszterRequestDto)
        {
            var user = auth.Regiszter(regiszterRequestDto);


            if (user != null)
            {
                return StatusCode(201, user);
            }
            return BadRequest(new { result = "", message = "Siekrtelen regisztráció." });
        }


        [HttpPost("Login")]
        public async Task<ActionResult> LoginUser (LoginRequestDto loginRequestDto)
        {
            var res = await auth.Login(loginRequestDto);
            if (res != null)
            {
                return StatusCode(200, res);

            }
            return NotFound(res);
        }

        [HttpPost("hozzárendelés")]
        public async Task<ActionResult> AddRole(string UserName, string roleName)
        {
            var res = await auth.AssignRole(UserName, roleName);

            if (res != null)
            {
                return Ok(res);
            }

            return BadRequest(res);
        }
    }
}
