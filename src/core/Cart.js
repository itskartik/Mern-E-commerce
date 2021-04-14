import React, { useState, useEffect } from "react";
import "../styles.css";
import Base from "./Base";
import Card from "./Card";
import { loadCart } from "./helper/cartHelper";
const Cart = () => {
  const [products, setproducts] = useState([]);
  const [reload, setreload] = useState(false);

  useEffect(() => {
    setproducts(loadCart());
  }, [reload]);

  const loadAllProducts = () => {
    return (
      <div>
        <h2>This section loads product</h2>
        {products.map((product, index) => (
          <Card
            key={index}
            product={product}
            addtoCart={false}
            removeFromCart={true}
            setreload={setreload}
            reload={reload}
          />
        ))}
      </div>
    );
  };
  const loadCheckout = () => {
    return (
      <div>
        <h2>This section is for checkout</h2>
      </div>
    );
  };

  return (
    <Base title="Cart Page" description="Ready to checkout">
      <div className="row text-center">
        <div className="col-6">{loadAllProducts()}</div>
        <div className="col-6">{loadCheckout()}</div>
      </div>
    </Base>
  );
};

export default Cart;
