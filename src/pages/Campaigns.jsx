import React from "react";
import Table from "../components/Campaigns/Table";
import Filter from "../components/Campaigns/Filter";
import { Link } from "react-router-dom";

const Campaigns = () => {
  return (
    <div className="flex flex-col gap-8">
      <div className="flex justify-between item-center">
        <div className="flex flex-col gap-2">
          <h1 className="text-xl font-bold text-primaryText">Your Campaigns</h1>
          <p className="text-sm text-secondaryText">
            Lorem ipsum dolor sit amet consectetur.
          </p>
        </div>
        <Link to="/create" className="bg-blue-500 hover:bg-blue-600 rounded-xl py-3 px-6 text-white font-semibold self-center">
          <span className="mr-2 text-lg">&#43;</span>Create new campaign
        </Link>
      </div>
      <div className="flex flex-col gap-8 rounded-xl bg-white p-6 border-[1px] border-gray-200">
        <Filter />
        <Table />
      </div>
    </div>
  );
};

export default Campaigns;
