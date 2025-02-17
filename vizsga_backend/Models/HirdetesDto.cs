namespace vizsga_backend.Models
{
    public class HirdetesDto
    {
       
        
            public int FelhasznaloID { get; set; }
            public string Leiras { get; set; }
            public string Elerhetoseg { get; set; }
            public string Hirdetesnev { get; set; }
            public string KepURL { get; set; }

            public HirdetesAdatokDto HirdetesAdatok { get; set; }
        
    }
}
