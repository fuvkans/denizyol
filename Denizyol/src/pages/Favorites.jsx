import React, { useMemo } from "react";
import Itemcard from "../components/Itemcard";

export default function Favorites({ items }) {
  const favoriteItems = useMemo(
    () =>
      items.filter(
        (item) => localStorage.getItem(`favorite_${item.id}`) === "true"
      ),
    [items]
  );

  return (
    <div className="container py-5">
      <h1 className="text-center mb-4">Favorites</h1>
      <div className="d-flex flex-wrap gap-5 justify-content-center">
        {favoriteItems.length > 0 ? (
          favoriteItems.map((item) => <Itemcard key={item.id} item={item} />)
        ) : (
          <p className="text-muted">Henüz favorilere eklenmiş ürün yok.</p>
        )}
      </div>
    </div>
  );
}
