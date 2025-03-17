using vizsga_backend.Models;

namespace vizsga_backend.Service.IAuthService
{
    public interface ITokenGernerator
    {
        string GenerateToken(ApplicationUser applicationUser, IEnumerable<string> role);
    }
}
