import React from "react";
import { Link } from "react-scroll";
import Fade from 'react-reveal/Fade';

const navigation = [
  { name: "About", to: "about" },
  { name: "Mint", to: "mint" },
  { name: "RoadMap", to: "roadmap" },
  { name: "Team", to: "team" },
  { name: "FAQ", to: "faq" },
];
export default function Header() {
  return (
    <div>
      <header className="bg-black">
        <nav
          className="max-w-full mx-auto px-4 sm:px-6 lg:px-8"
          aria-label="Top"
        >
          <div className="w-full py-6 flex items-center justify-between border-b border-white lg:border-none">
            <div className="flex items-center">
              <a href="#" className="flex-1">
                <span className="sr-only">Workflow</span>
                <Fade left>
                <img className="h-20 w-auto" src="images/logo.png" alt="" />
                </Fade>
              </a>
              <div className="hidden flex-1 md:ml-20  space-x-8 lg:block">
              
                {navigation.map((link) => (
                 
                  <Link
                    to={link.to}
                    spy={true}
                    offset={-0}
                    smooth={true}
                    className="text-base cursor-pointer font-medium text-white hover:text-indigo-50 hover:cursor-pointer"
                  > 
                    {link.name}
                  </Link>
                
                ))}
            
              </div>
            </div>
            <div className="ml-10  space-x-4 flex items-center">
            <Fade right cascade>
              <a href="" className="hidden md:flex w-12">
                <img src="/images/twitter.png" />
              </a>
              <a href="" className="hidden md:flex w-12">
                <img src="/images/discord.png" />
              </a>
              <a href="" className="hidden md:flex w-12">
                <img src="/images/opensea.png" />
              </a>
              <a
                href="#"
                className=" bg-gradient-to-r from-purple to-l-purple hover:from-l-purple hover:to-purple py-2 px-2 md:py-4 md:px-6 border border-transparent rounded-md text-xl font-medium text-white hover:bg-opacity-75"
              >
                Connect Wallet
              </a>
              </Fade>
            </div>
          </div>
          <div className="py-4 flex flex-wrap justify-center space-x-6 lg:hidden">
            {navigation.map((link) => (
              <Link
              to={link.to}
              spy={true}
              offset={-0}
              smooth={true}
              className="text-base  cursor-pointer font-medium text-white hover:text-indigo-50"
            >
              {link.name}
            </Link>
            ))}
          </div>
        </nav>
      </header>
    </div>
  );
}
