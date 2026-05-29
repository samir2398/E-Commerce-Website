import React, { useState } from "react";

function ProductList({ products, addToCart }) {
  const [added, setAdded] = useState({});

  const handleAdd = (product) => {
    addToCart(product);

    setAdded({ ...added, [product.id]: true });

    setTimeout(() => {
      setAdded((prev) => ({ ...prev, [product.id]: false }));
    }, 1000);
  };

  return (
    <div className="products">
      {products.map((p) => (
        <div key={p.id} className="product">
          <img src={p.image} alt="" />
          <h4>{p.title.slice(0, 40)}</h4>
          <p>₹{p.price}</p>

          <button onClick={() => handleAdd(p)}>
            {added[p.id] ? "✔ Added" : "Add to Cart"}
          </button>
        </div>
      ))}
    </div>
  );
}

export default ProductList;