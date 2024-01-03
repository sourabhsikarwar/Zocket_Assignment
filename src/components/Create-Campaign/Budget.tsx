import { useContext } from "react";
import CampaignContext from "../../contexts/campaignContext";

const Budget = () => {
  const { data, dispatch } = useContext(CampaignContext);
  return (
    <ol className="relative border-s border-gray-300 px-4">
      <li className="my-10 ms-6">
        <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -start-3 ring-8 ring-white">
          1
        </span>
        <h3 className="mb-1 text-lg font-semibold text-primaryText underline">
          Budget and Dates info
        </h3>
        <div className="flex gap-3 flex-col my-8">
          <p className="text-xs text-secondaryText">Budget Timeline</p>
          <label
            htmlFor="Toggle3"
            className="inline-flex w-fit items-center rounded-full cursor-pointer bg-gray-200 dark:text-gray-800"
          >
            <input id="Toggle3" type="checkbox" className="hidden peer" />
            <span className="px-4 py-2 rounded-full dark:bg-blue-500 text-white peer-checked:dark:bg-gray-200 peer-checked:text-gray-500">
              Monthly
            </span>
            <span className="px-4 py-2 rounded-full dark:bg-gray-200 text-gray-500 peer-checked:dark:bg-blue-500 peer-checked:text-white">
              Annually
            </span>
          </label>
        </div>

        <div className="flex flex-wrap items-center gap-4">
          <div className="relative">
            <input
              name="start"
              type="date"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              placeholder="Select date start"
              onChange={(e) => {
                dispatch({
                  type: "SET_STEP_3_DATA",
                  payload: {
                    type: "StartDate",
                    startDate: e.target.value,
                  },
                });
              }}
            />
          </div>
          <div className="relative">
            <input
              name="end"
              type="date"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full px-4 py-2.5"
              placeholder="Select date end"
              onChange={(e) => {
                dispatch({
                  type: "SET_STEP_3_DATA",
                  payload: {
                    type: "EndDate",
                    endDate: e.target.value,
                  },
                });
              }}
            />
          </div>
        </div>

        <div className="my-8">
          <label
            htmlFor="steps-range"
            className="flex justify-between w-full mb-2 text-sm font-medium text-gray-900"
          >
            <p>Enter Campaign Budget</p>
            <span className="font-bold">Rs. {data.newCampaign.budget}</span>
          </label>
          <input
            id="steps-range"
            type="range"
            min="1000"
            max="100000"
            step="1000"
            value={data.newCampaign.budget}
            onChange={(e) => {
              dispatch({
                type: "SET_STEP_3_DATA",
                payload: {
                  type: "Budget",
                  budget: e.target.value,
                },
              });
            }}
            className="w-full h-2 bg-gray-200 rounded-lg cursor-pointer"
          />
          <div className="my-3 flex justify-between">
            <p className="text-secondaryText text-sm">1000</p>
            <p className="text-secondaryText text-sm">1,00,000</p>
          </div>
        </div>
      </li>
      <li className="mb-10 ms-6">
        <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -start-3 ring-8 ring-white">
          2
        </span>
        <h3 className="my-4 text-lg font-semibold text-primaryText underline">
          Location Info
        </h3>
        <label
          htmlFor="location"
          className="my-2 text-primaryText font-medium text-sm"
        >
          Enter Location
        </label>
        <input
          name="location"
          id="location"
          type="text"
          className="my-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full py-2.5 px-4"
          placeholder="Select date end"
          onChange={(e) => {
            dispatch({
              type: "SET_STEP_3_DATA",
              payload: {
                type: "Location",
                location: e.target.value,
              },
            });
          }}
        />
      </li>
    </ol>
  );
};

export default Budget;
