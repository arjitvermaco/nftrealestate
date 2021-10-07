import React from "react";
import Fade from "react-reveal/Fade";
import Rotate from "react-reveal/Rotate";

export default function About() {
  return (
    <div className="bg-grey-bg" id="about">
      <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8 pb-12">
        <img src="/images/about_text.png" />

        <div className="flex items-center flex-col md:flex-row text-white">
          <div>
            <Rotate top left>
              <img src="/images/About_image.png" />
            </Rotate>
          </div>
          <div className="md:p-24">
            <Fade bottom>
              <h1 className="text-2xl md:text-5xl font-bold leading-relaxed text-left	">
                Become an NFT Realtor or Property Owner!
              </h1>

              <div className="text-left font-thin leading-relaxed">
                <p className="mt-4">
                  NFT Estate is a beautiful collection of 6,330 unique, randomly
                  generated properties roaming on the Ethereum blockchain as
                  ERC-721 NFTs.
                </p>
                <p className="mt-4">
                  Every property will be unique and programmatically generated
                  from over 15 possible attributes and/or many colors.
                </p>
                <p className="mt-4">In total 9,942 pieces can be minted!</p>
                <p className="mt-4">
                  Why 9,942 when there are only 6,330 unique properties?
                </p>
                <p className="mt-4">
                  We have 3 buildings that are unit-based like in real life.{" "}
                  <br />
                  For example, we have a hotel property with 75 units. So, 75
                  NFT's of this same building will be sold but with a different
                  unit number.
                </p>
                <p className="mt-4">
                  The great advantage is that you can become an owner of this
                  whole hotel for example.
                  <br />
                  Think like when you're playing Monopoly and need to collect a
                  street or multiple streets in order to gain more profit.
                </p>
                <p className="mt-4">
                  Owning a property gives you an unprecedented advantage next to
                  that every Realtor will get exclusive access to a plethora of
                  members-only benefits spanning both the digital and real
                  world.
                </p>
              </div>
            </Fade>
          </div>
        </div>
      </div>
    </div>
  );
}
