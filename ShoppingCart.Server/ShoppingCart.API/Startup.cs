﻿using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using ShoppingCart.DataAccess;
using ShoppingCart.DataAccess.Repositories;

namespace ShoppingCart.API
{
  public class Startup
  {
    public Startup(IConfiguration configuration)
    {
      Configuration = configuration;
    }

    public IConfiguration Configuration { get; }

    public void ConfigureServices(IServiceCollection services)
    {
      services.AddCors();
      services.AddMvc().SetCompatibilityVersion(CompatibilityVersion.Version_2_2);

      //Connection String would usually come from configuration file
      var connection = @"Server=(localdb)\mssqllocaldb;Database=ShoppingCart;Trusted_Connection=True;ConnectRetryCount=0";
      services.AddDbContext<ProductContext>
          (options => options.UseSqlServer(connection));

      services.AddScoped<IProductsRepository, ProductsRepository>();
    }

    public void Configure(IApplicationBuilder app, IHostingEnvironment env)
    {
      if (env.IsDevelopment())
      {
        app.UseDeveloperExceptionPage();
      }
      else
      {
        // The default HSTS value is 30 days. You may want to change this for production scenarios, see https://aka.ms/aspnetcore-hsts.
        app.UseHsts();
      }

      app.UseCors(builder =>
        builder.WithOrigins("http://localhost:4200")
               .AllowAnyHeader()
               .AllowAnyMethod()
        );

      app.UseHttpsRedirection();
      app.UseMvc();
    }
  }
}
