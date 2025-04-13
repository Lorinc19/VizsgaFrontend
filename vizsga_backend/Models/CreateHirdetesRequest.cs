namespace vizsga_backend.Models
{
    public class CreateHirdetesRequest
    {
		//A kép beviteléhez az adatbázisba rész miatt szülséges ez a model
		public CreateHirdetesDto CreateHirdetesDto { get; set; }
		public string Base64File { get; set; }
		public string FileName { get; set; }
		public string ContentType { get; set; }
	}
}
