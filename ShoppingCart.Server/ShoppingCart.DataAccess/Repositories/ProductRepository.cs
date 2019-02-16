using Microsoft.EntityFrameworkCore;
using ShoppingCart.Model.Product;
using ShoppingCart.Model.ValueObjects;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ShoppingCart.DataAccess.Repositories
{
  public class ProductsRepository : IProductsRepository
  {
    private readonly ProductContext _context;

    public ProductsRepository(ProductContext context)
    {
      _context = context;

      if (_context.Products.Count() == 0)
      {
        _context.Products.AddRange(
            Product.Create("Multipet Lamb Chop Plush Dog Toy", "Nostalgic for you and big, adorable fun for your pooch, Lamb Chop will be an instant family fave. Whether you and your pup are playing a frisky game of fetch, launching Lamp Chop high in the air or happily squeaking her, this beloved character brings along instant joy for pups and peeps. This incredibly soft, plush dog toy comes in three sizes: 6-inch (Mini), 10-inch (Regular) and 24-inch (Jumbo) for any size member of your pooch party.", new Money(3.74)),
            Product.Create("KONG Cozie Marvin the Moose Plush Dog Toy", "The KONG Cozies are cute, soft and cuddly plush toys made with an extra layer of material, so they’re extra tough. Cozies are perfect for a game of fetch or as a comfort toy for your furry friend. Grab one of the 10 amazingly cute Cozie characters for your dog and we know your dog will love you for it.", new Money(4.99)),
            Product.Create("Chuckit! Indoor Ball", "No yelling at Fido for bringing this ball in the house...that's exactly where it belongs! The Chuckit! Indoor Ball is the perfect complement to rainy days, hardwood floors, or late-night games of fetch. The lightweight Bounceflex Core Technology makes it soft enough when meeting a wall or furniture while giving it just the right amount of bounce for indoor play. Use it with the Indoor Launcher for slobber-free fun.", new Money(4.29)),
            Product.Create("SmartBones SmartSticks Peanut Butter Chews Dog Treats", "Many veterinarians are concerned with the potential health risks associated with dogs consuming rawhide. Rawhide-free SmartSticks chews made with real chicken, vegetables and other healthy ingredients dogs love provide your canine companion with needed chewing exercise and great taste. These chew treats are the healthier alternative to regular rawhide treats which may cause intestinal blockages. SmartBones are 99.2% digestible, which is higher than the digestibility of premium dog foods (85% digestibility). Smart chews for smart dogs!", new Money(6.33)),
            Product.Create("Beggin' Strips Bacon & Beef Flavors Dog Treats, 25-oz bag", "Beggin' Strips Bacon & Beef Flavored Dog Treats bring out uncontainable excitement in dogs. Made with real bacon, these mouthwatering treats begin with a smoky, sizzling scent and a savory flavor that’s enhanced by the addition of beef for a double dose of meaty tastiness that dogs love. Soft, chewy, delicious and easy to break apart, Beggin’ Strips provide a fun treat for dogs of all sizes.", new Money(9.50))
            );
        _context.SaveChanges();
      }
    }

    public async Task<IEnumerable<Product>> GetProductsAsync()
    {
      return await _context.Products.ToListAsync();
    }

    public async Task<Product> GetProductAsync(long id)
    {
      return await _context.Products.FindAsync(id);
    }

    public async Task<int> AddProductAsync(Product product)
    {
      int rowsAffected = 0;

      _context.Products.Add(product);
      rowsAffected = await _context.SaveChangesAsync();

      return rowsAffected;
    }
  }
}
