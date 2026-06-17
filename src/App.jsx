import Footer from "./components/Footer";
import Header from "./components/Header";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div>
      <Header title="Komila VIbe" />
      <Navbar
        name="Komila"
        age={22}
        job="Frontend Developer"
      />
      <main>
        <h2>Asosiy saxifa</h2>
        <p>Bu sahifada React asoslarini - komponentlar, props va state'ni o'rganamiz.</p>
        <section>
          <h3>Mening loyihalarim</h3>
          <ul>
            <li>Portfolio sayti</li>
            <li>To-do ilovasi</li>
            <li>Weather app</li>
          </ul>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default App;