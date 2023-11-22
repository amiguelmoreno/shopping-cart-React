/* eslint-disable react/prop-types */

export default function ProductsList({ products, itemsList, setItemsList }) {
  function addItemtoList(item) {
    const finalItem = {
      id: Date.now(),
      title: item.title,
      price: item.price,
      quantity: 1,
    };

    setItemsList([...itemsList, finalItem]);
  }

  return (
    <div className="products-list">
      {products.map((product, i) => (
        <div className="product" key={i}>
          <h2>{product.title}</h2>
          <p className="description">{product.description}</p>
          <p>${product.price}</p>
          <button
            onClick={() => {
              addItemtoList(product);
            }}
          >
            Add
          </button>
        </div>
      ))}
    </div>
  );
}
