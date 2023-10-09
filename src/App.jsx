import Home from "./components/pages/home/Home";
import Navbar from "./components/layout/navbar/Navbar";
import ItemListContainer from "./components/pages/itemListContainer/ItemListContainer";
import CounterContainer from "./components/common/counter/CounterContainer";

function App() {
  let tienda = "Obession";
  return (
    <div>
      <Navbar />
      <ItemListContainer nombreTienda={tienda} />
      {/* <CounterContainer stock={3} /> */}
    </div>
  );
}

export default App;
