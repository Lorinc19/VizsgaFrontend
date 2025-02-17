﻿using Microsoft.AspNetCore.Http;
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
        public async Task<IActionResult> Ujhird([FromBody] HirdetesDto hirdetesDto)
        {
            if (hirdetesDto == null)
            {
                return BadRequest("A hirdetés adatainak megadása szükséges.");
            }
            var hird = new Hirdete
            {
                FelhasznaloId = hirdetesDto.FelhasznaloID,
                Leiras = hirdetesDto.Leiras,
                Elerhetoseg = hirdetesDto.Elerhetoseg,
                Hirdetesnev = hirdetesDto.Hirdetesnev,
                KepURL = hirdetesDto.KepURL
            };

            szakmaivizsgaContext.Hirdetes.Add(hird);
            await szakmaivizsgaContext.SaveChangesAsync();

            var hirdadat = new Hirdetesadatok
            {
                HirdetesId = hird.Id,
                Orszag = hirdetesDto.HirdetesAdatok.Orszag,
                Varmegye = hirdetesDto.HirdetesAdatok.Varmegye,
                Telepules = hirdetesDto.HirdetesAdatok.Telepules,
                Utcahazszam = hirdetesDto.HirdetesAdatok.Utcahazszam,
                Tipus = hirdetesDto.HirdetesAdatok.Tipus,
                Ar = hirdetesDto.HirdetesAdatok.Ar,
                Gyerekbarat = hirdetesDto.HirdetesAdatok.Gyerekbarat,
                Allatbarat = hirdetesDto.HirdetesAdatok.Allatbarat,
                Kiadasiidotartam = hirdetesDto.HirdetesAdatok.Kiadasiidotartam
            };
            szakmaivizsgaContext.Hirdetesadatoks.Add(hirdadat);
            await szakmaivizsgaContext.SaveChangesAsync();


            return CreatedAtRoute("GetHirdetes", new { id = hird.Id }, hird);
        }


    }
}
