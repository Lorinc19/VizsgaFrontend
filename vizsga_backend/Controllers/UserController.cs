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

        [HttpGet("id")]
        public async Task<ActionResult<Aspnetuser>> GetByID(string id)
        {
            var os = await szakmaivizsgaContext.Aspnetusers.FirstOrDefaultAsync(os => os.Id == id);

            if (os != null)
            {
                return Ok(os);
            }

            return NotFound();
        }
        [HttpGet("AdminUser")]
        public async Task<ActionResult<Aspnetuser>> AdminUserGet()
        {
            return Ok(await szakmaivizsgaContext.Aspnetusers.ToListAsync());
        }

        [HttpDelete("{id}")]
        public async Task<ActionResult> Delete(string id)
        {
            var os = await szakmaivizsgaContext.Aspnetusers.FirstOrDefaultAsync(o => o.Id == id);

            if (os != null)
            {
                szakmaivizsgaContext.Aspnetusers.Remove(os);
                await szakmaivizsgaContext.SaveChangesAsync();
                return Ok(new { message = "Sikeres törlés!" });
            }

            return NotFound(new { message = "Nincs ilyen találat." });
        }
    }
}
