/* eslint-disable react/prop-types */

export default function Header({ itemsList }) {
  function getAllMoney(arr) {
    return Number(
      arr
        .filter((item) => item.price)
        .reduce((acc, curr) => acc + curr.price * curr.quantity, 0)
    ).toFixed(2);
  }

  return (
    <header className="header">
      <h1>Shopping Cart</h1>
      <div>
        <p className="header_products-quantity">Items: {itemsList.length}</p>
        <p className="header_total-quantity">
          Total: {getAllMoney(itemsList)}$
        </p>
      </div>
    </header>
  );
}
