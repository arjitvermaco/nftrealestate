import React from "react";

export default function MInt() {
  return (
    <div className="" id="mint">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
        <img src="/images/mint_text.png" />

        <div className="flex flex-col md:flex-row space-y-5 justify-around items-center">
          <div>
            <img src="/images/For-Sale-Image.png" />
          </div>

          <div className="text-white">
            <h3 className="bg-purple p-4 rounded-3xl border border-white">
              Minted : 0/9942
            </h3>
            <h1 className="text-3xl my-6">Buy A NFT Property</h1>
            <p>0.075 ETH/ each</p>
            <p>Total Price:</p>
            <div className="mt-4">
              <span className="px-5 mr-3 py-1 border border-white mt-4">-</span>
              <span className="px-8  py-1 border border-white bg-white text-black">
                1
              </span>
              <span className="px-5 ml-3 py-1 border border-white mt-4">+</span>
            </div>

           <div className="grid grid-cols-3 mt-8">
             <div>Progress</div>
             <div className="relative pt-1 ">
              <div className="overflow-hidden h-2 mb-4 text-xs flex  bg-white">
                <div
                  style={{ width: "30%" }}
                  className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-purple"
                ></div>
              </div>
            </div>
            <div>40%</div>
           </div>

          <button className="bg-purple border-2 mt-8 px-6 py-3 border-white">Connect Wallet</button>

          </div>

          <div>
            <img src="/images/SOLD_Image.png" />
          </div>
        </div>

        <div className="text-white flex flex-col lg:flex-row gap-x-6 font-thin justify-around items-baseline flex-grow">
          <div className="flex-1  ">
            <img src="/images/lock.png" className="w-12 mx-auto" />
            <p>
              Our Smart contract implements a locking mechanism that prevents
              tampering and will be activated at the time the community chooses.
            </p>
          </div>

          <div className="flex-1 mb-10 align-middle text-center">
            <img src="/images/9942.png" className="w-32 mx-auto" />
            <p className="text-center">9,942 provably-rare property NFTs</p>
          </div>

          <div className="flex-1">
            <h3 className="text-3xl -mt-4 font-bold">0.075 ETH</h3>
            <p>
              Fair Launch and distribution – all properties have the same cost
              of 0.075 ETH
            </p>
          </div>

          <div className="flex-1">
            <img src="/images/ether.png" className="w-12 mx-auto" />
            <p>
              All properties live on an ERC-721 compatible Smart Contract on the
              Ethereum blockchain.
            </p>
          </div>

          <div className="flex-1">
            <img src="/images/para.png" className="w-12 mx-auto" />
            <p>
              50 Realtor NFT’s will be given by Airdrop. These holders receive
              1.5% of the royalties every month!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
