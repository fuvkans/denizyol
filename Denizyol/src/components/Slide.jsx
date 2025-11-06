export default function Slide({ item }) {
  return (
    <div className="container my-4">
      <div
        className="p-5 text-white rounded-3"
        style={{
          backgroundImage: `url(${item.image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <h2>{item.title}</h2>
        <p>{item.description}</p>
        <span>${item.price}</span>
      </div>
    </div>
  );
}
