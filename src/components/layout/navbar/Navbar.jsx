import { BiSearch } from "react-icons/bi";
import CartWidget from "../../common/cartWidget/CartWidget";
const Navbar = () => {
  return (
    <header className="bg-white">
      <nav className="sticky top-0 z-10">
        <div className="container hidden lg:block">
          <div className=" md:flex justify-between items-center p-4">
            <a href="#" className="flex items-center">
              <img
                src="https://res.cloudinary.com/dsdmjhkms/image/upload/v1695835297/litvzfzqvj7qpk6aqtu0.png"
                className="h-10 mr-3 md:cursor-pointer"
                alt="Obsession Logo"
              />
            </a>
            <div>
              <ul className="md:flex md:items-center gap-3">
                <li className="md:ml-8 text-xl">
                  <a
                    href="#"
                    className="text-black-800 font-bold hover:text-pink duration-500"
                  >
                    Blusas & Tops
                  </a>
                </li>
                <li className="md:ml-8 text-xl">
                  <a
                    href="#"
                    className="text-black-800 font-bold hover:text-pink duration-500"
                  >
                    Vestidos
                  </a>
                </li>
                <li className="md:ml-8 text-xl">
                  <a
                    href="#"
                    className="text-black-800 font-bold hover:text-pink duration-500"
                  >
                    Pantalones
                  </a>
                </li>
              </ul>
            </div>
            <div className="flex justify-between items-end">
              <div className="relative w-full max-w-[400px] mr-3">
                <input
                  className="bg-[#f2f3f5] border-none outline-none px-6 py-3 rounded-[30px] w-full"
                  type="text"
                  placeholder="Buscar un producto..."
                />
                <BiSearch
                  className="absolute top-0 right-0 mt-4 mr-5 text-gray-500"
                  size={20}
                />
              </div>
              <div className="flex">
                <div className="icon_wrapper relative">
                  <CartWidget />
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
