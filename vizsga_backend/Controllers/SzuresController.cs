﻿using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using vizsga_backend.Models;
using vizsga_backend.Service;

namespace vizsga_backend.Controllers
{
    [Route("SzuresController")]
    [ApiController]
    public class SzuresController : ControllerBase
    {
        private readonly SzuresService _szuresService;

        public SzuresController(SzuresService szuresService)
        {
            _szuresService = szuresService;

        }
        [HttpGet("Szures")]
        public IActionResult hirdetesadatoks([FromQuery] string orszag = null,
        [FromQuery] string varmegye = null,
        [FromQuery] string telepules = null,
        [FromQuery] string tipus = null,
        [FromQuery] decimal? ar = null,
        [FromQuery] bool? gyerekbarat = null,
        [FromQuery] bool? allatbarat = null,
        [FromQuery] string kiadasiIdo = null)

        {
            var szuresI = _szuresService.hirdetesadatoks(orszag, varmegye, telepules, tipus, ar, gyerekbarat, allatbarat, kiadasiIdo);
            return Ok(szuresI);
        }
       
    }
}
