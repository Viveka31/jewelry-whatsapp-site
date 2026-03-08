import ProductCard from "../components/ProductCard";

export default function Home() {
  const products = [
    { name: "Gold Rings", category: "Rings" },
    { name: "Diamond Necklace", category: "Necklace" },
    { name: "Pearl Earrings", category: "Earrings" },
    { name: "Gold Bangles", category: "Bangles" }
  ];

  return (
    <div className="container">
      <h1>Elegant Jewelry Collection</h1>

      <div className="grid">
        {products.map((p, i) => (
          <ProductCard key={i} {...p} />
        ))}
      </div>
    </div>
  );
}