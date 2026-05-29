import React, { useEffect, useState } from "react";
import axios from "axios";
import Header from "./components/Header";
import ProductList from "./components/ProductList";
import Cart from "./components/Cart";
import Login from "./components/Login";
import "./App.css";

function App() {
  const [user, setUser] = useState(localStorage.getItem("user"));
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState(JSON.parse(localStorage.getItem("cart")) || []);
  const [darkMode, setDarkMode] = useState(JSON.parse(localStorage.getItem("darkMode")) || false);
  const [search, setSearch] = useState("");

  useEffect(() => {
    axios.get("https://fakestoreapi.com/products")
      .then(res => setProducts(res.data));
  }, []);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  useEffect(() => {
    localStorage.setItem("darkMode", JSON.stringify(darkMode));
  }, [darkMode]);

  const addToCart = (product) => {
    const exist = cart.find(c => c.id === product.id);

    if (exist) {
      setCart(cart.map(c =>
        c.id === product.id ? { ...c, qty: c.qty + 1 } : c
      ));
    } else {
      setCart([...cart, { ...product, qty: 1 }]);
    }
  };

  const logout = () => {
    localStorage.removeItem("user");
    setUser(null);
  };

  if (!user) return <Login setUser={setUser} />;

  const filteredProducts = products.filter(p =>
    p.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className={darkMode ? "dark" : ""}>
      <Header
        cart={cart}
        darkMode={darkMode}
        setDarkMode={setDarkMode}
        logout={logout}
        search={search}
        setSearch={setSearch}
      />

      <ProductList products={filteredProducts} addToCart={addToCart} />

      <Cart cart={cart} setCart={setCart} />


        <footer className="footer">
          
                     Made with ❤️ by Samir Ansary
        </footer>
    </div>
  );
}

export default App;