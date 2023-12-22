import { useContext, useEffect, useState } from "react";
import { heading } from "../../constants";
import Cards from "./Cards";
import CampaignContext from "../../contexts/campaignContext";

const Panel = ({ step }) => {
  return (
    <div className="p-6 bg-white rounded-xl">
      <div className="border-b-2 border-gray-200 pb-2">
        <h1 className="text-md font-semibold">
          {heading[step - 1]}
          <span className="ml-3 text-secondaryText text-sm font-normal">
            {`(Step ${step} of 4)`}
          </span>
        </h1>
      </div>
      <Cards step={step} />
    </div>
  );
};

export default Panel;
