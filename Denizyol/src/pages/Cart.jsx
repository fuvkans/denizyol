import React, { useState, useEffect, useMemo } from "react";
import { Link } from "react-router-dom";
import data from "../data/data.js";

const parsePrice = (priceStr) => {
  if (!priceStr) return 0;
  return parseFloat(priceStr.replace(/[^0-9.]/g, ""));
};

export default function Cart() {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const itemsFromStorage = data.item.filter(
      (item) => localStorage.getItem(`cart_${item.id}`) === "true"
    );
    setCartItems(itemsFromStorage);
  }, []);

  const totalPrice = useMemo(() => {
    return cartItems.reduce((total, item) => {
      return total + parsePrice(item.price);
    }, 0);
  }, [cartItems]);

  const handleRemoveItem = (id) => {
    localStorage.setItem(`cart_${id}`, "false");
    setCartItems((currentItems) =>
      currentItems.filter((item) => item.id !== id)
    );
  };

  const handleClearCart = () => {
    cartItems.forEach((item) => {
      localStorage.setItem(`cart_${item.id}`, "false");
    });
    setCartItems([]);
  };

  if (cartItems.length === 0) {
    return (
      <div className="container text-center mt-5">
        <div className="card p-5 shadow-sm">
          <i className="fas fa-shopping-cart fa-4x text-muted mb-3"></i>
          <h2>Sepetiniz Boş</h2>
          <p className="text-muted">
            Görünüşe göre sepetinize henüz bir şey eklememişsiniz.
          </p>
          <div className="mt-3">
            <Link to="/" className="btn btn-primary">
              <i className="fas fa-store me-2"></i>Alışverişe Başla
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-lg-8">
          <div className="d-flex justify-content-between align-items-center mb-3">
            <h2 className="mb-0">
              Alışveriş Sepetim ({cartItems.length} ürün)
            </h2>
            {cartItems.length > 0 && (
              <button
                className="btn btn-outline-danger btn-sm"
                onClick={handleClearCart}
              >
                <i className="fas fa-times me-2"></i>Sepeti Boşalt
              </button>
            )}
          </div>

          <div className="card shadow-sm">
            <div className="table-responsive">
              <table className="table table-hover align-middle mb-0">
                <thead className="table-light">
                  <tr>
                    <th scope="col" className="ps-3">
                      Ürün
                    </th>
                    <th scope="col">Fiyat</th>
                    <th scope="col">Miktar</th>
                    <th scope="col" className="text-end pe-3">
                      Kaldır
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {cartItems.map((item) => (
                    <tr key={item.id}>
                      <td className="ps-3">
                        <div className="d-flex align-items-center">
                          <img
                            src={item.image}
                            alt={item.title}
                            style={{
                              width: "60px",
                              height: "60px",
                              objectFit: "cover",
                            }}
                            className="rounded me-3"
                          />
                          <div>
                            <h6 className="mb-0">{item.title}</h6>
                            <small className="text-muted">
                              {item.category}
                            </small>
                          </div>
                        </div>
                      </td>

                      <td>${parsePrice(item.price).toFixed(2)}</td>

                      <td>
                        <span className="fw-bold">1</span>
                      </td>

                      <td className="text-end pe-3">
                        <button
                          className="btn btn-sm btn-outline-danger"
                          onClick={() => handleRemoveItem(item.id)}
                          title="Sepetten Kaldır"
                        >
                          <i className="fas fa-trash-alt"></i>
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <div className="col-lg-4 mt-4 mt-lg-0">
          <div className="card shadow-sm sticky-top" style={{ top: "20px" }}>
            <div className="card-body">
              <h4 className="card-title mb-4">Sipariş Özeti</h4>
              <ul className="list-group list-group-flush">
                <li className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 pb-0">
                  Ara Toplam
                  <span>${totalPrice.toFixed(2)}</span>
                </li>
                <li className="list-group-item d-flex justify-content-between align-items-center px-0">
                  Kargo
                  <span className="text-success">Ücretsiz</span>
                </li>
                <li className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 mb-3">
                  <div>
                    <strong>Genel Toplam</strong>
                  </div>
                  <span>
                    <strong>${totalPrice.toFixed(2)}</strong>
                  </span>
                </li>
              </ul>
              <button className="btn btn-success w-100">
                <i className="fas fa-check me-2"></i>Ödeme Adımına Geç
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
