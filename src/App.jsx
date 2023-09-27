import Home from "./components/pages/home/Home";
import Navbar from "./components/layout/navbar/Navbar";
import ItemListContainer from "./components/pages/itemListContainer/ItemListContainer";

function App() {
  return (
    // <h1>bienvenidos</h1>
    <div>
      {/* <Home /> */}
      <Navbar />
      <ItemListContainer nombreTienda={"Obsession"} />
    </div>
  );
}

export default App;
