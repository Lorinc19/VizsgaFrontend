using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using vizsga_backend.Models;

namespace vizsga_backend.Controllers
{
    [Route("User")]
    [ApiController]
    public class UserController : ControllerBase
    {
        private readonly SzakmaivizsgaContext szakmaivizsgaContext;

        public UserController(SzakmaivizsgaContext szakmaivizsgaContext)
        {
            this.szakmaivizsgaContext = szakmaivizsgaContext;
        }
        //ID alapon lekérdezés a userekről

        [HttpGet("{id}")]
        public async Task<ActionResult<Aspnetuser>> GetByID(string id)
        {
            var os = await szakmaivizsgaContext.Aspnetusers.FirstOrDefaultAsync(os => os.Id == id);

            if (os != null)
            {
                return Ok(os);
            }

            return NotFound();
        }
    }
}
