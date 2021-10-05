import React from "react";

const Footer = () => {
  return (
    <footer className="bg-black">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 md:flex md:items-center md:justify-between lg:px-8">
        <div className="flex justify-center space-x-6 md:order-2">
          <a className="text-gray-400 hover:text-gray-500">
              <img src="/images/footer_discord.png"/>
              

          </a>

          <a className="text-gray-400 hover:text-gray-500">
             
              <img src="/images/footer_twitter.png"/>

          </a>

          <a className="text-gray-400 hover:text-gray-500">
              
              <img src="/images/footer_opensea.png"/>

          </a>
        </div>
        <div className="mt-8 md:mt-0 md:order-1">
          <p className="text-center text-base text-gray-400">
            &copy; © 2021 NFT Estate. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
