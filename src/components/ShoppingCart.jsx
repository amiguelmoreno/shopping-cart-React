/* eslint-disable react/prop-types */

export default function ShoppingCart({ itemsList, setItemsList }) {
  function removeItem(id) {
    setItemsList([...itemsList.filter((item) => item.id !== id)]);
  }

  return (
    <div className="shopping-cart">
      <button onClick={() => setItemsList([])}>Clear cart</button>

      <h2>In your cart</h2>
      <div className="cart-products">
        {itemsList.map((product, i) => (
          <div className="product-in-cart" key={i}>
            <p>Name: {product.title}</p>
            <p>Price per unit: {product.price}</p>
            {product.quantity > 1 ? (
              <p>
                Total: ${Number(product.price * product.quantity).toFixed(2)}
              </p>
            ) : (
              ""
            )}
            <p>Quantity: {product.quantity}</p>
            <button onClick={() => removeItem(product.id)}>Remove</button>
          </div>
        ))}
      </div>
    </div>
  );
}
