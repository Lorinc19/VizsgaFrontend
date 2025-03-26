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

        [HttpPost]
        public async Task<IActionResult> Ujhird(CreateHirdetesDto createHirdetesDto)
        {
            if (createHirdetesDto == null)
            {
                return BadRequest("A hirdetés adatainak megadása szükséges.");
            }
            var hird = new Hirdete
            {
                FelhasznaloId = createHirdetesDto.FelhasznaloID,
                Leiras = createHirdetesDto.Leiras,
                Elerhetoseg = createHirdetesDto.Elerhetoseg,
                Hirdetesnev = createHirdetesDto.Hirdetesnev,
                KepUrl = createHirdetesDto.KepURL,
                Orszag = createHirdetesDto.Orszag,
                Varmegye = createHirdetesDto.Varmegye,
                Telepules = createHirdetesDto.Telepules,
                Utca = createHirdetesDto.Utca,
                Hazszam = createHirdetesDto.Hazszam,
                Tipus = createHirdetesDto.Tipus,
                Ar = createHirdetesDto.Ar,
                Gyerekbarat = createHirdetesDto.Gyerekbarat,
                Allatbarat = createHirdetesDto.Allatbarat,
                Kiadasiidotartam = createHirdetesDto.Kiadasiidotartam

            };

            szakmaivizsgaContext.Hirdetes.Add(hird);
            await szakmaivizsgaContext.SaveChangesAsync();

            return StatusCode(201,hird);
        }



        [HttpDelete]
        public async Task<ActionResult> Delete(Guid id)
        {
            var os = await szakmaivizsgaContext.Hirdetes.FirstOrDefaultAsync(o => o.Id == id);

            if (os != null)
            {
                szakmaivizsgaContext.Hirdetes.Remove(os);
                await szakmaivizsgaContext.SaveChangesAsync();
                return Ok(new { message = "Sikeres törlés!" });
            }

            return NotFound(new { message = "Nincs ilyen találat." });
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<Hirdete>> GetByyID(Guid id)
        {
            var os = await szakmaivizsgaContext.Hirdetes.FirstOrDefaultAsync(os => os.Id == id);

            if (os != null)
            {
                return Ok(os);
            }

            return NotFound();
        }


    }
}
