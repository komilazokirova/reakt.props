import Footer from "./components/Footer";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);
  const [name,setName]=useState("");

  return (
    <>
      <Navbar />
      <Header />

      <h1>Asosiy sahifa</h1>

      <p>
        Bu sahifada React asoslarini - komponentlar, props va state'ni
        o'rganamiz.
      </p>

      <h2>Mening loyihalarim</h2>

      <ul>
        <li>Portfolio sayti</li>
        <li>To-do ilovasi</li>
        <li>Weather app</li>
      </ul>

      <h3>Hisoblagich: {count}</h3>
      <button onClick={() => setCount(count + 1)}>
        Qo'shish
      </button>

      <h1>Salom,{name}</h1>
      <input
       type="text" 
       onChange={(e)=> setName(e.target.value)}
      />

      <Footer />
    </>
  );
}

export default App;