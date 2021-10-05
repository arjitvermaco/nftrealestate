import React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";
import "react-accessible-accordion/dist/fancy-example.css";

const Faq = () => {
  return (
    <div id="faq">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
        <img src="/images/Faq.png" />

        <Accordion className="text-white text-left">
          <AccordionItem className="border border-white p-4">
            <AccordionItemHeading>
              <AccordionItemButton className="">
                How do I purchase my digital Real Estate?
              </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
              <div>
                <p className="mt-4">
                  You will need to have a wallet installed and set up. We use
                  MetaMask (If you don’t know what MetaMask is or how to install
                  it, please visit&nbsp;https://metamask.io&nbsp;for
                  instructions).&nbsp;
                </p>
                <p className="mt-4">
                  In order to buy, connect with your wallet and use the minting
                  interface to select how many properties you want to get.&nbsp;
                  <br />
                  Click the mint button, approve the transaction on MetaMask and
                  CONGRATZ, your first piece(s) of Digital Real Estate are
                  bought!&nbsp;
                </p>
                <p className="mt-4">
                  You can buy up to 10 Properties in a single transaction.&nbsp;
                </p>
                <p className="mt-4">
                  Please make sure you have enough ETH in your wallet for the
                  desired number of properties (see pricing above) and for some
                  fees – here we call it Gas – (which are charged by the
                  Ethereum network).
                </p>
              </div>
            </AccordionItemPanel>
          </AccordionItem>

          <AccordionItem className="border border-white p-4">
            <AccordionItemHeading>
              <AccordionItemButton className="">
                How much does 1 piece cost?{" "}
              </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
              <p>The prices are in ETH.</p>
              <p>0.075 ETH per property</p>
            </AccordionItemPanel>
          </AccordionItem>

          <AccordionItem className="border border-white p-4">
            <AccordionItemHeading>
              <AccordionItemButton className="">
                Can I sell my NFT?{" "}
              </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
              <p>
                After an NFT is minted, it can be traded for free by its owner
                and there are no costs involved except the ETH transaction fees.{" "}
              </p>
              <p>
                We use OpenSea because it is the largest NFT marketplace and the
                platform of choice for most collectors who wish to buy or sell.
                <br />
                Trading on OpenSea involves additional fees for the seller.
              </p>
            </AccordionItemPanel>
          </AccordionItem>

          <AccordionItem className="border border-white p-4">
            <AccordionItemHeading>
              <AccordionItemButton className="">
                Why 9,942 pieces?{" "}
              </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
              <p>
                9,942 NFT’s are open for minting. Please know that we do NOT
                keep any NFT for the makers.
              </p>
              <p>
                50 NFT’s will be airdropped as realtor licenses to the holders.
                These licenses are very rare and have a lot of advantages!
                <br />8 NFT’s will be airdropped as gift to the greatest
                realtors in this world!! Please be aware that these NFT’s are
                not properties.
              </p>
            </AccordionItemPanel>
          </AccordionItem>

          <AccordionItem className="border border-white p-4">
            <AccordionItemHeading>
              <AccordionItemButton className="">
                Which advantage do I have when I own a whole hotel, apartment or
                other big building?{" "}
              </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
              <p>
                You need to think like in real life or when playing Monopoly.
              </p>
              <p>
                If you are an owner of an apartment, you’ll get a lot of rent
                (passive income), or in Monopoly the more streets you have the
                better. Future will reveal more about these advantages.
                <br />
                Psstttttt maybe it has to do something with the surprise.
              </p>
            </AccordionItemPanel>
          </AccordionItem>

          <AccordionItem className="border border-white p-4">
            <AccordionItemHeading>
              <AccordionItemButton className="">
                How can I participate at the presales?{" "}
              </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
              <p>
                On our Discord you’ll find a guide how to be selected for the
                presales.
              </p>
              <p>
                We use the first come, first served principle.
                <br />
                We believe this is the most fair way to reward our early
                adapters.
              </p>
            </AccordionItemPanel>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
};

export default Faq;
