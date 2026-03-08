export default function ProductCard({ name, category }) {

  const phone = "919999999999";

  const message = `Hi, I want details about ${name}`;

  const link =
    `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

  return (
    <div className="card">
      <img
        src="https://images.unsplash.com/photo-1605100804763-247f67b3557e"
      />

      <h3>{name}</h3>

      <a href={link} target="_blank" className="btn">
        Enquire on WhatsApp
      </a>
    </div>
  );
}