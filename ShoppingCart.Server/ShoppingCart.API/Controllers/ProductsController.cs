using Microsoft.AspNetCore.Mvc;
using ShoppingCart.API.DTOs;
using ShoppingCart.DataAccess.Repositories;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ShoppingCart.API.Controllers
{
  [Route("api/[controller]")]
  [ApiController]
  public class ProductsController : ControllerBase
  {
    private readonly IProductsRepository _repository;

    public ProductsController(IProductsRepository repository)
    {
      _repository = repository;
    }

    /// <summary>
    /// Retrieve a list of all products for sale
    /// </summary>
    /// <returns></returns>
    [HttpGet]
    public async Task<ActionResult<List<ProductDTO>>> GetAllAsync()
    {
      var products = await _repository.GetProductsAsync();
      var productDTOs = products.Select(p => new ProductDTO(p.Id, p.Name, p.Description, p.Price.Amount));
      return productDTOs.ToList();
    }

    [HttpGet("{id}")]
    [ProducesResponseType(404)]
    public async Task<ActionResult<ProductDTO>> GetByIdAsync(long id)
    {
      var product = await _repository.GetProductAsync(id);

      if (product == null)
      {
        return NotFound();
      }

      return new ProductDTO(product.Id, product.Name, product.Description, product.Price.Amount);
    }
  }
}
