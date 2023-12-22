import { useContext, useState } from "react";
import Toggle from "../UI/Toggle";
import edit from "../../assets/images/edit.png";
import bin from "../../assets/images/bin.png";
import CampaignContext from "../../contexts/campaignContext";

const Table = () => {
  const { data, dispatch } = useContext(CampaignContext);

  // todo search and filter
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState({
    status: "",
    platform: "",
    time: "",
  });

  const handleDelete = (id) => {
    dispatch({ type: "DELETE_CAMPAIGN", payload: id });
  };
  const handleToggle = (id) => {
    dispatch({ type: "TOGGLE_STATUS", payload: id });
  };

  return (
    <div className="relative overflow-x-auto rounded-xl">
      <table className="w-full text-sm text-left rtl:text-right text-gray-500">
        <thead className="text-xs text-primaryText uppercase bg-gray-200">
          <tr className="">
            <th scope="col" className="px-6 py-3 text-center">
              On/Off
            </th>
            <th scope="col" className="px-6 py-3 text-center">
              Campaign
            </th>
            <th scope="col" className="px-6 py-3 text-center">
              Date Range
            </th>
            <th scope="col" className="px-6 py-3 text-center">
              Clicks
            </th>
            <th scope="col" className="px-6 py-3 text-center">
              Budget
            </th>
            <th scope="col" className="px-6 py-3 text-center">
              Location
            </th>
            <th scope="col" className="px-6 py-3 text-center">
              Platform
            </th>
            <th scope="col" className="px-6 py-3 text-center">
              Status
            </th>
            <th scope="col" className="px-6 py-3 text-center">
              Actions
            </th>
          </tr>
        </thead>
        <tbody>
          {data?.campaignData?.map((campaign) => (
            <tr className="border-b border-gray-300" key={campaign.id}>
              <td
                scope="row"
                className="font-medium text-center text-gray-700 whitespace-nowrap py-4 px-2"
              >
                <Toggle
                  on_off={campaign.on_off}
                  status={campaign.status}
                  handleToggle={handleToggle}
                  id={campaign.id}
                />
              </td>
              <td
                scope="row"
                className="flex justify-center py-4 px-2 items-center gap-2 font-medium text-primaryText whitespace-nowrap w-64"
              >
                <img
                  src={campaign.img}
                  alt="campaignImg"
                  className="w-16 rounded-lg"
                />
                <div className="flex flex-col">
                  <p className="text-primaryText">{campaign?.title}</p>
                  <p className="text-xs text-secondaryText">
                    Created at {campaign.createdAt}
                  </p>
                </div>
              </td>
              <td className="text-center py-4 px-2">
                {campaign.startDate} - {campaign.endDate}
              </td>
              <td className="text-center py-4 px-2">{campaign.clicks}</td>
              <td className="text-center py-4 px-2">{campaign.budget}</td>
              <td className="text-center py-4 px-2">{campaign.location}</td>
              <td className="text-center py-4 px-2">
                <img
                  src={campaign.platform.img}
                  alt="platform"
                  className="w-6 mx-auto"
                />
              </td>
              <td className="text-center py-4 px-2">
                <div
                  className={`p-2 w-fit mx-auto rounded-lg ${
                    campaign.status === "Live"
                      ? "bg-green-200 text-green-700"
                      : campaign.status === "Exhausted"
                      ? "bg-red-200 text-red-700"
                      : "bg-yellow-200 text-orange-500"
                  }`}
                >
                  {campaign.status}
                </div>
              </td>
              <td className="px-2 py-4">
                <div className="flex gap-3 items-center justify-center">
                  <img src={edit} alt="edit" className="w-4 cursor-pointer" />
                  <img
                    src={bin}
                    alt="edit"
                    className="w-4 cursor-pointer"
                    onClick={() => handleDelete(campaign.id)}
                  />
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
