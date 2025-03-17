namespace vizsga_backend.Service.Dtoos
{
    public record RegiszterRequestDto(string UserName, string Password, string Email, string Keresztnev, string Vezeteknev, int Kor);

    public record LoginRequestDto(string UserName, string Password);

}
