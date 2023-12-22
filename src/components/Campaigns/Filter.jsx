const Filter = ({ filter, setFilter }) => {
  return (
    <div className="flex flex-col sm:flex-row flex-wrap gap-y-4 justify-between items-start md:items-center">
      <input
        type="text"
        placeholder="Search a campaign..."
        className="border-2 border-gray-200 rounded-lg"
        value={filter.search}
        onChange={(e) => setFilter({ ...filter, search: e.target.value })}
      />
      <div className="flex md:flex-row flex-wrap gap-3">
        <div className="flex gap-2 items-center">
          <label htmlFor="platform" className="text-secondaryText text-sm">
            Platform:
          </label>
          <select
            name="platform"
            id="platform"
            value={filter.platform}
            className="border-2 border-gray-200 rounded-lg p-2"
            onChange={(e) => setFilter({ ...filter, platform: e.target.value })}
          >
            <option value="All" className="text-secondaryText">
              All
            </option>
            <option value="Instagram" className="text-secondaryText">
              Instagram
            </option>
            <option value="Facebook" className="text-secondaryText">
              Facebook
            </option>
            <option value="Youtube" className="text-secondaryText">
              Youtube
            </option>
            <option value="Google" className="text-secondaryText">
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
            value={filter.status}
            className="border-2 border-gray-200 rounded-lg p-2"
            onChange={(e) => setFilter({ ...filter, status: e.target.value })}
          >
            <option value="All" className="text-secondaryText">
              All
            </option>
            <option value="Live" className="text-secondaryText">
              Live
            </option>
            <option value="Paused" className="text-secondaryText">
              Paused
            </option>
            <option value="Exhausted" className="text-secondaryText">
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
            <option value="All" className="text-secondaryText">
              All
            </option>
            <option value="7" className="text-secondaryText">
              Last Week
            </option>
            <option value="30" className="text-secondaryText">
              Last 30 days
            </option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default Filter;
