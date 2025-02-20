namespace vizsga_backend.Models
{
    public class SzuresDto
    {
        public string? Orszag { get; set; }
        public string? Varmegye { get; set; }
        public string? Telepules { get; set; }
        public string? Tipus { get; set; }
        public decimal? MinAr { get; set; }
        public decimal? MaxAr { get; set; }
        public bool? Gyerekbarat { get; set; }
        public bool? Allatbarat { get; set; }
    }
}
