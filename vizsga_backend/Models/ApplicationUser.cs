using Microsoft.AspNetCore.Identity;

namespace vizsga_backend.Models
{
    public class ApplicationUser : IdentityUser
    {
        public string? Keresztnev { get; set; }
        public string? Vezeteknev { get; set; }
        public int? Kor { get; set; }
    }
}
