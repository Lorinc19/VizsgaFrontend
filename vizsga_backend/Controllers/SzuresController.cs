using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using vizsga_backend.Models;

namespace vizsga_backend.Controllers
{
    [Route("Szures")]
    [ApiController]
    public class SzuresController : ControllerBase
    {
        private readonly SzakmaivizsgaContext _context;

        public SzuresController(SzakmaivizsgaContext context)
        {
            _context = context;
        }
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Hirdete>>> GetHirdetesek([FromQuery] SzuresDto szures)
        {
            var lekerdezes = _context.Hirdetes.Include(h => h.Hirdetesadatok).AsQueryable();

            if (!string.IsNullOrEmpty(szures.Orszag))
                lekerdezes = lekerdezes.Where(h => h.Hirdetesadatok.Orszag == szures.Orszag);

            if (!string.IsNullOrEmpty(szures.Varmegye))
                lekerdezes = lekerdezes.Where(h => h.Hirdetesadatok.Varmegye == szures.Varmegye);

            if (!string.IsNullOrEmpty(szures.Telepules))
                lekerdezes = lekerdezes.Where(h => h.Hirdetesadatok.Telepules == szures.Telepules);

            if (!string.IsNullOrEmpty(szures.Tipus))
                lekerdezes = lekerdezes.Where(h => h.Hirdetesadatok.Tipus == szures.Tipus);

            if (szures.MinAr.HasValue)
                lekerdezes = lekerdezes.Where(h => h.Hirdetesadatok.Ar >= szures.MinAr.Value);

            if (szures.MaxAr.HasValue)
                lekerdezes = lekerdezes.Where(h => h.Hirdetesadatok.Ar <= szures.MaxAr.Value);

            if (szures.Allatbarat.HasValue)
                lekerdezes = lekerdezes.Where(h => h.Hirdetesadatok.Allatbarat == szures.Allatbarat);

            if (szures.Gyerekbarat.HasValue)
                lekerdezes = lekerdezes.Where(h => h.Hirdetesadatok.Gyerekbarat == szures.Gyerekbarat);

            return Ok(await lekerdezes.ToListAsync());
        }
    }
}
