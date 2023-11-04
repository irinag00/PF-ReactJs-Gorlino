import { useState, useEffect } from "react";
import { products } from "../../../productsMock";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";
import BreadcrumbsComponent from "../../common/breadcrumbs/BreadcrumbsComponent";
const ItemListContainer = () => {
  const [items, setItems] = useState([]);
  const { categoryName } = useParams();
  useEffect(() => {
    const filterProducts = products.filter(
      (product) => product.category === categoryName
    );
    const getProducts = new Promise((resolve, reject) => {
      resolve(categoryName ? filterProducts : products);
    });
    getProducts
      .then((res) => setItems(res))
      .catch((error) => console.log(error));
  }, [categoryName]);
  return (
    <div>
      <BreadcrumbsComponent categoryName={categoryName} />
      <ItemList items={items} />
    </div>
  );
};

export default ItemListContainer;
