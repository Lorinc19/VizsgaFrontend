namespace vizsga_backend.Service.Dtoos
{
    public record RegiszterRequsetDto(string UserName, string Password, String Email, string Keresztnev, string Vezeteknev, int Kor);
}
