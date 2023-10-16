import { BiSearch } from "react-icons/bi";
import CartWidget from "../../common/cartWidget/CartWidget";
import { Outlet, Link } from "react-router-dom";
const Navbar = () => {
  return (
    <>
      <header className="bg-white shadow-md w-full">
        <nav className=" sticky top-0">
          <div className="container hidden lg:block h-full">
            <div className="md:px-10 py-4 px-7 md:flex justify-between items-center p-4">
              <Link to="/">
                <div className="flex items-center">
                  <img
                    src="https://res.cloudinary.com/dsdmjhkms/image/upload/v1695835297/litvzfzqvj7qpk6aqtu0.png"
                    className="h-10 mr-3 md:cursor-pointer"
                    alt="Obsession Logo"
                  />
                </div>
              </Link>
              <ul className="md:flex md:items-center gap-3">
                <li className="md:ml-8 text-lg">
                  <Link to="/category/remera">
                    <div className="text-black-800 font-bold hover:text-pinkLogo duration-500">
                      Remeras & Tops
                    </div>
                  </Link>
                </li>
                <li className="md:ml-8 text-lg">
                  <Link to="/category/vestido">
                    <div className="text-black-800 font-bold hover:text-pinkLogo duration-500">
                      Vestidos
                    </div>
                  </Link>
                </li>
                <li className="md:ml-8 text-lg">
                  <Link to="/category/pantalon">
                    <div className="text-black-800 font-bold hover:text-pinkLogo duration-500">
                      Pantalones
                    </div>
                  </Link>
                </li>
              </ul>
              <div className="flex justify-between items-end md:flex">
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
      <Outlet />
    </>
  );
};

export default Navbar;
