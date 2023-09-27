import Home from "./components/pages/home/Home";
import Navbar from "./components/layout/navbar/Navbar";
import ItemListContainer from "./components/pages/itemListContainer/ItemListContainer";

function App() {
  let tienda = "Obession";
  return (
    <div>
      <Navbar />
      <ItemListContainer nombreTienda={tienda} />
    </div>
  );
}

export default App;
