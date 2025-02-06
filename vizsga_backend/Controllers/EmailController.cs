using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using vizsga_backend.Models.Dtos;
using vizsga_backend.Service.IEmailService;

namespace vizsga_backend.Controllers
{
    [Route("Email")]
    [ApiController]
    public class EmailController : ControllerBase
    {
        private readonly IEmail email;

        public EmailController(IEmail email)
        {
            this.email = email;
        }

        [HttpPost]
        public ActionResult SendNewMail(EmailRequestDto emailRequestDto)
        {
            email.SendEmail(emailRequestDto);
            return Ok(new { messege = "Siekres email küldés" });
        }
    }
}
