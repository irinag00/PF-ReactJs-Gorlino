import { BiSearch, BiMenu } from "react-icons/bi";
import CartWidget from "../../common/cartWidget/CartWidget";
import { Outlet, Link } from "react-router-dom";
const MobNavbar = () => {
  return (
    <>
      <header className="bg-white shadow-md">
        <nav className=" sticky top-0">
          <div className="p-8 lg:hidden">
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-6">
                <BiMenu size={30} />
                <BiSearch size={24} />
              </div>
              <Link to="/">
                <div className="flex items-center">
                  <img
                    src="https://res.cloudinary.com/dsdmjhkms/image/upload/v1695835297/litvzfzqvj7qpk6aqtu0.png"
                    className="h-7 mr-3 md:cursor-pointer"
                    alt="Obsession Logo"
                  />
                </div>
              </Link>
              <div className="flex gap-4 text-[30px] items-end">
                <div className="relative cursor-pointer">
                  <CartWidget size="w-[20px] h-[20px]" />
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

export default MobNavbar;
