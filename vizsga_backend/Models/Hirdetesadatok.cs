using System;
using System.Collections.Generic;

namespace vizsga_backend.Models;

public partial class Hirdetesadatok
{
    public int HirdetesId { get; set; }

    public string Orszag { get; set; } = null!;

    public string? Varmegye { get; set; }

    public string? Telepules { get; set; }

    public string? Utcahazszam { get; set; }

    public string? Tipus { get; set; }

    public decimal? Ar { get; set; }

    public bool? Gyerekbarat { get; set; }

    public bool? Allatbarat { get; set; }

    public string? Kiadasiidotartam { get; set; }

    public virtual Hirdete Hirdetes { get; set; } = null!;
}
