import Home from "./components/pages/home/Home";
import Navbar from "./components/layout/navbar/Navbar";
import ItemListContainer from "./components/pages/itemListContainer/ItemListContainer";
import CounterContainer from "./components/common/counter/CounterContainer";
import MobNavbar from "./components/layout/navbar/MobNavbar";
import ItemDetailContainer from "./components/pages/itemDetailContainer/ItemDetailContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CartContainer from "./components/pages/cart/CartContainer";

function App() {
  let tienda = "Obession";
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Navbar />}>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/cart" element={<CartContainer />} />
          <Route path="/itemDetail" element={<ItemDetailContainer />} />
        </Route>
        <Route path="*" element={<h1> 404 Not Found</h1>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
