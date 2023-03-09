import { Fragment, useState } from "react";
import { Listbox, Transition } from "@headlessui/react";
import { CheckIcon, ChevronUpDownIcon } from "@heroicons/react/20/solid";
import { Chains, Chain, ChainProps } from "../vite-env";

const Dropdown = ({ data }: ChainProps) => {
  const [selected, setSelected] = useState(data[0]);

  return (
    <Listbox value={selected} onChange={setSelected}>
      <div className="relative mt-1">
        <Listbox.Button className="relative w-full cursor-default rounded-lg transition-all bg-black p-2 border border-gray-400 py-2 pl-3 pr-10 text-left shadow-md focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm">
          <span className="flex flex-row truncate">
            <img src={selected.logo} alt="" className="w-5 mr-2 rounded-full" />
            {selected.name}
          </span>
          <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
            <ChevronUpDownIcon
              className="h-5 w-5 text-gray-400"
              aria-hidden="true"
            />
          </span>
        </Listbox.Button>
        <Transition
          as={Fragment}
          leave="transition ease-in duration-100"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <Listbox.Options className="absolute transition-all mt-1 max-h-60 w-[200px] overflow-auto z-10 rounded-md bg-[#242735] py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
            {data.map((chain, id) => (
              <Listbox.Option
                key={id}
                className={({ active }) =>
                  `relative cursor-pointer select-none py-2 pr-4 transition-all z-10 ${
                    selected ? "pl-2" : ""
                  } ${active ? "bg-[#3b3f54]" : "text-white"}`
                }
                value={chain}
              >
                {({ selected }) => (
                  <>
                    <span
                      className={`flex truncate flex-row ${
                        selected ? "font-medium" : "font-normal"
                      }`}
                    >
                      <img
                        src={chain.logo}
                        alt=""
                        className="w-5 mr-2 rounded-full"
                      />{" "}
                      {chain.name}
                    </span>
                    {selected ? (
                      <span className="absolute inset-y-0 left-40 flex items-center pl-4 text-amber-600">
                        <CheckIcon className="h-5 w-5" aria-hidden="true" />
                      </span>
                    ) : null}
                  </>
                )}
              </Listbox.Option>
            ))}
          </Listbox.Options>
        </Transition>
      </div>
    </Listbox>
  );
};

export default Dropdown;
