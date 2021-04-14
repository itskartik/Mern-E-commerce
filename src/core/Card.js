import React, { useState, useEffect } from "react";
import { addItemToCart, removeitemFromCart } from "./helper/cartHelper";
import ImageHelper from "./helper/Imagehelper";
import { Redirect } from "react-router-dom";

const Card = ({
  product,
  addtoCart = true,
  removeFromCart = false,
  setreload = (f) => f,
  reload = undefined,
}) => {
  const [redirect, setredirect] = useState(false);
  const [count, setcount] = useState(product.count);

  const cardTitle = product ? product.name : "A photo from pixels";
  const cardDescription = product
    ? product.description
    : "this photo looks great";
  const cardPrice = product ? product.price : "default";

  const addToCart = () => {
    addItemToCart(product, () => setredirect(true));
  };

  const getARedirect = (redirect) => {
    if (redirect) {
      return <Redirect to="/cart" />;
    }
  };

  const showAddtoCart = (addtoCart) => {
    return (
      addtoCart && (
        <button
          onClick={addToCart}
          className="btn btn-block btn-outline-success mt-2 mb-2"
        >
          Add to Cart
        </button>
      )
    );
  };
  const showRemoveFromCart = (removeFromCart) => {
    return (
      removeFromCart && (
        <button
          onClick={() => {
            removeitemFromCart(product._id);
            setreload(!reload);
          }}
          className="btn btn-block btn-outline-danger mt-2 mb-2"
        >
          Remove from cart
        </button>
      )
    );
  };
  return (
    <div className="card text-white bg-dark border border-info ">
      <div className="card-header lead">{cardTitle}</div>
      <div className="card-body">
        {getARedirect(redirect)}
        <ImageHelper product={product} />
        <p className="lead bg-success font-weight-normal text-wrap">
          {cardDescription}
        </p>
        <p className="btn btn-success rounded  btn-sm px-4">$ {cardPrice}</p>
        <div className="row">
          <div className="col-12">{showAddtoCart(addtoCart)}</div>
          <div className="col-12">{showRemoveFromCart(removeFromCart)}</div>
        </div>
      </div>
    </div>
  );
};

export default Card;
