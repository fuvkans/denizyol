import React from "react";
import Itemcard from "../components/Itemcard";
import { item } from "../data/data";

export default function Fashion() {
  return (
    <div className="container py-5">
      <h1 className="text-center mb-4">Fashion</h1>
      <div className="d-flex flex-wrap gap-5 justify-content-center">
        {item.map(
          (item) =>
            item.category === "fashion" && (
              <Itemcard key={item.id} item={item} />
            )
        )}
      </div>
    </div>
  );
}
