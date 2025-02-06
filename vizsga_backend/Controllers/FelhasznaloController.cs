using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
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
        public async Task<ActionResult<Felhasznalo>> Post_Felhasznalo(CreatedFelhasznaloDto createdFelhasznaloDto)
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
        [HttpGet("{id}")]
        public async Task<ActionResult<Felhasznalo>> FelhGetid(int id)
        {
            var fi = szakmaivizsgaContext.Felhasznalos.FirstOrDefaultAsync(fi => fi.Id == id);
            if (fi != null)
            {
                return Ok( fi);
            }
            return NotFound();
        }
        
    }
}
