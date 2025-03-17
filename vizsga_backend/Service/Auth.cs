﻿using Microsoft.AspNetCore.Identity;
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
        private readonly RoleManager<IdentityRole>  roleManager;

        private readonly ITokenGernerator tokenGernerator;

        public Auth(SzakmaivizsgaContext szakmaivizsgaContext, UserManager<ApplicationUser> userManager, RoleManager<IdentityRole> roleManager, ITokenGernerator tokenGernerator)
        {
            this.szakmaivizsgaContext = szakmaivizsgaContext;
            this.userManager = userManager;
            this.roleManager = roleManager;
            this.tokenGernerator = tokenGernerator;
        }

        public async Task<object> Login(LoginRequestDto loginRequestDto)
        {
            var user = await szakmaivizsgaContext.applicationUsers.FirstOrDefaultAsync(user => user.NormalizedUserName == loginRequestDto.UserName.ToUpper());

            bool isValid = await userManager.CheckPasswordAsync(user,loginRequestDto.Password);

            if (isValid)
            {
                var roles = await userManager.GetRolesAsync(user);
                var jwtToken = tokenGernerator.GenerateToken(user, roles);

                return new { result = new { user.UserName, user.Email }, message = "Sikeres bejelentkezés", token= jwtToken };

;           }
            return new { result = "", message = "Sikertelen a belépés", token = ""};
        }

        public async Task<object> Regiszter(RegiszterRequestDto regiszterRequestDto)
        {
            ApplicationUser user = new()
            {
                UserName = regiszterRequestDto.UserName,
                Email = regiszterRequestDto.Email,
                Keresztnev = regiszterRequestDto.Keresztnev,
                Vezeteknev = regiszterRequestDto.Vezeteknev,
                Kor = regiszterRequestDto.Kor

            };

            var result = await userManager.CreateAsync(user,    regiszterRequestDto.Password);

            if (result.Succeeded)
            {
                var userReturn = await szakmaivizsgaContext.applicationUsers.FirstOrDefaultAsync(user => user.UserName == regiszterRequestDto.UserName);

                return new { result = userReturn, message = "Sikeres Regisztráció." };
            }
            return new { result = "", message = result.Errors.FirstOrDefault().Description };
        }
    }
}
