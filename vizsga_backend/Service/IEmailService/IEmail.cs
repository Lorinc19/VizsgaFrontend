﻿using vizsga_backend.Models.Dtos;

namespace vizsga_backend.Service.IEmailService
{
    public interface IEmail
    {
        void SendEmail(string toEmail, string Subject, string Body);
    }
}
