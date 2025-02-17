namespace vizsga_backend.Models
{
    public class HirdetesAdatokDto
    {
        public string Orszag { get; set; }
        public string Varmegye { get; set; }
        public string Telepules { get; set; }
        public string Utcahazszam { get; set; }
        public string Tipus { get; set; }
        public decimal Ar { get; set; }
        public bool Gyerekbarat { get; set; }
        public bool Allatbarat { get; set; }
        public string Kiadasiidotartam { get; set; }
    }
}
