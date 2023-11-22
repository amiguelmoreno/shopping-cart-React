import Header from "./components/Header";
import ProductsList from "./components/ProductsList";
import ShoppingCart from "./components/ShoppingCart";
import products from "./assets/products.json";
import { useState } from "react";

export default function App() {
  const [itemsList, setItemsList] = useState([]);

  return (
    <>
      <Header itemsList={itemsList}></Header>
      <div className="main">
        <ProductsList
          products={products}
          itemsList={itemsList}
          setItemsList={setItemsList}
        ></ProductsList>
        <ShoppingCart
          itemsList={itemsList}
          setItemsList={setItemsList}
        ></ShoppingCart>
      </div>
    </>
  );
}
