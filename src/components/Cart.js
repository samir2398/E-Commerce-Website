import React from "react";

function Cart({ cart, setCart }) {
  const inc = (item) => {
    setCart(cart.map(c =>
      c.id === item.id ? { ...c, qty: c.qty + 1 } : c
    ));
  };

  const dec = (item) => {
    setCart(cart.map(c =>
      c.id === item.id && c.qty > 1
        ? { ...c, qty: c.qty - 1 }
        : c
    ));
  };

  const remove = (id) => {
    setCart(cart.filter(c => c.id !== id));
  };

  const total = cart.reduce((acc, i) => acc + i.price * i.qty, 0);

  return (
    <div className="cart">
      <h2>Your Cart</h2>

      {cart.map(item => (
        <div key={item.id} className="cart-item">
          <h4>{item.title}</h4>
          <p>₹{item.price}</p>

          <div className="qty-box">
            <button className="qty-btn" onClick={() => dec(item)}>-</button>
            <span>{item.qty}</span>
            <button className="qty-btn" onClick={() => inc(item)}>+</button>
          </div>

          {/*  PROFESSIONAL REMOVE BUTTON */}
          <button className="btn remove-btn" onClick={() => remove(item.id)}>
            🗑 Remove
          </button>
        </div>
      ))}

      <h3>Total: ₹{Math.floor(total)}</h3>
    </div>
  );
}

export default Cart;