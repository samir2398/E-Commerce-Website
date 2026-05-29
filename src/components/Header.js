import React from "react";

function Header({ cart, darkMode, setDarkMode, logout, search, setSearch }) {
  return (
    <div className="header">
      <h2 className="logo">🛒 ShopEasy</h2>

      <input
        className="search"
        placeholder="Search products..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <div className="header-right">
        <button className="btn toggle-btn" onClick={() => setDarkMode(!darkMode)}>
          {darkMode ? "☀" : "🌙"}
        </button>

        <div className="cart-count">🛍 {cart.length}</div>

        <button className="btn logout-btn" onClick={logout}>
          Logout
        </button>
      </div>
    </div>
  );
}

export default Header;