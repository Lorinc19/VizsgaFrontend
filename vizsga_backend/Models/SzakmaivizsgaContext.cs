using System;
using System.Collections.Generic;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;

namespace vizsga_backend.Models;

public partial class SzakmaivizsgaContext : IdentityDbContext<ApplicationUser, IdentityRole, string>
{
    public SzakmaivizsgaContext()
    {
    }

    public SzakmaivizsgaContext(DbContextOptions<SzakmaivizsgaContext> options)
        : base(options)
    {
    }

    public DbSet<ApplicationUser> applicationUsers { get; set; } = null;
    public virtual DbSet<Aspnetuser> Aspnetusers { get; set; }

    public virtual DbSet<Hirdete> Hirdetes { get; set; }



    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        base.OnModelCreating(modelBuilder);


        modelBuilder.Entity<IdentityUserRole<string>>(entity =>
        {
            entity.HasKey(e => new { e.UserId, e.RoleId });
        });

        modelBuilder.Entity<Aspnetuser>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("PRIMARY");

            entity.ToTable("aspnetusers");

            entity.HasIndex(e => e.NormalizedEmail, "EmailIndex");

            entity.HasIndex(e => e.NormalizedUserName, "UserNameIndex").IsUnique();

            entity.Property(e => e.Email).HasMaxLength(256);
            entity.Property(e => e.LockoutEnd).HasColumnType("datetime");
            entity.Property(e => e.NormalizedEmail).HasMaxLength(256);
            entity.Property(e => e.NormalizedUserName).HasMaxLength(256);
            entity.Property(e => e.UserName).HasMaxLength(256);
        });

        modelBuilder.Entity<Hirdete>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("PRIMARY");

            entity.ToTable("hirdetes");

            entity.HasIndex(e => e.FelhasznaloId, "FelhasznaloID");

            entity.Property(e => e.Id).HasColumnName("ID");
            entity.Property(e => e.ContentType).HasMaxLength(255);
            entity.Property(e => e.Elerhetoseg).HasMaxLength(50);
            entity.Property(e => e.FelhasznaloId).HasColumnName("FelhasznaloID");
            entity.Property(e => e.FileName).HasMaxLength(255);
            entity.Property(e => e.Hazszam).HasMaxLength(50);
            entity.Property(e => e.Hirdetesnev).HasMaxLength(50);
            entity.Property(e => e.Kiadasiidotartam).HasMaxLength(50);
            entity.Property(e => e.Leiras).HasMaxLength(500);
            entity.Property(e => e.Orszag).HasMaxLength(50);
            entity.Property(e => e.Telepules).HasMaxLength(50);
            entity.Property(e => e.Tipus).HasMaxLength(50);
            entity.Property(e => e.Utca).HasMaxLength(50);
            entity.Property(e => e.Varmegye).HasMaxLength(50);

            entity.HasOne(d => d.Felhasznalo).WithMany(p => p.Hirdetes)
                .HasForeignKey(d => d.FelhasznaloId)
                .HasConstraintName("hirdetes_ibfk_1");
        });

        OnModelCreatingPartial(modelBuilder);
    }

    partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
}
