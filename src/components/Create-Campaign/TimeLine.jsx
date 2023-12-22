const TimeLine = ({ step }) => {
  return (
    <div className="">
      <div className="w-full py-8">
        <div className="flex">
          
          {/* step 1 of 4 */}
          <div className="w-1/4">
            <div className="relative mb-2">
              <div className="w-10 h-10 mx-auto rounded-full text-lg text-white flex items-center bg-green-400">
                <span className="text-center text-white w-full">1</span>
              </div>
            </div>

            <div className="text-xs text-center md:text-sm font-semibold text-gray800">
              What you want to do?
            </div>
          </div>

          {/* step 2 of 4 */}
          <div className="w-1/4">
            <div className="relative mb-2">
              <div
                className="absolute flex align-center items-center align-middle content-center"
                style={{
                  width: "calc(100% - 2.5rem - 1rem)",
                  top: "50%",
                  transform: "translate(-50%, -50%)",
                }}
              >
                <div className="w-full bg-gray-200 rounded items-center align-middle align-center flex-1">
                  <div
                    className="w-0 bg-green-300 rounded"
                    style={{
                      width: `${step > 1 ? "100%" : "0%"}`,
                      padding: "2px 0",
                    }}
                  ></div>
                </div>
              </div>

              <div
                className={`w-10 h-10 mx-auto rounded-full text-lg flex items-center ${
                  step > 1
                    ? "bg-green-400"
                    : "bg-white border-2 border-gray-200"
                }`}
              >
                <span
                  className={`text-center w-full ${
                    step > 1 ? "text-white" : "text-gray-600"
                  }`}
                >
                  2
                </span>
              </div>
            </div>

            <div
              className={`text-xs text-center md:text-sm font-semibold ${
                step > 1 ? "text-gray800" : "text-gray500"
              }`}
            >
              Choose product
            </div>
          </div>

          {/* step 3 of 4 */}
          <div className="w-1/4">
            <div className="relative mb-2">
              <div
                className="absolute flex align-center items-center align-middle content-center"
                style={{
                  width: "calc(100% - 2.5rem - 1rem)",
                  top: "50%",
                  transform: "translate(-50%, -50%)",
                }}
              >
                <div className="w-full bg-gray-200 rounded items-center align-middle align-center flex-1">
                  <div
                    className="w-0 bg-green-300 rounded"
                    style={{
                      width: `${step > 2 ? "100%" : "0%"}`,
                      padding: "2px 0",
                    }}
                  ></div>
                </div>
              </div>

              <div
                className={`w-10 h-10 mx-auto rounded-full text-lg flex items-center ${
                  step > 2
                    ? "bg-green-400"
                    : "bg-white border-2 border-gray-200"
                }`}
              >
                <span
                  className={`text-center w-full ${
                    step > 2 ? "text-white" : "text-gray-600"
                  }`}
                >
                  3
                </span>
              </div>
              
            </div>
            <div
              className={`text-xs text-center md:text-sm font-semibold ${
                step > 2 ? "text-gray800" : "text-gray500"
              }`}
            >
              Campaign Settings
            </div>
          </div>

          {/* step 4 of 4 */}
          <div className="w-1/4">
            <div className="relative mb-2">
              <div
                className="absolute flex align-center items-center align-middle content-center"
                style={{
                  width: "calc(100% - 2.5rem - 1rem)",
                  top: "50%",
                  transform: "translate(-50%, -50%)",
                }}
              >
                <div className="w-full bg-gray-200 rounded items-center align-middle align-center flex-1">
                  <div
                    className="w-0 bg-green-300 rounded"
                    style={{
                      width: `${step > 3 ? "100%" : "0%"}`,
                      padding: "2px 0",
                    }}
                  ></div>
                </div>
              </div>

              <div
                className={`w-10 h-10 mx-auto rounded-full text-lg flex items-center ${
                  step > 3
                    ? "bg-green-400"
                    : "bg-white border-2 border-gray-200"
                }`}
              >
                <span
                  className={`text-center w-full ${
                    step > 3 ? "text-white" : "text-gray-600"
                  }`}
                >
                  4
                </span>
              </div>
              <div
                className="absolute flex align-center items-center align-middle content-center"
                style={{
                  width: "calc(50% - 2.5rem - 1rem)",
                  top: "50%",
                  transform: "translate(160%, -50%)",
                }}
              >
              </div>
            </div>
            <div
              className={`text-xs text-center md:text-sm font-semibold ${
                step > 3 ? "text-gray800" : "text-gray500"
              }`}
            >
              Ready to go!
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TimeLine;
