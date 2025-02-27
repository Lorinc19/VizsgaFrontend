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
            //var lekerdezes =await  _context.Hirdetesadatoks.Where(x => x.Varmegye.Contains(szures.Varmegye) || x.Telepules.Contains(szures.Telepules) || x.Tipus.Contains(szures.Tipus) ||  .ToListAsync();

            var varmegye = await _context.Hirdetesadatoks.Where(x => x.Varmegye.Contains(szures.Varmegye)).ToListAsync();

            var telepulesek = varmegye.Where(x => x.Telepules.Contains(szures.Telepules)).ToList();


            return Ok(varmegye);
            
        }
    }
}
