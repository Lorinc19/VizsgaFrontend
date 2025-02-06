using System;
using System.Collections.Generic;

namespace vizsga_backend.Models;

public partial class Felhasznalo
{
    public int Id { get; set; }

    public string? Csaladnev { get; set; }

    public string? Vezeteknev { get; set; }

    public bool? Elado { get; set; }

    public bool? Berlo { get; set; }

    public int? Kor { get; set; }

    public virtual ICollection<Hirdete> Hirdetes { get; set; } = new List<Hirdete>();
}
