import Home from "./components/pages/home/Home";
import Navbar from "./components/layout/navbar/Navbar";
import ItemListContainer from "./components/pages/itemListContainer/ItemListContainer";
import CounterContainer from "./components/common/counter/CounterContainer";
import MobNavbar from "./components/layout/navbar/MobNavbar";
import ItemDetailContainer from "./components/pages/itemDetailContainer/ItemDetailContainer";

function App() {
  let tienda = "Obession";
  return (
    <div>
      <Navbar />
      <MobNavbar />
      <ItemListContainer />
      {/* <CounterContainer stock={10} /> */}
      <ItemDetailContainer />
    </div>
  );
}

export default App;
