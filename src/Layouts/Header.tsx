import { Bars3Icon, XMarkIcon } from "@heroicons/react/20/solid";
import { useState } from "react";
import Logo from "../assets/3333.jpeg";
import { ConnectKitButton } from "connectkit";
import MobileNav from "../components/MobileNav";
import truncateEthAddress from "truncate-eth-address";

const Header = () => {
  const [openNav, setOpen] = useState(false);

  const setOpenNav = (bool: boolean) => {
    setOpen(bool);
    const navLinks = document.querySelector(".nav-links");
    navLinks?.classList.toggle("top-[9%]");
  };

  return (
      <header className="bg-black text-white">
        <nav className="flex justify-between items-center w-[92%]  mx-auto">
          <div>
            <a href="/">
              <img
                src={Logo}
                className="rounded-full w-16 lg:w-20 cursor-pointer"
                alt="logo"
              />
            </a>
          </div>
          <div className="nav-links duration-500 md:static absolute bg-neutral-900 md:bg-transparent z-50 md:min-h-fit min-h-screen left-0 top-[-100%] md:w-auto  w-full flex items-center px-5">
            <ul className="flex ml-32 md:flex-row flex-col md:items-center md:gap-[4vw] gap-8 justify-center text-center">
              <li>
                <a className="hover:text-gray-500" href="#">
                  Home
                </a>
              </li>
              <li>
                <a className="hover:text-gray-500" href="#">
                  Marketplace
                </a>
              </li>
              <li>
                <a className="hover:text-gray-500" href="#">
                  Mint
                </a>
              </li>
            </ul>
          </div>
          <div className="flex items-center gap-6">
            <ConnectKitButton.Custom>
              {({
                isConnected,
                isConnecting,
                show,
                hide,
                address,
                ensName,
                chain,
              }) => {
                return (
                  <button onClick={show} className="px-6 py-2 active:text-sm items-center flex justify-center delay-200 transition-all border-2 rounded-md font-bold hover:border-purple-800 hover:text-gray-500 text-center border-purple-600 ">
                    {isConnected ? truncateEthAddress(address!) : "Connect"}
                  </button>
                );
              }}
            </ConnectKitButton.Custom>
            {openNav ? (
              <XMarkIcon
                onClick={() => setOpenNav(!openNav)}
                name="menu"
                className="text-3xl w-10 cursor-pointer fill-white md:hidden"
              />
            ) : (
              <Bars3Icon
                onClick={() => setOpenNav(!openNav)}
                name="menu"
                className="text-3xl w-10 cursor-pointer fill-white md:hidden"
              />
            )}
          </div>
        </nav>
      </header>
  );
};

export default Header;
