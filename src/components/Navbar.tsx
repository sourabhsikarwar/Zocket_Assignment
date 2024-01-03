import bell from "../assets/images/bell.png";

const Navbar = () => {
  return (
    <nav className="fixed top-0 z-30 w-full md:pl-24 pl-0 bg-white border-b-2 border-gray-200">
      <div className="px-3 py-3 lg:px-5 lg:pl-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center justify-start rtl:justify-end">
            <button
              data-drawer-target="logo-sidebar"
              data-drawer-toggle="logo-sidebar"
              aria-controls="logo-sidebar"
              type="button"
              className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            >
              <span className="sr-only">Open sidebar</span>
              <svg
                className="w-6 h-6"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  clipRule="evenodd"
                  fillRule="evenodd"
                  d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
                ></path>
              </svg>
            </button>
          </div>
          <div className="flex items-center">
            <div className="flex items-center ms-3">
              <div className="flex justify-center items-center gap-4">
                <p className="text-xs text-secondaryText">
                  Free Trial ends in 2 Days
                </p>
                <button className="bg-yellow-100 rounded-lg py-2 px-4 text-orange-500 font-bold text-sm">
                  Buy Premium
                </button>
                <img src={bell} alt="bell" className="w-5 cursor-pointer" />
                <button
                  type="button"
                  className="flex items-center justify-center gap-2 text-sm rounded-full"
                  aria-expanded="false"
                  data-dropdown-toggle="dropdown-user"
                >
                  <span className="sr-only">Open user menu</span>
                  <img
                    className="w-8 h-8 rounded-full"
                    src="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
                    alt="user photo"
                  />
                  <div className="text-sm font-medium text-gray-700">
                    Sourabhs Cake Shop
                  </div>
                </button>
              </div>
              <div
                className="z-50 hidden my-4 text-base list-none bg-white divide-y divide-gray-100 rounded shadow dark:divide-gray-600"
                id="dropdown-user"
              >
                <div className="px-4 py-3" role="none">
                  <p className="text-sm text-gray-600" role="none">
                    Sourabh Sikarwar
                  </p>
                  <p
                    className="text-sm font-medium text-gray-800 truncate"
                    role="none"
                  >
                    sourabh@gmail.com
                  </p>
                </div>
                <ul className="py-1" role="none">
                  <li>
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm text-gray-600 hover:bg-gray-100"
                      role="menuitem"
                    >
                      Dashboard
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm text-gray-600 hover:bg-gray-100"
                      role="menuitem"
                    >
                      Settings
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm text-gray-600 hover:bg-gray-100"
                      role="menuitem"
                    >
                      Earnings
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm text-gray-600 hover:bg-gray-100"
                      role="menuitem"
                    >
                      Sign out
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
