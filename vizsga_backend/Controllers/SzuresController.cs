using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using vizsga_backend.Models;
using vizsga_backend.Service;

namespace vizsga_backend.Controllers
{
    [Route("")]
    [ApiController]
    public class SzuresController : ControllerBase
    {
        private readonly SzuresService _szuresService;

        public SzuresController(SzuresService szuresService)
        {
            _szuresService = szuresService;

        }
        //A hirdetések szüréséhez kell. Itt minden paraméter opcionális.
        [HttpGet("FilterUser")]
        public IActionResult hirdetes ([FromQuery] string orszag = null,
        [FromQuery] string varmegye = null,
        [FromQuery] string telepules = null,
        [FromQuery] string tipus = null,
        [FromQuery] decimal? ar = null,
        [FromQuery] bool? gyerekbarat = null,
        [FromQuery] bool? allatbarat = null,
        [FromQuery] string kiadasiIdo = null)

        //A service meghivása az adott paraméterekkel
        {
            var szuresI = _szuresService.hirdetes(orszag: orszag, varmegye: varmegye, telepules: telepules, tipus:tipus, ar:ar, gyerekbarat:gyerekbarat, allatbarat:allatbarat, kiadasiIdo:kiadasiIdo);
            return Ok(szuresI);
        }
       
    }
}
