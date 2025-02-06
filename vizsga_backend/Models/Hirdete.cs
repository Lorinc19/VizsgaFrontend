using System;
using System.Collections.Generic;

namespace vizsga_backend.Models;

public partial class Hirdete
{
    public int Id { get; set; }

    public int? FelhasznaloId { get; set; }

    public string? Leiras { get; set; }

    public string? Elerhetoseg { get; set; }

    public virtual Felhasznalo? Felhasznalo { get; set; }

    public virtual Hirdetesadatok? Hirdetesadatok { get; set; }
}
