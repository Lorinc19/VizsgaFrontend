using System;
using System.Collections.Generic;
using System.Text.Json.Serialization;

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

    public string Tipus { get; set; } = null!;

    public string Kiadasiidotartam { get; set; } = null!;

    public bool Gyerekbarat { get; set; }

    public bool Allatbarat { get; set; }

    public string? Utca { get; set; }

    public string? Hazszam { get; set; }

    public byte[] ImageData { get; set; } = null!;

    public string FileName { get; set; } = null!;

    public string ContentType { get; set; } = null!;

    [JsonIgnore]
    public virtual Aspnetuser Felhasznalo { get; set; } = null!;
}
