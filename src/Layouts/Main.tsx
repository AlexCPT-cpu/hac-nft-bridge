import Dropdown from "../components/Dropdown";
import bscLogo from "../assets/bsc-logo.png";
import ethLogo from "../assets/ethereum-logo.png";
import polyLogo from "../assets/polygon-logo.svg";
import Hac3333Logo from "../assets/3333.jpeg";
import Hac333Logo from "../assets/333.jpeg";
import HacAliensLogo from "../assets/alien.jpeg";

const chains = [
  { name: "Binance Smart Chain", logo: bscLogo },
  { name: "Ethereum", logo: ethLogo },
  { name: "Polygon", logo: polyLogo },
];

const collections = [
  { name: "Horror Ape Club", logo: Hac3333Logo },
  { name: "Horror Apes 333", logo: Hac333Logo },
  { name: "Alien Horror Apes", logo: HacAliensLogo },
];

const Main = () => {
  return (
    <div className="px-8 lg:px-16">
      <h2 className="font-normal text-4xl mt-14">NFT BRIDGE BETA</h2>

      <div className="flex flex-col lg:flex-row lg:space-x-6">
        <div className="flex flex-col lg:flex-row justify-between w-full mt-8 border border-neutral-700 p-6 pt-7 rounded-xl pb-20 lg:pb-32">
          <div className="font-normal rounded-lg mt-4">
            <div className="mb-4">Selected Blockchain:</div>
            <div>
              <Dropdown data={collections} />
            </div>
          </div>

          <div className="font-normal mt-4">
            <div className="mb-4">NFT Collection:</div>
            <div>
              <Dropdown data={chains} />
            </div>
          </div>
        </div>

        <div className="flex flex-col justify-between w-full lg:w-[70%] mt-8 border border-neutral-700 p-6 pt-7 rounded-xl pb-32">
          <div className="flex justify-between flex-col lg:flex-row my-4">
            <div className="mb-2">Destination:</div>

            <div>
              <Dropdown data={chains} />
            </div>
          </div>

          <div className="flex my-4 justify-between flex-col lg:flex-row">
            <div className="mb-2">Recipient:</div>

            <div className="p-3 border border-gray-400 rounded-lg">
              <input
                type="text"
                className="bg-none outline-none border-none placeholder:text-gray-500 bg-transparent text-sm text-left"
                placeholder="0x0..."
              />
            </div>
          </div>

          <div className="flex my-4 justify-between flex-row lg:flex-row">
            <div className="mb-2">Selected NFTs:</div>
            <div className="hover:text-gray-400 cursor-pointer">
              None Selected
            </div>
          </div>

          <div className="flex my-4 justify-between flex-row items-center lg:flex-row mb-8">
            <div className="mb-2">Approve:</div>
            <div className="">
              <button className="border hover:border-white border-gray-400 transition-all rounded-lg py-2 px-4">
                Approve
              </button>
            </div>
          </div>

          <hr />

          <div>
            <div className="flex justify-between mt-6 items-center mb-8">
              <div>Fees:</div>
              <div className="">
                <div className="">{0} BNB</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
