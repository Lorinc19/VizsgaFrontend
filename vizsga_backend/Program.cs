using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using Microsoft.IdentityModel.Tokens;
using System;
using System.Configuration;
using System.Text;
using vizsga_backend.Models;
using vizsga_backend.Service;
using vizsga_backend.Service.IAuthService;
using vizsga_backend.Service.IEmailService;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddDbContext<SzakmaivizsgaContext>();

builder.Services.AddScoped<IAuth, Auth>();

builder.Services.AddIdentity<ApplicationUser, IdentityRole>().AddEntityFrameworkStores<SzakmaivizsgaContext>()
              .AddDefaultTokenProviders();



builder.Services.AddDbContext<SzakmaivizsgaContext>(option =>
{
    var connectionString = builder.Configuration.GetConnectionString("MySql");
    option.UseMySQL(connectionString);
});









var settingsSection = builder.Configuration.GetSection("AuthSettings:JwtOptions");

var secret = settingsSection.GetValue<string>("Secret");
var issuer = settingsSection.GetValue<string>("Issuer");
var auidience = settingsSection.GetValue<string>("Audience");

var key = Encoding.ASCII.GetBytes(secret);

builder.Services.AddAuthentication(x =>
{
    x.DefaultAuthenticateScheme = JwtBearerDefaults.AuthenticationScheme;
    x.DefaultChallengeScheme = JwtBearerDefaults.AuthenticationScheme;
}).AddJwtBearer(x =>
{
    x.TokenValidationParameters = new TokenValidationParameters
    {
        ValidateIssuerSigningKey = true,
        IssuerSigningKey = new SymmetricSecurityKey(key),
        ValidateIssuer = true,
        ValidIssuer = issuer,
        ValidAudience = auidience,
        ValidateAudience = true
    };
});

// Add services to the container.
builder.Services.AddScoped<IEmail, Email>();
builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle

builder.Services.AddScoped<SzuresService>();
builder.Services.AddControllers();

builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowReactApp",
        policy => policy.WithOrigins("http://localhost:3000") // React futási címe
                        .AllowAnyMethod()
                        .AllowAnyHeader());
});

builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

var app = builder.Build();



// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

app.UseAuthorization();
app.UseCors("AllowReactApp");

app.MapControllers();

app.Run();
