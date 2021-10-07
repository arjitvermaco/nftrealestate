import React from "react";

const Footer = () => {
  return (
    <footer className="bg-black">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        {/* <div className="flex justify-center space-x-6 md:order-2">
          <a className="text-gray-400 hover:text-gray-500">
            <img src="/images/footer_discord.png" />
          </a>

          <a className="text-gray-400 hover:text-gray-500">
            <img src="/images/footer_twitter.png" />
          </a>

          <a className="text-gray-400 hover:text-gray-500">
            <img src="/images/footer_opensea.png" />
          </a>
        </div>
        <div className="mt-8 md:mt-0 md:order-1">
          <p className="text-center text-base text-gray-400">
            © 2021 NFT Estate. All rights reserved.
          </p>
        </div> */}

        <div className="grid grid-cols-1 md:grid-cols-3 place-items-end gap-4">
          <div className="md:col-start-2 place-self-center col-span-1 text-white ">
            {" "}
            © 2021 NFT Estate. All rights reserved.
          </div>
          <div className="col-span-1  place-items-end text-white flex">
          <a className="text-gray-400 hover:text-gray-500">
            <img src="/images/footer_discord.png" />
          </a>

          <a className="text-gray-400 hover:text-gray-500">
            <img src="/images/footer_twitter.png" />
          </a>

          <a className="text-gray-400 hover:text-gray-500">
            <img src="/images/footer_opensea.png" />
          </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
