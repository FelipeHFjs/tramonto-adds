import "./App.css";
import sourCandyImage from "./assets/IMG_8676.jpg";

function App() {
  return (
    <main className="home">
      <section className="content" aria-label="Presentacion principal">
        <div className="copy">
          <section className="hero" aria-labelledby="title-tramonto">
            <p className="kicker">Proximamente</p>
            <h1 id="title-tramonto">
              <span className="tramonto">Tramonto</span>
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
            src={sourCandyImage}
            alt="Tramonto Sour Candy Energy"
            className="visual-image"
          />
        </aside>
      </section>
    </main>
  );
}

export default App;
