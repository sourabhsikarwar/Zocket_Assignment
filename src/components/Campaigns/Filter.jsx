const Filter = () => {
  return (
    <div className="flex flex-col sm:flex-row flex-wrap gap-y-4 justify-between items-start md:items-center">
      <input type="text" placeholder="Search a campaign..." className="border-2 border-gray-200 rounded-lg" />
      <div className="flex md:flex-row flex-wrap gap-3">
        <div className="flex gap-2 items-center">
          <label htmlFor="platform" className="text-secondaryText text-sm">
            Platform:
          </label>
          <select
            name="platform"
            id="platform"
            className="border-2 border-gray-200 rounded-lg p-2"
          >
            <option value="instagram" className="text-secondaryText">
              Instagram
            </option>
            <option value="instagram" className="text-secondaryText">
              Facebook
            </option>
            <option value="instagram" className="text-secondaryText">
              Youtube
            </option>
            <option value="instagram" className="text-secondaryText">
              Google
            </option>
          </select>
        </div>
        <div className="flex gap-2 items-center">
          <label htmlFor="status" className="text-sm text-secondaryText">
            Status:
          </label>
          <select
            name="status"
            id="status"
            className="border-2 border-gray-200 rounded-lg p-2"
          >
            <option value="instagram" className="text-secondaryText">
              Live
            </option>
            <option value="instagram" className="text-secondaryText">
              Paused
            </option>
            <option value="instagram" className="text-secondaryText">
              Exhausted
            </option>
          </select>
        </div>
        <div className="flex gap-2 items-center">
          <select
            name="time"
            id="time"
            className="border-2 border-gray-200 rounded-lg p-2"
          >
            <option value="30" className="text-secondaryText">
              Last 30 days
            </option>
            <option value="7" className="text-secondaryText">
              Last Week
            </option>
            <option value="1" className="text-secondaryText">
              Today
            </option>
            <option value="all" className="text-secondaryText">
              All
            </option>
          </select>
        </div>
      </div>
    </div>
    
  );
};

export default Filter;
