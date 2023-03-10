import React, { useState } from "react";

//so this the 
const Form = (props) => {
  const [product, setProduct] = useState({
    name: "",
    price: "",
    description: ""
  });
  console.log("Form");

  const handleSubmit = () => {
    props.handleSubmit(product);
    console.log("handleSubmit");
    setProduct({
      name: "",
      price: "",
      description: ""
    });
  };

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    console.log("handleChange - event", event.target.name);
    console.log("handleChange - value", event.target.value);
    setProduct({
      ...product,
      [name]: value
    });
  };

  return (
    <div className="wrapper">
      <div className="form-signin">
        <h2 className="form-signin-heading">{props.title}</h2>
        <input
          onChange={handleChange}
          value={product.name}
          type="text"
          className="form-control"
          name="name"
          placeholder="product name"
        />
        <input
          onChange={handleChange}
          value={product.price}
          type="text"
          className="form-control"
          name="price"
          placeholder="price"
        />
        <input
          onChange={handleChange}
          value={product.description}
          type="text"
          className="form-control"
          name="description"
          placeholder="description"
        />
        <button
          className="btn btn-lg btn-secondary btn-block"
          onClick={handleSubmit}
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default Form;
