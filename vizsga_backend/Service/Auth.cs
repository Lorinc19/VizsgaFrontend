using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using System.Diagnostics;
using vizsga_backend.Models;
using vizsga_backend.Service.Dtoos;
using vizsga_backend.Service.IAuthService;

namespace vizsga_backend.Service
{
    public class Auth : IAuth
    {
        private readonly SzakmaivizsgaContext szakmaivizsgaContext;
        private readonly UserManager<ApplicationUser> userManager;

        public Auth(SzakmaivizsgaContext szakmaivizsgaContext, UserManager<ApplicationUser> userManager)
        {
            this.szakmaivizsgaContext = szakmaivizsgaContext;
            this.userManager = userManager;
        }

        public async Task<object> Regiszter(RegiszterRequsetDto regiszterRequsetDto)
        {
            var user = new ApplicationUser
            {
                UserName = regiszterRequsetDto.UserName,
                Email = regiszterRequsetDto.Email,
                Keresztnev = regiszterRequsetDto.Keresztnev,
                Vezeteknev = regiszterRequsetDto.Vezeteknev,
                Kor = regiszterRequsetDto.Kor

            };

            var result = await userManager.CreateAsync(user, regiszterRequsetDto.Password);

            if (result.Succeeded)
            {
                var userReturn = await szakmaivizsgaContext.applicationUsers.FirstOrDefaultAsync(user => user.UserName == regiszterRequsetDto.UserName);

                return new { result = userReturn, message = "Sikeres Regisztráció." };
            }
            return new { result = "", message = result.Errors.FirstOrDefault().Description };
        }
    }
}
