using vizsga_backend.Models;
using static Microsoft.EntityFrameworkCore.DbLoggerCategory;

namespace vizsga_backend.Service
{
    public class SzuresService
    {
        private readonly SzakmaivizsgaContext _context;

        public SzuresService(SzakmaivizsgaContext context)
        {
            _context = context;
        }

        public IEnumerable<Hirdete> hirdetes(string orszag = null, string varmegye = null, string telepules = null,
        string tipus = null, decimal? ar = null, bool? gyerekbarat = null, bool? allatbarat = null, string kiadasiIdo = null)
        {
            var lekerdezes = _context.Hirdetes.AsQueryable();
            if (!string.IsNullOrEmpty(orszag))
                lekerdezes = lekerdezes.Where(i => i.Orszag.Contains(orszag));

            if (!string.IsNullOrEmpty(varmegye))
                lekerdezes = lekerdezes.Where(i => i.Varmegye.Contains(varmegye));

            if (!string.IsNullOrEmpty(telepules))
                lekerdezes = lekerdezes.Where(i => i.Telepules.Contains(telepules));

            if (!string.IsNullOrEmpty(tipus))
                lekerdezes = lekerdezes.Where(i => i.Tipus.Contains(tipus));

            if (ar.HasValue)
                lekerdezes = lekerdezes.Where(i => i.Ar <=ar.Value);

            if (gyerekbarat.HasValue)
                lekerdezes = lekerdezes.Where(i => i.Gyerekbarat == gyerekbarat.Value);

            if (allatbarat.HasValue)
                lekerdezes = lekerdezes.Where(i => i.Allatbarat == allatbarat.Value);

            if (!string.IsNullOrEmpty(kiadasiIdo))
                lekerdezes = lekerdezes.Where(i => i.Kiadasiidotartam.Contains(kiadasiIdo));

            return lekerdezes.ToList();
        }

    }
}
