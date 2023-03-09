import { ArrowPathIcon } from "@heroicons/react/20/solid";

const Footer = () => {
  return (
    <div className="px-8 lg:px-16 pb-10">
      <div className="flex flex-col justify-between w-full mt-8 border border-neutral-700 pt-7 rounded-xl">
        <div className="text-2xl flex flex-row space-x-6 justify-center items-center mb-6">
          Swap History{" "}
          <span className="ml-6 hover:bg-slate-200/30 transition-all active:rotate-180 p-2  active:bg-slate-300/20 mt-1 delay-100 rounded-full">
            <ArrowPathIcon className="w-6" />
          </span>
        </div>
        <div>
          <div className="relative overflow-x-auto scrolbar-hide">
            <table className="w-full text-sm text-left text-white">
              <thead className="text-xs text-white uppercase scrolbar-hide">
                <tr className="scrolbar-hide">
                  <th scope="col" className="px-6 py-3">
                    NFT
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Ids
                  </th>
                  <th scope="col" className="px-6 py-3">
                    From
                  </th>
                  <th scope="col" className="px-6 py-3">
                    From Tx
                  </th>

                  <th scope="col" className="px-6 py-3">
                    To
                  </th>
                  <th scope="col" className="px-6 py-3">
                    To Tx
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Recipient
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Status
                  </th>
                </tr>
              </thead>
              <tbody className="scrolbar-hide">
                <tr className="scrolbar-hide">
                  <td
                    scope="row"
                    className="px-6 py-4 font-normal text-white whitespace-nowrap"
                  >
                    1
                  </td>
                  <td className="px-6 py-4">1</td>
                  <td className="px-6 py-4">0xgray...</td>
                  <td className="px-6 py-4">0x00...</td>
                  <td className="px-6 py-4">0xkaye...</td>
                  <td className="px-6 py-4">0x00...</td>
                  <td className="px-6 py-4">0xkaye...</td>
                  <td className="px-6 py-4">recieved</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
