export default function Category({ title }) {

  const phone = "919952131274";

  const message = `Hi, I am interested in ${title}`;

  const whatsappLink =
    `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

  return (
    <div className="container">
      <h1>{title}</h1>

      <p>Click below to enquire on WhatsApp.</p>

      <a href={whatsappLink} target="_blank" className="whatsapp-btn">
        Contact on WhatsApp
      </a>
    </div>
  );
}