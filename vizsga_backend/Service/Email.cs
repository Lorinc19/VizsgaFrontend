using MimeKit.Text;
using MimeKit;
using vizsga_backend.Models.Dtos;
using vizsga_backend.Service.IEmailService;
using System.Net.Mail;
using System.Net;

namespace vizsga_backend.Service
{
    public class Email : IEmail
    {
        private readonly IConfiguration _configuration;


        public Email(IConfiguration configuration)
        {
            _configuration = configuration;
        }

        public async Task SendEmail(string toEmail, string Subject, string Body)
        {
            var emailSettings = _configuration.GetSection("EmailSettings");

            var mailMessage = new MailMessage
            {
                From = new MailAddress(
                    emailSettings["FromAddress"],
                    emailSettings["FromName"]),
                Subject = Subject,
                Body = Body,
                IsBodyHtml = true
            };

            mailMessage.To.Add(toEmail);

            using var smtpClient = new SmtpClient(emailSettings["SmtpServer"])
            {
                Port = int.Parse(emailSettings["SmtpPort"]),
                Credentials = new NetworkCredential(
                emailSettings["SmtpUsername"],
                emailSettings["SmtpPassword"]),
                EnableSsl = bool.Parse(emailSettings["EnableSsl"])
            };
            await smtpClient.SendMailAsync(mailMessage);

        }
    }
}
