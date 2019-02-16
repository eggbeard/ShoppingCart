namespace ShoppingCart.API.DTOs
{
  public class ProductDTO
  {
    public ProductDTO(long id, string name, string description, double price)
    {
      Id = id;
      Name = name;
      Description = description;
      Price = price;
    }
    public long Id { get; private set; }
    public string Name { get; private set; }
    public string Description { get; private set; }
    public double Price { get; private set; }
  }
}
