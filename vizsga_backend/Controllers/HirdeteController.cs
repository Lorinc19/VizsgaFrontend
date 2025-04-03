﻿using Microsoft.AspNetCore.Http;
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
        public async Task<IActionResult> Ujhird(IFormFile file,[FromQuery] CreateHirdetesDto createHirdetesDto)
        {
            if (createHirdetesDto == null)
            {
                return BadRequest("A hirdetés adatainak megadása szükséges.");
            }

            if (file == null || file.Length == 0)
            {
                return BadRequest("Nincs fájl kiválasztva.");
            }
           
            
            using (var memoryStream = new MemoryStream())
            {
                await file.CopyToAsync(memoryStream);

                var hird = new Hirdete
                {
                    FelhasznaloId = createHirdetesDto.FelhasznaloID,
                    Leiras = createHirdetesDto.Leiras,
                    Elerhetoseg = createHirdetesDto.Elerhetoseg,
                    Hirdetesnev = createHirdetesDto.Hirdetesnev,
                    Orszag = createHirdetesDto.Orszag,
                    Varmegye = createHirdetesDto.Varmegye,
                    Telepules = createHirdetesDto.Telepules,
                    Utca = createHirdetesDto.Utca,
                    Hazszam = createHirdetesDto.Hazszam,
                    Tipus = createHirdetesDto.Tipus,
                    Ar = createHirdetesDto.Ar,
                    Gyerekbarat = createHirdetesDto.Gyerekbarat,
                    Allatbarat = createHirdetesDto.Allatbarat,
                    Kiadasiidotartam = createHirdetesDto.Kiadasiidotartam,
                    ImageData = memoryStream.ToArray(),
                    FileName = file.FileName,
                    ContentType = file.ContentType
                };

                szakmaivizsgaContext.Hirdetes.Add(hird);
                await szakmaivizsgaContext.SaveChangesAsync();
            }
            

            return Ok(new { message = "Kép sikeresen feltöltve!" });

           

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
