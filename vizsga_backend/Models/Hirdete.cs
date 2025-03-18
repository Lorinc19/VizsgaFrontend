using System;
using System.Collections.Generic;

namespace vizsga_backend.Models;

public partial class Hirdete
{
    public int Id { get; set; }

    public string? FelhasznaloId { get; set; }

    public string? Leiras { get; set; }

    public string? Elerhetoseg { get; set; }

    public string? Hirdetesnev { get; set; }

    public string? KepUrl { get; set; }

    public virtual Aspnetuser? Felhasznalo { get; set; }

    public virtual Hirdetesadatok? Hirdetesadatok { get; set; }
}
