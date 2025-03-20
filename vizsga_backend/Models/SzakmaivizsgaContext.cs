using System;
using System.Collections.Generic;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
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
    public DbSet<ApplicationUser> applicationUsers { get; set; } = null!;

    public virtual DbSet<Aspnetuser> Aspnetusers { get; set; }

    public virtual DbSet<Hirdete> Hirdetes { get; set; }

    public virtual DbSet<Hirdetesadatok> Hirdetesadatoks { get; set; }



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

            entity.Property(e => e.AccessFailedCount).HasColumnType("int(11)");
            entity.Property(e => e.ConcurrencyStamp).HasDefaultValueSql("'NULL'");
            entity.Property(e => e.Email)
                .HasMaxLength(256)
                .HasDefaultValueSql("'NULL'");
            entity.Property(e => e.Keresztnev).HasDefaultValueSql("'NULL'");
            entity.Property(e => e.Kor)
                .HasDefaultValueSql("'NULL'")
                .HasColumnType("int(11)");
            entity.Property(e => e.LockoutEnd)
                .HasDefaultValueSql("'NULL'")
                .HasColumnType("datetime");
            entity.Property(e => e.NormalizedEmail)
                .HasMaxLength(256)
                .HasDefaultValueSql("'NULL'");
            entity.Property(e => e.NormalizedUserName)
                .HasMaxLength(256)
                .HasDefaultValueSql("'NULL'");
            entity.Property(e => e.PasswordHash).HasDefaultValueSql("'NULL'");
            entity.Property(e => e.PhoneNumber).HasDefaultValueSql("'NULL'");
            entity.Property(e => e.SecurityStamp).HasDefaultValueSql("'NULL'");
            entity.Property(e => e.UserName)
                .HasMaxLength(256)
                .HasDefaultValueSql("'NULL'");
            entity.Property(e => e.Vezeteknev).HasDefaultValueSql("'NULL'");
        });

        modelBuilder.Entity<Hirdete>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("PRIMARY");

            entity.ToTable("hirdetes");

            entity.HasIndex(e => e.FelhasznaloId, "hirdetes_ibfk_1");

            entity.Property(e => e.Id)
                .HasColumnType("char(36)")
                .HasColumnName("ID");
            entity.Property(e => e.Elerhetoseg)
                .HasMaxLength(100)
                .HasDefaultValueSql("'''NULL'''");
            entity.Property(e => e.FelhasznaloId)
                .HasDefaultValueSql("'''NULL'''")
                .HasColumnName("FelhasznaloID");
            entity.Property(e => e.Hirdetesnev).HasDefaultValueSql("'NULL'");
            entity.Property(e => e.KepUrl)
                .HasDefaultValueSql("'NULL'")
                .HasColumnName("KepURL");
            entity.Property(e => e.Leiras)
                .HasDefaultValueSql("'''NULL'''")
                .HasColumnType("text");

            entity.HasOne(d => d.Felhasznalo).WithMany(p => p.Hirdetes)
                .HasForeignKey(d => d.FelhasznaloId)
                .OnDelete(DeleteBehavior.Cascade)
                .HasConstraintName("hirdetes_ibfk_1");
        });

        modelBuilder.Entity<Hirdetesadatok>(entity =>
        {
            entity.HasKey(e => e.HirdetesId).HasName("PRIMARY");

            entity.ToTable("hirdetesadatok");

            entity.Property(e => e.HirdetesId)
                .HasColumnType("char(36)")
                .HasColumnName("HirdetesID");
            entity.Property(e => e.Allatbarat).HasDefaultValueSql("'0'");
            entity.Property(e => e.Ar)
                .HasPrecision(10)
                .HasDefaultValueSql("'NULL'");
            entity.Property(e => e.Gyerekbarat).HasDefaultValueSql("'0'");
            entity.Property(e => e.Kiadasiidotartam)
                .HasMaxLength(50)
                .HasDefaultValueSql("'''NULL'''");
            entity.Property(e => e.Orszag).HasMaxLength(50);
            entity.Property(e => e.Telepules)
                .HasMaxLength(50)
                .HasDefaultValueSql("'''NULL'''");
            entity.Property(e => e.Tipus)
                .HasMaxLength(50)
                .HasDefaultValueSql("'''NULL'''");
            entity.Property(e => e.Utcahazszam)
                .HasMaxLength(100)
                .HasDefaultValueSql("'''NULL'''");
            entity.Property(e => e.Varmegye)
                .HasMaxLength(50)
                .HasDefaultValueSql("'''NULL'''");

            entity.HasOne(d => d.Hirdetes).WithOne(p => p.Hirdetesadatok)
                .HasForeignKey<Hirdetesadatok>(d => d.HirdetesId)
                .HasConstraintName("hirdetesadatok_ibfk_1");
        });

        OnModelCreatingPartial(modelBuilder);
    }

    partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
}
