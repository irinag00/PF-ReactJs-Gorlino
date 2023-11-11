import { useState, useEffect } from "react";
import { products } from "../../../productsMock";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";
import BreadcrumbsComponent from "../../common/breadcrumbs/BreadcrumbsComponent";
import SkeletonComponent from "../../common/skeleton/SkeletonComponent";
const ItemListContainer = () => {
  const [items, setItems] = useState([]);
  const { categoryName } = useParams();
  useEffect(() => {
    const filterProducts = products.filter(
      (product) => product.category === categoryName
    );
    const getProducts = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(categoryName ? filterProducts : products);
      }, 2000);
    });
    getProducts
      .then((res) => setItems(res))
      .catch((error) => console.log(error));
  }, [categoryName]);

  return (
    <>
      {items.length === 0 ? (
        <SkeletonComponent />
      ) : (
        <>
          <BreadcrumbsComponent categoryName={categoryName} />
          <ItemList items={items} />
        </>
      )}
    </>
  );
};

export default ItemListContainer;
