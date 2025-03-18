namespace vizsga_backend.Service.Dtoos
{
    public record RegiszterRequestDto(string UserName,  string Email, string Keresztnev, string Vezeteknev, int Kor, string Password);

    public record LoginRequestDto(string UserName, string Password);

}
