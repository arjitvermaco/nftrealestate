import React from "react";

const Team = () => {
  return (
    <div className="bg-grey-bg" id="team">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
        <img src="/images/Team_Text.png" />
        <div className="grid grid-cols-1 md:grid-cols-3 text-white">
          <div>
            <img src="/images/Dev_Logo.png" className="mx-auto" />
            <h1 className="font-bold text-3xl my-4 ">Dev</h1>
            <div className="divider"></div>
            <p className="mt-4">Writing code is not a crime!</p>
          </div>

          <div>
            <img src="/images/Designer_Logo.png"  className="mx-auto"  />
            <h1 className="font-bold text-3xl my-4 ">Designer</h1>
            <div className="divider"></div>
            <p className="mt-4">Creating art for NFT’s is not a crime!</p>
          </div>
          <div>
            <img src="/images/Creator_Logo.png"  className="mx-auto"  />
            <h1 className="font-bold text-3xl my-4 ">Creator</h1>
            <div className="divider"></div>
            <p className="mt-4">Giving back to the community is not a crime!</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
