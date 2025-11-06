import Itemcard from "./Itemcard";

export default function ItemCarousel({ items }) {
  return (
    <div className="container-fluid py-4">
      <h2 className="mb-4">Product List</h2>

      <div className="overflow-auto pb-3">
        <div
          className="d-flex flex-nowrap gap-3"
          style={{ minWidth: "fit-content" }}
        >
          {items.map((item) => (
            <div key={item.id} className="flex-shrink-0">
              <Itemcard item={item} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
