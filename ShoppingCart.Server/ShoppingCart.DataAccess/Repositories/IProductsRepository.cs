using ShoppingCart.Model.Product;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace ShoppingCart.DataAccess.Repositories
{
  public interface IProductsRepository
  {
    Task<int> AddProductAsync(Product product);
    Task<Product> GetProductAsync(long id);
    Task<IEnumerable<Product>> GetProductsAsync();
  }
}