using ShoppingCart.Common;
using ShoppingCart.Model.ValueObjects;

namespace ShoppingCart.Model.Product
{
  public class Product : Entity
  {
    private Product()
    {
      //just for EF
    }

    public static Product Create(string name, string description, Money price)
    {
      return new Product()
      {
        Name = name,
        Description = description,
        Price = price
      };
    }

    public string Name { get; private set; }
    public string Description { get; private set; }
    public Money Price { get; private set; }
  }
}
