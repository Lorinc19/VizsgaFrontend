using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using MimeKit.Cryptography;
using vizsga_backend.Models;

namespace vizsga_backend.Controllers
{
    [Route("Felhasznaló")]
    [ApiController]
    public class FelhasznaloController : ControllerBase
    {
        private readonly SzakmaivizsgaContext szakmaivizsgaContext;

        public FelhasznaloController(SzakmaivizsgaContext szakmaivizsgaContext)
        {
            this.szakmaivizsgaContext = szakmaivizsgaContext;
        }

        [HttpPost("FElhasznalo")]
        public async Task<ActionResult<Felhasznalo>> Post_Felhasznalo (CreatedFelhasznaloDto createdFelhasznaloDto)
        {
            var uf = new Felhasznalo
            {
                Vezeteknev = createdFelhasznaloDto.Vezeteknev,
                Csaladnev = createdFelhasznaloDto.Csaladnev,
                Elado = createdFelhasznaloDto.Elado,
                Berlo = createdFelhasznaloDto.Berlo,
                Kor = createdFelhasznaloDto.Kor
            };
            if (uf != null)
            {
                await szakmaivizsgaContext.Felhasznalos.AddAsync(uf);
                await szakmaivizsgaContext.SaveChangesAsync();
                return StatusCode(201, uf);

            }


            return BadRequest();
        }
    }
}
