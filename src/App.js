// import useState
import React, { useState } from "react";
import "./styles.css";
import AllTheThings from "./Components/AllTheThings/AllTheThings";
import MyShoppingCart from "./Components/MyShoppingCart/MyShoppingCart";
import Form from "./Components/Form/Form";
import productsArr from "./Products";

export default function App() {
  const [products, setProducts] = useState(productsArr);
  const [cart, setCart] = useState([]);
  // create an addToCart function that takes in a product as a param
  const addToCart = (item) => {
    setCart([...cart, item]);
  };
  // using the ...spread operator add the product to the cart array
  // create an removeFromCart function that takes in an index as a param
  // using Array.filter remove create a new array where that item is removed
  const removeFromCart = (index) => {
    const cartArr = cart.filter((a, i) => i !== index);
    setCart(cartArr);
  };
  const addToProducts = (product) => {
    setProducts([product, ...products]);
  };
  return (
    <div className="App">
      <h1>big Time Shopping</h1>
      <Form handleSubmit={addToProducts} />
      <div className="products">
        <AllTheThings products={products} handleClick={addToCart} />
        <MyShoppingCart cart={cart} handleClick={removeFromCart} />
      </div>
    </div>
  );
}
