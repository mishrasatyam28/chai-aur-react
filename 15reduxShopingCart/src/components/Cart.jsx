import React from "react";

const Cart = () => {
  return (
    <div className="cart">
      <main>
        <aside>
          <h2>Subtotal: ${2000}</h2>
          <h2>Shippig: ${200}</h2>
          <h2>Tax: ${20}</h2>
          <h2>Total: ${1220}</h2>
        </aside>
      </main>
    </div>
  );
};

const CartItem = (
  imgSrc,
  name,
  price,
  qty,
  decreament,
  increament,
  deleteHandler,
  id
) => {
  <div className="cartItem"></div>;
};

export default Cart;

// 36
