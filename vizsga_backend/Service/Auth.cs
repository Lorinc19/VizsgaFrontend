using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Logging;
using vizsga_backend.Models;
using vizsga_backend.Service.Dtoos;
using vizsga_backend.Service.IAuthService;
using vizsga_backend.Service.IEmailService;

namespace vizsga_backend.Service
{
    public class Auth : IAuth
    {
        private readonly SzakmaivizsgaContext szakmaivizsgaContext;
        private readonly UserManager<ApplicationUser> userManager;
        private readonly RoleManager<IdentityRole> roleManager;
        private readonly IEmail email;
        private readonly ITokenGernerator tokenGernerator;


        public Auth(SzakmaivizsgaContext szakmaivizsgaContext, UserManager<ApplicationUser> userManager, RoleManager<IdentityRole> roleManager, IEmail email, ITokenGernerator tokenGernerator)
        {
            this.szakmaivizsgaContext = szakmaivizsgaContext;
            this.userManager = userManager;
            this.roleManager = roleManager;
            this.email = email;
            this.tokenGernerator = tokenGernerator;

        }

        public async Task<object> AssignRole(string UserName, string roleName)
        {
            var user = await szakmaivizsgaContext.applicationUsers.FirstOrDefaultAsync(user => user.NormalizedUserName == UserName.ToUpper());

            if (user != null)
            {
                if (!roleManager.RoleExistsAsync(roleName).GetAwaiter().GetResult())
                {
                    roleManager.CreateAsync(new IdentityRole(roleName)).GetAwaiter().GetResult();

                }
                await userManager.AddToRoleAsync(user, roleName);
                return new { result = user, message = "Sikeres Hozzárendelés" };

            }
            return new { result = "", message = "Sikertelen hozzárendelés" };
        }

        public async Task<object> Login(LoginRequestDto loginRequestDto)
        {
            var user = await szakmaivizsgaContext.applicationUsers.FirstOrDefaultAsync(user => user.NormalizedUserName == loginRequestDto.UserName.ToUpper());

            if (user == null)
            {
                return null;
            }


            bool isValid = await userManager.CheckPasswordAsync(user, loginRequestDto.Password);

            if (isValid)
            {
                var roles = await userManager.GetRolesAsync(user);
                var jwtToken = tokenGernerator.GenerateToken(user, roles);

                return new { result = new { user.UserName, user.Email }, message = "Sikeres bejelentkezés", token = jwtToken };

                ;
            }
            return null;
        }

        public async Task<object> Regiszter(RegiszterRequestDto regiszterRequestDto)
        {
            var user = new ApplicationUser()
            {
                UserName = regiszterRequestDto.UserName,
                Email = regiszterRequestDto.Email,
                Keresztnev = regiszterRequestDto.Keresztnev,
                Vezeteknev = regiszterRequestDto.Vezeteknev,
                Kor = regiszterRequestDto.Kor

            };

            if (user == null)
            {
                return null;
            }


            var result = await userManager.CreateAsync(user, regiszterRequestDto.Password);

            if (result.Succeeded)
            {
                var userReturn = await szakmaivizsgaContext.applicationUsers.FirstOrDefaultAsync(user => user.UserName == regiszterRequestDto.UserName);


                var imageId = "1G9yDHGcHGjzqgnBpvBwTTzVanQKwTor9";




                var emailTemplate = $@"
                <html>
                <body>
                        <h1><strong>Köszönjük regisztrációját, {regiszterRequestDto.UserName}!</strong></h1>
                        <h3><strong>Üdv a csapatba!</strong></h3>
                        <img src='https://github.com/Lorinc19/Image-kep/blob/main/Minimalist_Thank_You_Card_.png?raw=true' width='1000' height='600' alt='Köszönő kép'>
            
                        <p><strong>AlbiGo csapat</strong></p>
                 </html>";

                try
                {
                    await email.SendEmail(
                        regiszterRequestDto.Email,
                        "Sikeres regisztráció",
                        emailTemplate);
                }
                catch
                {


                }

                return new { result = userReturn, message = "Sikeres Regisztráció." };
            }

            return null;
        }
    }
}
