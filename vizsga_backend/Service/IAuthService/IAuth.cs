using Microsoft.AspNetCore.Identity.Data;
using vizsga_backend.Service.Dtoos;

namespace vizsga_backend.Service.IAuthService
{
    public interface IAuth
    {
        Task<object> Regiszter(RegiszterRequestDto regiszterRequestDto);
        Task<object> Login(LoginRequestDto loginRequestDto);

        Task<object> AssignRole(string UserName, string roleName);
    
    }
}
