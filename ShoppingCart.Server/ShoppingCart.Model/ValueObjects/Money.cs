using ShoppingCart.Common;
using System.Collections.Generic;

namespace ShoppingCart.Model.ValueObjects
{
  public class Money : ValueObject
  {
    public double Amount { get; set; }

    public Money(double amount)
    {
      this.Amount = amount;
    }

    protected override IEnumerable<object> GetEqualityComponents()
    {
      yield return Amount;
    }
  }
}
