import React from "react";

const navigation = [
  { name: "About", href: "#" },
  { name: "Mint", href: "#" },
  { name: "RoadMap", href: "#" },
  { name: "Team", href: "#" },
  { name: "FAQ", href: "#" },
];
export default function Header() {
  return (
    <div>
      <header className="bg-black">
        <nav
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
          aria-label="Top"
        >
          <div className="w-full py-6 flex items-center justify-between border-b border-white lg:border-none">
            <div className="flex items-center">
              <a href="#">
                <span className="sr-only">Workflow</span>
                <img className="h-10 w-auto" src="images/logo.png" alt="" />
              </a>
              <div className="hidden ml-10 space-x-8 lg:block">
                {navigation.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    className="text-base font-medium text-white hover:text-indigo-50"
                  >
                    {link.name}
                  </a>
                ))}
              </div>
            </div>
            <div className="ml-10 space-x-4 flex items-center">
              <a href="" className=" w-12">
                <img src="/images/twitter.png" />
              </a>
              <a href="" className=" w-12">
                <img src="/images/discord.png" />
              </a>
              <a href="" className=" w-12">
                <img src="/images/opensea.png" />
              </a>
              <a
                href="#"
                className=" bg-gradient-to-r from-purple to-l-purple hover:from-l-purple hover:to-purple md:py-4 md:px-6 border border-transparent rounded-md text-xl font-medium text-white hover:bg-opacity-75"
              >
                Connect Wallet{" "}
              </a>
              \
            </div>
          </div>
          <div className="py-4 flex flex-wrap justify-center space-x-6 lg:hidden">
            {navigation.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-base font-medium text-white hover:text-indigo-50"
              >
                {link.name}
              </a>
            ))}
          </div>
        </nav>
      </header>
    </div>
  );
}
