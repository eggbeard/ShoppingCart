using Microsoft.EntityFrameworkCore;
using ShoppingCart.Model.Product;

namespace ShoppingCart.DataAccess
{
  public class ProductContext : DbContext
  {
    public ProductContext(DbContextOptions<ProductContext> options)
        : base(options)
    {
    }

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
      //Seperate these into seperate mapping classes to keep the context and the Domain Model 'clean'
      modelBuilder.Entity<Product>().HasKey(p => p.Id);
      modelBuilder.Entity<Product>().Property(p => p.Id).UseSqlServerIdentityColumn();
      modelBuilder.Entity<Product>().OwnsOne(p => p.Price);
    }

    public DbSet<Product> Products { get; set; }
  }
}
