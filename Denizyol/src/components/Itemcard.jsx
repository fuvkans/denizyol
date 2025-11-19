import { useState } from "react";
import React from "react";
import ProductDialog from "./ProductDialog";

export default function Itemcard({ item }) {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [isFavorite, setIsFavorite] = useState(
    localStorage.getItem(`favorite_${item.id}`) === "true"
  );

  const toggleFavorite = (e) => {
    e.stopPropagation(); // Kartın onClick'ini engelle
    setIsFavorite(!isFavorite);
    localStorage.setItem(`favorite_${item.id}`, !isFavorite);
  };

  const [isInCart, setIsInCart] = useState(
    localStorage.getItem(`cart_${item.id}`) === "true"
  );

  const toggleCart = (e) => {
    if (e) e.stopPropagation(); // Kartın onClick'ini engelle
    setIsInCart(!isInCart);
    localStorage.setItem(`cart_${item.id}`, !isInCart);
  };

  const handleAddToCart = () => {
    toggleCart(); // Sepete ekle
    setIsDialogOpen(false); // Dialog'u kapat
  };

  const handleClick = () => {
    console.log(`Item ${item.id} clicked`);
    setIsDialogOpen(true);
  };

  return (
    <>
      <div
        onClick={handleClick}
        className="card shadow-sm border-0 h-100 position-relative overflow-hidden"
        style={{
          width: "18rem",
          transition: "transform 0.3s ease, box-shadow 0.3s ease",
          cursor: "pointer",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = "translateY(-8px)";
          e.currentTarget.style.boxShadow = "0 12px 24px rgba(0,0,0,0.15)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = "translateY(0)";
          e.currentTarget.style.boxShadow = "0 2px 4px rgba(0,0,0,0.1)";
        }}
      >
        <div
          className="position-relative overflow-hidden"
          style={{ height: "240px" }}
        >
          <img
            src={item.image}
            className="card-img-top w-100 h-100"
            alt={item.title}
            style={{ objectFit: "cover", transition: "transform 0.3s ease" }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.transform = "scale(1.05)")
            }
            onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
          />

          <button
            onClick={toggleFavorite}
            className="btn position-absolute top-0 end-0 m-3 rounded-circle border-0 shadow-sm"
            style={{
              width: "40px",
              height: "40px",
              backgroundColor: "rgba(255, 255, 255, 0.95)",
              backdropFilter: "blur(8px)",
              transition: "all 0.2s ease",
              transform: isFavorite ? "scale(1.1)" : "scale(1)",
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.transform = "scale(1.15)")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.transform = isFavorite
                ? "scale(1.1)"
                : "scale(1)")
            }
          >
            <i
              className={`fas ${isFavorite ? "fa-heart" : "fa-heart"}`}
              style={{
                color: isFavorite ? "#dc3545" : "#6c757d",
                fontSize: "1.2rem",
                transition: "color 0.2s ease",
                fontWeight: isFavorite ? "900" : "400",
              }}
            ></i>
          </button>
        </div>

        <div className="card-body d-flex flex-column">
          <h5
            className="card-title fw-bold mb-2"
            style={{
              fontSize: "1.1rem",
              overflow: "hidden",
              textOverflow: "ellipsis",
              whiteSpace: "nowrap",
            }}
          >
            {item.title}
          </h5>

          <p
            className="card-text text-muted mb-3 flex-grow-1"
            style={{
              fontSize: "0.9rem",
              lineHeight: "1.5",
              display: "-webkit-box",
              WebkitLineClamp: "2",
              WebkitBoxOrient: "vertical",
              overflow: "hidden",
            }}
          >
            {item.description}
          </p>

          <div className="d-flex justify-content-between align-items-center mt-auto">
            <div>
              <span className="text-muted" style={{ fontSize: "0.75rem" }}>
                Price
              </span>
              <div className="fs-4 fw-bold text-primary">{item.price}</div>
            </div>

            <button
              className={`btn ${
                isInCart ? "btn-success" : "btn-primary"
              } px-4 py-2 rounded-pill`}
              style={{ transition: "all 0.2s ease" }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "scale(1.05)";
                e.currentTarget.style.boxShadow = isInCart
                  ? "0 4px 12px rgba(25, 135, 84, 0.3)"
                  : "0 4px 12px rgba(13, 110, 253, 0.3)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "scale(1)";
                e.currentTarget.style.boxShadow = "none";
              }}
              onClick={toggleCart}
            >
              <i
                className={`fas ${
                  isInCart ? "fa-check" : "fa-shopping-cart"
                } me-2`}
              ></i>
              {isInCart ? "Added to Cart" : "Add to Cart"}
            </button>
          </div>
        </div>
      </div>

      <ProductDialog
        open={isDialogOpen}
        onClose={() => setIsDialogOpen(false)}
        product={item}
        onAddToCart={handleAddToCart}
      />
    </>
  );
}
