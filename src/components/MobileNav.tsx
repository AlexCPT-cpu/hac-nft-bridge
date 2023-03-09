import { Transition } from "@headlessui/react";
import {
  Bars3Icon,
  MagnifyingGlassIcon,
  XMarkIcon,
} from "@heroicons/react/20/solid";
import React, { Fragment } from "react";
import { NavProps } from "../vite-env";
import { ConnectKitButton } from "connectkit";
import truncateEthAddress from "truncate-eth-address";

const MobileNav = ({ openNav, setOpenNav }: NavProps) => {
  return (
    <div className="flex lg:hidden">
      {openNav ? (
        <Transition
          as={Fragment}
          show={openNav}
          enter="transform transition duration-[400ms]"
          enterFrom="opacity-0 rotate-[-120deg] scale-50"
          enterTo="opacity-100 rotate-0 scale-100"
          leave="transform duration-200 transition ease-in-out"
          leaveFrom="opacity-100 rotate-0 scale-100 "
          leaveTo="opacity-0 scale-95 "
        >
          <div className="min-h-screen screen text-center min-w-full absolute z-50 left-0 top-0 backdrop-blur-sm items-center justify-center flex flex-col">
            <div className="absolute right-3 top-4">
              <XMarkIcon
                onClick={() => setOpenNav(!openNav)}
                className="w-8 transition duration-150 ease-out hover:ease-in cursor-pointer"
              />
            </div>
            <div className="absolute top-20 space-y-6">
              <div className="justify-between flex-col nav text-2xl flex space-y-3">
                <div className="cursor-pointer">Home</div>
                <div className="cursor-pointer">Marketplace</div>
                <div className="cursor-pointer">Mint</div>
              </div>
              <div className="flex px-4 py-3 bg-transparent hover:transparent rounded-3xl text-center justify-center cursor-pointer">
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
                      <button
                        onClick={show}
                        className="px-6 py-2 active:text-sm items-center flex justify-center delay-200 transition-all border-2 rounded-md font-bold hover:border-purple-800 hover:text-gray-500 text-center border-purple-600 "
                      >
                        {isConnected ? truncateEthAddress(address!) : "Connect"}
                      </button>
                    );
                  }}
                </ConnectKitButton.Custom>
              </div>
            </div>
          </div>
        </Transition>
      ) : (
        <Bars3Icon
          onClick={() => setOpenNav(!openNav)}
          className="w-8 transition duration-150 ease-out hover:ease-in cursor-pointer"
        />
      )}
    </div>
  );
};

export default MobileNav;
