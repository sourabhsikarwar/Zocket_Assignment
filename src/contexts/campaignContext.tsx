import { createContext, useReducer } from "react";
import { campaigns } from "../constants/campaigns";
import { Campaign, InitiatStateType } from "../types/types";

export const CampaignContext = createContext(
  {} as {
    data: any;
    dispatch: React.Dispatch<any>;
  }
);

const initialState: InitiatStateType = {
  campaignData: campaigns,
  newCampaign: {
    id: Math.floor(Math.random() * 1000) * 10,
    on_off: true,
    title: "",
    type: "",
    createdAt: new Date().toLocaleDateString(),
    startDate: new Date().getDate(),
    endDate: new Date().getDate() + 30,
    clicks: 0,
    budget: 0,
    location: "",
    platform: {
      title: "",
      img: "",
    },
    status: "Live",
    img: "",
    postId: "",
    caption: "",
  },
};

const campaignReducer = (
  state: InitiatStateType,
  action: { type: string; payload: any }
) => {
  switch (action.type) {
    case "SET_CAMPAIGN":
      return { ...state, campaignData: action.payload };
    case "DELETE_CAMPAIGN":
      return {
        ...state,
        campaignData: state.campaignData.filter(
          (campaign: Campaign) => campaign.id !== action.payload
        ),
      };
    case "TOGGLE_STATUS":
      return {
        ...state,
        campaignData: state.campaignData.map((campaign) =>
          campaign.id === action.payload
            ? {
                ...campaign,
                on_off: !campaign.on_off,
                status: campaign.on_off ? "Paused" : "Live",
              }
            : campaign
        ),
      };
    case "SET_STEP_1_DATA":
      return {
        ...state,
        newCampaign: {
          ...state.newCampaign,
          type: action.payload.type,
          platform: action.payload.platform,
        },
      };
    case "SET_STEP_3_DATA":
      if (action.payload.type === "Budget") {
        return {
          ...state,
          newCampaign: {
            ...state.newCampaign,
            budget: action.payload.budget,
          },
        };
      } else if (action.payload.type === "Location") {
        return {
          ...state,
          newCampaign: {
            ...state.newCampaign,
            location: action.payload.location,
          },
        };
      } else if (action.payload.type === "StartDate") {
        return {
          ...state,
          newCampaign: {
            ...state.newCampaign,
            startDate: action.payload.startDate,
          },
        };
      } else if (action.payload.type === "EndDate") {
        return {
          ...state,
          newCampaign: {
            ...state.newCampaign,
            endDate: action.payload.endDate,
          },
        };
      } else {
        return state;
      }
    case "SET_STEP_2_DATA":
      return {
        ...state,
        newCampaign: {
          ...state.newCampaign,
          title: action.payload.title,
          img: action.payload.img,
        },
      };
    case "SET_STEP_4_DATA":
      return {
        ...state,
        newCampaign: {
          ...state.newCampaign,
          postId: action.payload.postId,
          caption: action.payload.caption,
        },
      };
    case "ADD_CAMPAIGN":
      return {
        ...state,
        campaignData: [...state.campaignData, state.newCampaign],
        newCampaign: {
          id: Math.floor(Math.random() * 1000) * 10,
          on_off: true,
          title: "",
          type: "",
          createdAt: new Date().toLocaleDateString(),
          startDate: new Date().getDate(),
          endDate: new Date().getDate() + 30,
          clicks: 0,
          budget: 0,
          location: "",
          platform: {
            title: "",
            img: "",
          },
          status: "Live",
          img: "",
          postId: "",
          caption: "",
        },
      };
    case "FILTER_CAMPAIGNS":
      return {
        ...state,
        campaignData: state.campaignData.filter((campaign) => {
          if (
            action.payload.search === "" &&
            action.payload.platform === "All" &&
            action.payload.status === "All"
          ) {
            return campaign;
          } else {
            return (
              campaign.title
                .toLowerCase()
                .includes(action.payload.search.toLowerCase()) &&
              (campaign.platform.title
                .toLowerCase()
                .includes(action.payload.platform.toLowerCase()) ||
                action.payload.platform === "All") &&
              (campaign.status
                .toLowerCase()
                .includes(action.payload.status.toLowerCase()) ||
                action.payload.status === "All")
            );
          }
        }),
      };
    case "EDIT_CAMPAIGN":
      return {
        ...state,
        campaignData: state.campaignData.map((campaign) =>
          campaign.id === action.payload.id
            ? {
                ...campaign,
                title: action.payload.title,
                location: action.payload.location,
              }
            : campaign
        ),
      };
    default:
      return state;
  }
};

export const CampaignProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [state, dispatch] = useReducer(campaignReducer, initialState);

  return (
    <CampaignContext.Provider value={{ data: state, dispatch }}>
      {children}
    </CampaignContext.Provider>
  );
};

export default CampaignContext;
