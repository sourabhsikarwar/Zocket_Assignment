import { useContext } from "react";
import CampaignContext from "../../contexts/campaignContext";
import { CardDataType } from "../../types/types";

const Card = ({ cardData, type }: { cardData: CardDataType; type: string }) => {
  const { data, dispatch } = useContext(CampaignContext);
  switch (type) {
    case "Campaign-Card":
      return (
        <label
          key={cardData.id}
          className={`relative flex gap-4 items-center justify-start border-2 rounded-xl p-6 cursor-pointer ${
            data.newCampaign.type === cardData.title
              ? "border-blue-600"
              : "border-gray-200"
          }`}
        >
          <div
            className={`flex justify-center items-center w-6 h-6 text-white text-sm bg-blue-500 rounded-full absolute -top-2 -right-2 ${
              data.newCampaign.type === cardData.title ? "block" : "hidden"
            }`}
          >
            &#10003;
          </div>
          <input
            className="hidden"
            value={cardData.title}
            type="radio"
            name="cardData-type"
            id={cardData.id.toString()}
            onClick={() =>
              dispatch({
                type: "SET_STEP_1_DATA",
                payload: {
                  type: cardData.title,
                  platform: cardData.platform,
                },
              })
            }
          />
          <img src={cardData.icon} alt={cardData.name} className="w-6" />
          <div>
            <h1 className="text-md md:text-lg font-semibold text-primaryText">
              {cardData.title}
            </h1>
            <p className="text-xs md:text-sm text-secondaryText">
              {cardData.desc}
            </p>
          </div>
        </label>
      );
    case "Product-Card":
      return (
        <label
          key={cardData.id}
          className={`relative flex gap-4 items-center justify-start border-2 rounded-xl p-4 cursor-pointer ${
            data.newCampaign.title === cardData.title
              ? "border-blue-600"
              : "border-gray-200"
          }`}
        >
          <div
            className={`flex justify-center items-center w-6 h-6 text-white text-sm bg-blue-500 rounded-full absolute -top-2 -right-2 ${
              data.newCampaign.title === cardData.title ? "block" : "hidden"
            }`}
          >
            &#10003;
          </div>
          <input
            className="hidden"
            value={cardData.title}
            type="radio"
            name="cardData-type"
            id={cardData.id.toString()}
            onClick={() =>
              dispatch({
                type: "SET_STEP_2_DATA",
                payload: {
                  title: cardData.title,
                  img: cardData.img,
                },
              })
            }
          />
          <img
            src={cardData.img}
            alt={cardData.title}
            className="w-20 rounded-lg"
          />
          <div>
            <h1 className="text-md md:text-lg font-semibold text-primaryText">
              {cardData.title}
            </h1>
            <p className="text-xs md:text-sm text-secondaryText">
              Rs. {cardData.price}
            </p>
          </div>
        </label>
      );
    case "Post-Card":
      return (
        <label
          key={cardData.id}
          className={`relative flex gap-4 items-center justify-start border-2 rounded-xl p-4 cursor-pointer ${
            data.newCampaign.postId === cardData.id
              ? "border-blue-600"
              : "border-gray-200"
          }`}
        >
          <div
            className={`flex justify-center items-center w-6 h-6 text-white text-sm bg-blue-500 rounded-full absolute -top-2 -right-2 ${
              data.newCampaign.postId === cardData.id ? "block" : "hidden"
            }`}
          >
            &#10003;
          </div>
          <input
            className="hidden"
            value={cardData.title}
            type="radio"
            name="cardData-type"
            id={cardData.id.toString()}
            onClick={() =>
              dispatch({
                type: "SET_STEP_4_DATA",
                payload: {
                  postId: cardData.id,
                  caption: cardData.caption,
                },
              })
            }
          />
          <div className="flex flex-col gap-3 items-start">
            <div className="flex gap-2 items-center">
              <img
                src={cardData.img}
                alt={cardData.title}
                className="w-8 rounded-full h-8"
              />
              <div>
                <p className="text-sm text-primaryText font-semibold">
                  Sourabh Cake Shop
                </p>
                <p className="text-xs text-secondaryText font-light">
                  Sponsored
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-3">
              <p>{cardData.caption}</p>
              <img src={cardData.img} alt="img" />
              <div className="flex justify-center gap-3">
                <button className="bg-blue-100 hover:bg-blue-200 rounded-lg w-full p-2 text-blue-600 font-semibold">
                  Change Image
                </button>
                <button className="bg-blue-100 hover:bg-blue-200 rounded-lg w-full p-2 text-blue-600 font-semibold">
                  Edit Text
                </button>
              </div>
            </div>
          </div>
        </label>
      );
    default:
      break;
  }
};

export default Card;
