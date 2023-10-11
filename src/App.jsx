import Home from "./components/pages/home/Home";
import Navbar from "./components/layout/navbar/Navbar";
import ItemListContainer from "./components/pages/itemListContainer/ItemListContainer";
import CounterContainer from "./components/common/counter/CounterContainer";
import MobNavbar from "./components/layout/navbar/MobNavbar";

function App() {
  let tienda = "Obession";
  return (
    <div>
      <Navbar />
      <MobNavbar />
      <ItemListContainer />
      {/* <CounterContainer stock={10} /> */}
    </div>
  );
}

export default App;
