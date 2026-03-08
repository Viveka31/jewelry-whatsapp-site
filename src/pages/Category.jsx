export default function Category({ title }) {

 const phone = "919361384950"; // replace with your number (91 + 10 digit number)

  const message = `Hi, I am interested in ${title}`;

  const whatsappLink = `https://api.whatsapp.com/send?phone=${phone}&text=${encodeURIComponent(message)}`;

   console.log("Generated link:", whatsappLink);

  return (
    <div className="container">
      <h1>{title}</h1>

      <p>Click below to enquire on WhatsApp.</p>

      <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="whatsapp-btn">
        Contact on WhatsApp
      </a>

    </div>
  );
}