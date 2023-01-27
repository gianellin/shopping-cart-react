import React from "react";

function MyShoppingCart(props) {
  console.log("MyShoppingCart");
  let things = props.cart.map((a, i) => {
    return (
      <li key={i} onClick={() => props.handleClick(i)}>
        {a.name} - ${a.price}
        <br></br>
        {a.description}
      </li>
    );
  });
  return (
    <div className="MyShoppingCart">
      <h2>Your Cart!</h2>
      {things}
    </div>
  );
}

export default MyShoppingCart;
