import React from "react";
import data from "../data/data.js";
import Itemcard from "../components/Itemcard.jsx";

export default function Cart() {
  return (
    <div className="container py-5">
      <h1 className="text-center mb-4">Shopping Cart</h1>
      <div className="cart-items">
        {data.item.filter(
          (item) => localStorage.getItem(`cart_${item.id}`) === "true"
        ).length > 0 ? (
          data.item
            .filter(
              (item) => localStorage.getItem(`cart_${item.id}`) === "true"
            )
            .map((item) => <Itemcard key={item.id} item={item} />)
        ) : (
          <p className="text-muted">Your cart is currently empty.</p>
        )}
      </div>
    </div>
  );
}
