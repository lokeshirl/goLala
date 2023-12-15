import {
  Bars3Icon,
  HeartIcon,
  ChevronDownIcon,
  HomeIcon,
  MagnifyingGlassIcon,
  MapPinIcon,
  BookOpenIcon,
  ShoppingCartIcon,
} from "@heroicons/react/24/solid";
import Logo from "./Logo.jsx";

const handleToggleMenu = () => {
  const nav = document.querySelector(".mobile-nav");

  nav.classList.toggle("hidden");
};

const Navbar = () => {
  return (
    <header className="sticky w-full top-0 bg-white z-20 py-4 border-b shadow-sm border-gray-100">
      <div className="container-max flex justify-between items-center">
        <div className="flex items-center gap-2 lg:gap-4">
          <Logo />
          <button className="text-xs lg:text-sm flex items-center gap-1">
            <MapPinIcon className="w-4 h-4 text-gray-700" />
            Delhi
            <ChevronDownIcon className="w-4 h-4 text-orange-500" />
          </button>
        </div>

        <ul className="text-zinc-700 ml-auto gap-2 lg:gap-4 items-center hidden lg:flex">
          <li>
            <a
              href="#"
              className="p-2 lg:px-4 hover:bg-gray-50 rounded-md flex items-center gap-2"
            >
              <MagnifyingGlassIcon className="w-4 h-4 text-gray-700" />{" "}
              <p className="hidden lg:block">Search</p>
            </a>
          </li>
          <li>
            <a
              href="#"
              className="p-2 lg:px-4 hover:bg-gray-50 rounded-md flex items-center gap-2"
            >
              <HomeIcon className="w-4 h-4 text-gray-700" />{" "}
              <p className="hidden lg:block">Home</p>
            </a>
          </li>
          <li>
            <a
              href="#"
              className="p-2 lg:px-4 hover:bg-gray-50 rounded-md flex items-center gap-2"
            >
              <HeartIcon className="w-4 h-4 text-gray-700" />{" "}
              <p className="hidden lg:block">Favorites</p>
            </a>
          </li>
          <li>
            <a
              href="#"
              className="p-2 lg:px-4 hover:bg-gray-50 rounded-md flex items-center gap-2"
            >
              <BookOpenIcon className="w-4 h-4 text-gray-700" />{" "}
              <p className="hidden lg:block">Recipes</p>
            </a>
          </li>
          <li>
            <a
              href="#"
              className="p-2 relative lg:px-4 hover:bg-gray-50 rounded-md flex items-center gap-2"
            >
              <ShoppingCartIcon className="w-4 h-4 text-gray-700" />{" "}
              <p className="hidden lg:block">Cart</p>
              {
                <p className="absolute -top-1 -right-1 bg-primary text-white flex justify-center items-center w-5 h-5 text-xs rounded-full">
                  2
                </p>
              }
            </a>
          </li>
        </ul>

        <div className="mobile-nav hidden shadow-lg transition-all lg:hidden absolute top-full right-0 bg-white h-screen p-4 px-8">
          <>
            <ul className="text-zinc-700 space-y-4">
              <li>
                <a
                  href="#"
                  className="p-2 lg:px-4 hover:bg-gray-50 rounded-md flex items-center gap-2"
                >
                  <MagnifyingGlassIcon className="w-4 h-4 text-gray-700" />{" "}
                  <p>Search</p>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="p-2 lg:px-4 hover:bg-gray-50 rounded-md flex items-center gap-2"
                >
                  <HomeIcon className="w-4 h-4 text-gray-700" /> <p>Home</p>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="p-2 lg:px-4 hover:bg-gray-50 rounded-md flex items-center gap-2"
                >
                  <HeartIcon className="w-4 h-4 text-gray-700" />{" "}
                  <p>Favorites</p>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="p-2 lg:px-4 hover:bg-gray-50 rounded-md flex items-center gap-2"
                >
                  <BookOpenIcon className="w-4 h-4 text-gray-700" />{" "}
                  <p>Recipes</p>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="p-2 relative lg:px-4 hover:bg-gray-50 rounded-md flex items-center gap-2"
                >
                  <ShoppingCartIcon className="w-4 h-4 text-gray-700" />{" "}
                  <p>Cart</p>
                  {
                    <p className="absolute -top-1 -right-1 bg-primary text-white flex justify-center items-center w-5 h-5 text-xs rounded-full">
                      2
                    </p>
                  }
                </a>
              </li>
              <li>
                <button className="ml-4 bg-primary text-white p-2 px-4 rounded-md items-center gap-2">
                  Login
                </button>
              </li>
            </ul>
          </>
        </div>

        <button className="ml-4 bg-primary text-white p-2 px-4 rounded-md items-center gap-2 hidden lg:flex">
          Login
        </button>

        <button className="block lg:hidden" onClick={handleToggleMenu}>
          <Bars3Icon className="w-6 h-6" />
        </button>
      </div>
    </header>
  );
};

export default Navbar;
