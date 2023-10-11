import ProductCard from "../../common/productCard/ProductCard";

const ItemList = ({ items }) => {
  console.log(items);
  return (
    <div className=" container text-center mt-2">
      {/* <h1
        className="text-4xl font-bold text-black-900
      py-3"
      >
        ¡Bienvenidos a mi Tienda!
      </h1> */}
      {/* <p className="text-xl">
        Descubre la nueva colección de OBSESSION online. Las últimas tendencias
        para mujer y los editoriales de la próxima temporada.
      </p> */}
      {items.map((item) => {
        return <ProductCard key={item.id} item={item} />;
      })}
    </div>
  );
};

export default ItemList;
