/* eslint-disable react/prop-types */

export default function ShoppingCart({ itemsList, setItemsList }) {
  function removeItem(id) {
    setItemsList([...itemsList.filter((item) => item.id !== id)]);
  }

  return (
    <div className="shopping-cart">
      <h2>In your cart</h2>
      <div className="cart-products">
        {itemsList.map((product, i) => (
          <div className="product-in-cart" key={i}>
            <p>{product.title}</p>
            <p>{product.price}</p>
            <p>Quantity: {3 || 1}</p>
            <button onClick={() => removeItem(product.id)}>Remove</button>
          </div>
        ))}
      </div>
    </div>
  );
}
