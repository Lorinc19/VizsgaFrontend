using vizsga_backend.Service.Dtoos;

namespace vizsga_backend.Service.IAuthService
{
    public interface IAuth
    {
        Task<object> Regiszter(RegiszterRequsetDto regiszterRequsetDto);
    }
}
