using System;
using System.Collections.Generic;

namespace vizsga_backend.Models;

public partial class Hirdete
{
    public Guid Id { get; set; }

    public string FelhasznaloId { get; set; } = null!;

    public string Hirdetesnev { get; set; } = null!;

    public string Leiras { get; set; } = null!;

    public int Ar { get; set; }

    public string Elerhetoseg { get; set; } = null!;

    public string Orszag { get; set; } = null!;

    public string Varmegye { get; set; } = null!;

    public string Telepules { get; set; } = null!;

    public string Utcahazszam { get; set; } = null!;

    public string Tipus { get; set; } = null!;

    public string Kiadasiidotartam { get; set; } = null!;

    public sbyte Gyerekbarat { get; set; }

    public sbyte Allatbarat { get; set; }

    public string KepUrl { get; set; } = null!;

    public virtual Aspnetuser Felhasznalo { get; set; } = null!;
}
