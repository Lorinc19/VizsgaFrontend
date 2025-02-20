using Microsoft.EntityFrameworkCore;
using vizsga_backend.Models;
using vizsga_backend.Service;
using vizsga_backend.Service.IEmailService;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddDbContext<SzakmaivizsgaContext>(option =>
{
    var connectionString = builder.Configuration.GetConnectionString("MySql");
    option.UseMySQL(connectionString);
});


// Add services to the container.
builder.Services.AddScoped<IEmail, Email>();
builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle

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
