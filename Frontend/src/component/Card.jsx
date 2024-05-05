/* eslint-disable react/prop-types */

import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./PizzaCard.css"; // Importing the CSS for styling

const Card = (props) => {
  const [cartItem, setCartItem] = useState(props.defaultCount);

  function addToCartClicked(e) {
    e.preventDefault();
    const newCartItem = cartItem + 1;
    setCartItem(newCartItem);
    props.updateArrOfItem({ ...props.data, count: newCartItem });
  }

  function decreamentIconClicked(e) {
    e.preventDefault();
    const newCartItem = cartItem - 1;
    setCartItem(newCartItem);
    props.updateArrOfItem({ ...props.data, count: newCartItem });
  }
  return (
    <div className="card-container">
      {console.log(props)}
      <Link to={`/product/${props.data.id}`}>
        <div className="image-container">
          <img src={props.data.image} alt={props.data.title} />
        </div>
      </Link>
      <div className="text-containers">
        <div style={{ padding: "10px 20px 20px" }}>
          <h2
            style={{
              fontWeight: "bold",
              fontSize: "21px",
              margin: "0",
              height: "10px",
            }}
          >
            {/* {props.data.title.split(" ").length > 3
              ? `${props.data.title.split(" ").slice(0, 3).join(" ")}...`
              : props.data.title} */}
            {props.data.name}
          </h2>
          {/* <p
            style={{ color: "grey", margin: "10px 0 20px", height: "10px" }}
            className="text-description"
          >
            {props.data.description.split(" ").length > 3
              ? `${props.data.description.split(" ").slice(0, 7).join(" ")}...`
              : props.data.description}
          </p> */}
          <p
            style={{
              fontWeight: "bold",
              fontSize: "22px",
              margin: "10px 0",
              marginTop: "50px",
            }}
          >
            $.{props.data.price}
          </p>
          {cartItem === 0 ? (
            <button
              onClick={addToCartClicked}
              style={{
                border: "none",
                outline: "none",
                width: "100%",
                padding: "10px",
                color: "#fff",
                backgroundColor: "#4CAF50",
                textAlign: "center",
                textDecoration: "none",
                fontSize: "16px",
                margin: "4px 2px",
                cursor: "pointer",
                borderRadius: "50px",
              }}
            >
              Add To Cart
            </button>
          ) : (
            <div
              style={{
                marginTop: "16px",
                width: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
              // className="text-container"
              onClick={(e) => e.preventDefault()}
            >
              <button
                type="button"
                onClick={decreamentIconClicked}
                style={{
                  width: "100%",
                  borderRadius: "50px",
                  backgroundColor: "#4CAF50",
                  padding: "8px 4px",
                  fontSize: "small",
                  fontWeight: "bold",
                  color: "white",
                  boxShadow: "0px 1px 2px rgba(0,0,0,0.25)",
                  cursor: "pointer",
                  outline: "none",
                  ":hover": { backgroundColor: "rgba(0,0,0,0.8)" },
                  ":focusVisible": {
                    outline: "2px solid black",
                    outlineOffset: "2px",
                  },
                }}
              >
                -
              </button>
              <span
                style={{
                  margin: "0 16px",
                }}
              >
                {cartItem}
              </span>
              <button
                type="button"
                onClick={addToCartClicked}
                style={{
                  width: "100%",
                  borderRadius: "50px",
                  backgroundColor: "#4CAF50",
                  padding: "8px 4px",
                  fontSize: "small",
                  fontWeight: "bold",
                  color: "white",
                  boxShadow: "0px 1px 2px rgba(0,0,0,0.25)",
                  cursor: "pointer",
                  outline: "none",
                  ":hover": { backgroundColor: "rgba(0,0,0,0.8)" },
                  ":focusVisible": {
                    outline: "2px solid black",
                    outlineOffset: "2px",
                  },
                }}
              >
                +
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Card;
