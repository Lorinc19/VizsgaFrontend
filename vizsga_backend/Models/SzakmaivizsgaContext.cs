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

 

    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
    {
        if (!optionsBuilder.IsConfigured)
        {
            string conn = "Server=localhost;Port=3306;Database=szakmaivizsga;user=root;password=";

            optionsBuilder.UseMySQL(conn);
        }
    }


    public virtual DbSet<Felhasznalo> Felhasznalos { get; set; }

    public virtual DbSet<Hirdete> Hirdetes { get; set; }

    public virtual DbSet<Hirdetesadatok> Hirdetesadatoks { get; set; }



    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.Entity<IdentityUserLogin<string>>().HasNoKey();


        modelBuilder.Entity<Felhasznalo>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("PRIMARY");

            entity.ToTable("felhasznalo");

            entity.Property(e => e.Id)
                .HasColumnType("int(11)")
                .HasColumnName("ID");
            entity.Property(e => e.Berlo).HasDefaultValueSql("'NULL'");
            entity.Property(e => e.Csaladnev)
                .HasMaxLength(50)
                .HasDefaultValueSql("'NULL'");
            entity.Property(e => e.Elado).HasDefaultValueSql("'NULL'");
            entity.Property(e => e.Kor)
                .HasDefaultValueSql("'NULL'")
                .HasColumnType("int(11)");
            entity.Property(e => e.Vezeteknev)
                .HasMaxLength(50)
                .HasDefaultValueSql("'NULL'");
            entity.Property(e => e.Email)
                .HasMaxLength(50)
                .HasDefaultValueSql("'NULL'");
            entity.Property(e => e.Jelszo)
                .HasMaxLength(50)
                .HasDefaultValueSql("'NULL'");
        });

        modelBuilder.Entity<Hirdete>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("PRIMARY");

            entity.ToTable("hirdetes");

            entity.HasIndex(e => e.FelhasznaloId, "FelhasznaloID");

            entity.Property(e => e.Id)
                .HasColumnType("int(11)")
                .HasColumnName("ID");
            entity.Property(e => e.Elerhetoseg)
                .HasMaxLength(100)
                .HasDefaultValueSql("'NULL'");
            entity.Property(e => e.FelhasznaloId)
                .HasDefaultValueSql("'NULL'")
                .HasColumnType("int(11)")
                .HasColumnName("FelhasznaloID");
            entity.Property(e => e.Leiras)
                .HasDefaultValueSql("'NULL'")
                .HasColumnType("text");

            entity.HasOne(d => d.Felhasznalo).WithMany(p => p.Hirdetes)
                .HasForeignKey(d => d.FelhasznaloId)
                .OnDelete(DeleteBehavior.Restrict)
                .HasConstraintName("hirdetes_ibfk_1");
        });

        modelBuilder.Entity<Hirdetesadatok>(entity =>
        {
            entity.HasKey(e => e.HirdetesId).HasName("PRIMARY");

            entity.ToTable("hirdetesadatok");

            entity.Property(e => e.HirdetesId)
                .HasColumnType("int(11)")
                .HasColumnName("HirdetesID");
            entity.Property(e => e.Allatbarat).HasDefaultValueSql("'NULL'");
            entity.Property(e => e.Ar)
                .HasPrecision(10)
                .HasDefaultValueSql("'NULL'");
            entity.Property(e => e.Kiadasiidotartam)
                .HasMaxLength(50)
                .HasDefaultValueSql("'NULL'");
            entity.Property(e => e.Gyerekbarat).HasDefaultValueSql("'NULL'");
            entity.Property(e => e.Orszag).HasMaxLength(50);
            entity.Property(e => e.Telepules)
                .HasMaxLength(50)
                .HasDefaultValueSql("'NULL'");
            entity.Property(e => e.Tipus)
                .HasMaxLength(50)
                .HasDefaultValueSql("'NULL'");
            entity.Property(e => e.Utcahazszam)
                .HasMaxLength(100)
                .HasDefaultValueSql("'NULL'");
            entity.Property(e => e.Varmegye)
                .HasMaxLength(50)
                .HasDefaultValueSql("'NULL'");

            entity.HasOne(d => d.Hirdetes).WithOne(p => p.Hirdetesadatok)
                .HasForeignKey<Hirdetesadatok>(d => d.HirdetesId)
                .OnDelete(DeleteBehavior.Restrict)
                .HasConstraintName("hirdetesadatok_ibfk_1");
        });

        OnModelCreatingPartial(modelBuilder);
    }

    partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
}
