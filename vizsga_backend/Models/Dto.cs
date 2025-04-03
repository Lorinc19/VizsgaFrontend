namespace vizsga_backend.Models
{
    public record CreateHirdetesDto(string FelhasznaloID, string Leiras, string Elerhetoseg, string Hirdetesnev, string Orszag, string Varmegye, string Telepules, string Utca, string Hazszam, string Tipus, int Ar, bool Gyerekbarat, bool Allatbarat, string Kiadasiidotartam);

    public record UpdateHirdetesDto(string Leiras, string Elerhetoseg, string Hirdetesnev, string Orszag, string Varmegye, string Telepules, string Utca, string Hazszam, string Tipus, int Ar, bool Gyerekbarat, bool Allatbarat, string Kiadasiidotartam);

}
