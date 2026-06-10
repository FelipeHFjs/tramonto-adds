import { useEffect, useState } from "react";
import "./App.css";
import sourCandyImage from "./assets/IMG_8676.jpg";
import promoImageOne from "./assets/PHOTO-2026-06-10-17-55-15.jpg";
// import promoImageTwo from "./assets/PHOTO-2026-06-05-18-24-17 2.jpg";

const images = [
  {
    src: sourCandyImage,
    alt: "Tramonto Sour Candy Energy",
  },
  {
    src: promoImageOne,
    alt: "Tramonto Banana Bread Latte",
  },
  // {
  //   src: promoImageTwo,
  //   alt: "Imagen promocional de Tramonto",
  // },
];

function App() {
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  useEffect(() => {
    const intervalId = window.setInterval(() => {
      setActiveImageIndex((currentIndex) => (currentIndex + 1) % images.length);
    }, 3500);

    return () => window.clearInterval(intervalId);
  }, []);

  const activeImage = images[activeImageIndex];

  return (
    <main className="home">
      <section className="content" aria-label="Presentacion principal">
        <div className="copy">
          <section className="hero" aria-labelledby="title-tramonto">
            <p className="kicker">Proximamente</p>
            <h1 id="title-tramonto">
              <span className="tramonto">TRAMONTO</span>
              <span className="rest">Coffee and desserts</span>
            </h1>
            <p className="date">Junio 16</p>
          </section>

          <section className="note" aria-label="Mensaje de apertura">
            <p>Estamos preparando una experiencia especial para ti.</p>
          </section>
        </div>

        <aside className="visual" aria-label="Bebida destacada">
          <img
            key={activeImage.src}
            src={activeImage.src}
            alt={activeImage.alt}
            className="visual-image"
          />
          <div className="visual-dots" aria-hidden="true">
            {images.map((image, index) => (
              <span
                key={image.src}
                className={index === activeImageIndex ? "dot is-active" : "dot"}
              />
            ))}
          </div>
        </aside>
      </section>
    </main>
  );
}

export default App;
