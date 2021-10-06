import React from "react";

export default function Banner() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12" id="banner">
      <div className="flex flex-col-reverse md:flex-row text-white">
        <div className="flex-auto text-left">
          <h1 className="text-2xl md:text-5xl font-bold leading-relaxed	">
            The Real Estate NFT project you've been waiting for...
          </h1>
          <p className="mt-4 font-light">
            NFTestate is the world's first NFT project based on Digital Real
            Estate.
          </p>
          <p className="mt-4 font-light">
            We are a community-oriented project where members vote on future
            development. <br />
            The great part of this project is that YOU can become a Realtor,
            Property Owner, or Real Estate Expert.
          </p>
          <p className="mt-4 font-light">
            Next to that, we're giving back (A LOT) to the NFT Realtors! We will
            bring some awesome giveaways that never happened before in this NFT
            space... so you better stay tuned.
          </p>
          <p className="mt-4 font-light">
            The presale will start soon. The mint price will be 0.075ETH.
          </p>
          <div className="mt-6 flex flex-col items-center md:flex-row justify-between">
            <a
              href="#"
              className=" bg-gradient-to-b from-purple to-l-purple hover:from-l-purple hover:to-purple mt-4  py-2 px-3 border border-transparent rounded-md text-base font-medium text-white hover:bg-opacity-75"
            >
              Join Discord{" "}
            </a>

            <a
              href="#"
              className=" bg-gradient-to-b from-red to-l-red hover:from-l-red hover:to-red mt-4  py-2 px-3 border border-transparent rounded-md text-base font-medium text-white hover:bg-opacity-75"
            >
              Check Twitter{" "}
            </a>
          </div>
        </div>
        <div>
          <img src="/images/banner.png" />
        </div>
      </div>
    </div>
  );
}
