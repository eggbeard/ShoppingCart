using System;
using System.Collections.Generic;
using System.Linq;

namespace ShoppingCart.Common
{
  /// <summary>
  /// https://enterprisecraftsmanship.com/2017/08/28/value-object-a-better-implementation/
  /// </summary>
  public abstract class ValueObject
  {
    protected abstract IEnumerable<object> GetEqualityComponents();

    public override bool Equals(object obj)
    {
      if (obj == null)
        return false;

      if (GetType() != obj.GetType())
        throw new ArgumentException($"Invalid comparison of Value Objects of different types: {GetType()} and {obj.GetType()}");

      var valueObject = (ValueObject)obj;

      return GetEqualityComponents().SequenceEqual(valueObject.GetEqualityComponents());
    }

    public override int GetHashCode()
    {
      return GetEqualityComponents()
          .Aggregate(1, (current, obj) =>
          {
            unchecked
            {
              return current * 23 + (obj?.GetHashCode() ?? 0);
            }
          });
    }

    public static bool operator ==(ValueObject a, ValueObject b)
    {
      if (a == null && b == null)
        return true;

      if (a == null || b == null)
        return false;

      return a.Equals(b);
    }

    public static bool operator !=(ValueObject a, ValueObject b)
    {
      return !(a == b);
    }
  }
}
