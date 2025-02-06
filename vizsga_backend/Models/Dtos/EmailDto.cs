using System.Globalization;

namespace vizsga_backend.Models.Dtos
{
    public record EmailRequestDto(string To, string Subject, string Body);
}
