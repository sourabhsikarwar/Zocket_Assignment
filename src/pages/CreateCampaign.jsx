import { useContext, useState } from "react";
import TimeLine from "../components/Create-Campaign/TimeLine";
import Panel from "../components/Create-Campaign/Panel";
import CampaignContext from "../contexts/campaignContext";
import { useNavigate } from "react-router-dom";

const CreateCampaign = () => {
  const [step, setStep] = useState(1);
  const navigate = useNavigate()
  const handleStep = () => {
    setStep(step + 1);
  };
  const { data, dispatch } = useContext(CampaignContext);
  const handleAddCampaign = () => {
    dispatch({
      type: "ADD_CAMPAIGN",
      payload: data.newCampaign,
    });
    navigate("/")
  }
  return (
    <div className="flex flex-col gap-8">
      <div className="flex justify-between items-center">
        <div className="flex flex-col gap-2">
          <h1 className="text-xl text-primaryText font-bold">
            Your AD Campaign
          </h1>
          <p className="text-secondaryText text-sm">
            Launch your ad in just 4 easy steps
          </p>
        </div>
      </div>
      <TimeLine step={step} />
      <Panel step={step} />
      <div className="flex justify-end">
        {step < 4 && (
          <button
            className="bg-blue-500 hover:bg-blue-600 rounded-xl py-3 px-6 text-white font-semibold self-center disabled:opacity-50"
            onClick={handleStep}
            disabled={
              (step == 1 && data.newCampaign.type == "") ||
              (step == 2 && data.newCampaign.title == "") ||
              (step == 3 && (data.newCampaign.budget === 0 || data.location == ""))
            }
          >
            Continue
          </button>
        )}
        {step == 4 && (
          <button
            disabled={step == 4 && data.newCampaign.caption == ""}
            className="bg-blue-500 hover:bg-blue-600 rounded-xl py-3 px-6 text-white font-semibold self-center"
            onClick={handleAddCampaign}
          >
            Start Campaign
          </button>
        )}
      </div>
    </div>
  );
};

export default CreateCampaign;
