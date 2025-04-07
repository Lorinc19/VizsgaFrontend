using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.IO;
using vizsga_backend.Models;
using static System.Net.Mime.MediaTypeNames;

namespace vizsga_backend.Controllers
{
    [Route("Advertisement")]
    [ApiController]
    public class HirdeteController : ControllerBase
    {
        private readonly SzakmaivizsgaContext szakmaivizsgaContext;

        public HirdeteController(SzakmaivizsgaContext szakmaivizsgaContext)
        {
            this.szakmaivizsgaContext = szakmaivizsgaContext;
        }

        [HttpGet("All")]
        public async Task<ActionResult<Hirdete>> Get()
        {

            return Ok(await szakmaivizsgaContext.Hirdetes.ToListAsync());
        }

		[HttpPost]
		public async Task<IActionResult> Ujhird([FromBody] CreateHirdetesRequest request)
		{
			if (request == null || request.CreateHirdetesDto == null)
			{
				return BadRequest("A hirdetés adatainak megadása szükséges.");
			}

			if (string.IsNullOrEmpty(request.Base64File))
			{
				return BadRequest("Nincs fájl kiválasztva.");
			}

			try
			{
				// Base64 string konvertálása byte tömbbé
				var fileBytes = Convert.FromBase64String(request.Base64File);

				var hird = new Hirdete
				{
					FelhasznaloId = request.CreateHirdetesDto.FelhasznaloID,
					Leiras = request.CreateHirdetesDto.Leiras,
					Elerhetoseg = request.CreateHirdetesDto.Elerhetoseg,
					Hirdetesnev = request.CreateHirdetesDto.Hirdetesnev,
					Orszag = request.CreateHirdetesDto.Orszag,
					Varmegye = request.CreateHirdetesDto.Varmegye,
					Telepules = request.CreateHirdetesDto.Telepules,
					Utca = request.CreateHirdetesDto.Utca,
					Hazszam = request.CreateHirdetesDto.Hazszam,
					Tipus = request.CreateHirdetesDto.Tipus,
					Ar = request.CreateHirdetesDto.Ar,
					Gyerekbarat = request.CreateHirdetesDto.Gyerekbarat,
					Allatbarat = request.CreateHirdetesDto.Allatbarat,
					Kiadasiidotartam = request.CreateHirdetesDto.Kiadasiidotartam,
					ImageData = fileBytes,
					FileName = request.FileName,
					ContentType = request.ContentType
				};

				szakmaivizsgaContext.Hirdetes.Add(hird);
				await szakmaivizsgaContext.SaveChangesAsync();

				return Ok(new { message = "Kép sikeresen feltöltve!" });
			}
			catch (FormatException)
			{
				return BadRequest("Érvénytelen base64 formátum.");
			}
			catch (Exception ex)
			{
				return StatusCode(500, $"Hiba történt a feltöltés során: {ex.Message}");
			}
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

        [HttpGet("Getid")]
        public async Task<ActionResult<Hirdete>> GetByyID(Guid id)
        {
            var os = await szakmaivizsgaContext.Hirdetes.FirstOrDefaultAsync(os => os.Id == id);

            if (os != null)
            {
                return Ok(os);
            }

            return NotFound();
        }

        [HttpPut("Puthird")]
        public async Task<ActionResult<Hirdete>> HirdetesPut(Guid id, UpdateHirdetesDto updateHirdetesDto)
        {
            var uphird = await szakmaivizsgaContext.Hirdetes.FirstOrDefaultAsync(os => os.Id == id);

            if (uphird != null)
            {
                uphird.Leiras = updateHirdetesDto.Leiras;
                uphird.Elerhetoseg=updateHirdetesDto.Elerhetoseg;
                uphird.Hirdetesnev = updateHirdetesDto.Hirdetesnev;
                uphird.Orszag=updateHirdetesDto.Orszag;
                uphird.Varmegye = updateHirdetesDto.Varmegye;
                uphird.Telepules = updateHirdetesDto.Telepules;
                uphird.Utca = updateHirdetesDto.Utca;
                uphird.Hazszam=updateHirdetesDto.Hazszam;
                uphird.Tipus = updateHirdetesDto.Tipus;
                uphird.Ar=updateHirdetesDto.Ar;
                uphird.Gyerekbarat=updateHirdetesDto.Gyerekbarat;
                uphird.Allatbarat=updateHirdetesDto.Allatbarat;
                uphird.Kiadasiidotartam=updateHirdetesDto.Kiadasiidotartam;
                szakmaivizsgaContext.Hirdetes.Update(uphird);
                await szakmaivizsgaContext.SaveChangesAsync();
                return Ok(uphird);

            }
            return NotFound(new { message = "Nincs ilyen találat." });
        }


    }
}
