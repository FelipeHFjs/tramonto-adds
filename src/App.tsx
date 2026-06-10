import "./App.css";

function App() {
  return (
    <main className="home">
      <section className="hero" aria-labelledby="title-tramonto">
        <p className="kicker">Proximamente</p>
        <h1 id="title-tramonto">
          <span className="tramonto">Tramonto</span>
          <span className="rest">Coffee and desserts</span>
        </h1>
        <p className="date">Junio 16</p>
      </section>

      <section className="note" aria-label="Mensaje de apertura">
        <p>Estamos preparando una experiencia dulce y especial para ti.</p>
      </section>
    </main>
  );
}

export default App;
