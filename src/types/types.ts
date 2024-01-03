// defining types for the app here
export type Campaign = {
  id: number;
  on_off: boolean;
  title: string;
  type: string;
  createdAt: string;
  startDate: string | number;
  endDate: string | number;
  clicks: number;
  budget: number;
  location: string;
  platform: {
    title: string;
    img: string;
  };
  status: string;
  img: string;
  postId: string | number;
  caption: string;
};

export type InitiatStateType = {
  campaignData: Campaign[];
  newCampaign: Campaign;
};

export type EditDataType = {
  id: number;
  active: boolean;
  title: string;
  location: string;
};

export type CampaignTypesType = {
  id: number;
  title: string;
  platform: {
    title: string;
    img: string;
  };
  desc: string;
  icon: string;
};

export type CampaignPostType = {
  id: number;
  title: string;
  caption: string;
  img: string;
};

export type ProductType = {
  id: number;
  title: string;
  price: number;
  desc: string;
  img: string;
};

export type CardDataType = {
  id: number;
  title: string;
  name?: string;
  price?: number;
  desc?: string;
  caption?: string;
  img?: string;
  platform?: {
    title: string;
    img: string;
  };
  icon?: string;
};

export type FilterType = {
  search: string;
  platform: string;
  status: string;
};
