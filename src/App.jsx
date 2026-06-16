import Footer from "./components/Footer";
import Header from "./components/Header";
import Navbar from "./components/Navbar";

function App() {
  return(
    <div>
      <Header title="Komila VIbe"/>
      <Navbar 
      name="Komila"
      age={22}
      job="Frontend Developer"
      
      />
      <main>
        <h2>Asosiy saxifa</h2>
      </main>
      <Footer/>
    </div>
  )
}
export default App