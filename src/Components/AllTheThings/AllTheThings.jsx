import React from "react";

function AllTheThings(props) {
  console.log("ALlTheThings");
  let things = props.products.map((a, i) => {
    return (
      <li key={i} onClick={() => props.handleClick(a)}>
        {a.name} - ${a.price}
        <br></br>
        {a.description}
      </li>
    );
  });
  return (
    <div className="AllTheThings">
      <h2>Put these in your cart!</h2>
      {things}
    </div>
  );
}

export default AllTheThings;
