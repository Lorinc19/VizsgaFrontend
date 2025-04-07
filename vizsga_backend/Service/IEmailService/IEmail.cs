using vizsga_backend.Models.Dtos;

namespace vizsga_backend.Service.IEmailService
{
    public interface IEmail
    {
        Task SendEmail(string toEmail, string Subject, string Body);
    }
}
