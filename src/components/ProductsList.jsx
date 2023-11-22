/* eslint-disable react/prop-types */

export default function ProductsList({ products, itemsList, setItemsList }) {
  function addItemtoList(item) {
    const repeatedItemIndex = itemsList.findIndex(
      (objeto) => objeto.title === item.title
    );

    if (repeatedItemIndex !== -1) {
      // Si el objeto ya existe, crea una nueva lista actualizando la cantidad del objeto
      const updatedItemsList = itemsList.map((objeto, index) =>
        index === repeatedItemIndex
          ? { ...objeto, quantity: objeto.quantity + 1 }
          : objeto
      );

      // Actualiza el estado con la nueva lista
      setItemsList(updatedItemsList);
    } else {
      // Si el objeto no existe, agrega el nuevo objeto al estado
      setItemsList([
        ...itemsList,
        {
          id: Date.now(),
          price: item.price,
          quantity: 1,
          title: item.title,
        },
      ]);
    }
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
