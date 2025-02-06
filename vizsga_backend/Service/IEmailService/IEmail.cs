using vizsga_backend.Models.Dtos;

namespace vizsga_backend.Service.IEmailService
{
    public interface IEmail
    {
        void SendEmail(EmailRequestDto emailRequestDto);
    }
}
