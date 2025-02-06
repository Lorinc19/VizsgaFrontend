using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using vizsga_backend.Models;

namespace vizsga_backend.Controllers
{
    [Route("Hirdetés")]
    [ApiController]
    public class HirdeteController : ControllerBase
    {
        private readonly SzakmaivizsgaContext szakmaivizsgaContext;

        public HirdeteController(SzakmaivizsgaContext szakmaivizsgaContext)
        {
            this.szakmaivizsgaContext = szakmaivizsgaContext;
        }

        [HttpGet("Hirdetes")]
        public async Task<ActionResult<Hirdete>> Get()
        {
            return Ok(await szakmaivizsgaContext.Hirdetes.ToListAsync());
        }

    }
}
