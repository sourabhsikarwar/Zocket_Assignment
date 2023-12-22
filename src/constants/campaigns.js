import google from "../assets/images/google.png";
import facebook from "../assets/images/facebook.png";
import instagram from "../assets/images/instagram.png";
import youtube from "../assets/images/youtube.png";
import cam1 from "../assets/images/cam1.jpg";
import cam2 from "../assets/images/cam2.jpg";

// Already defind mock data for campaigns 
export const campaigns = [
  {
    id: 1,
    title: "Chocolate Cake",
    type: "Increase Page followers",
    on_off: true,
    createdAt: "2021-05-01",
    startDate: "2021-05-01",
    endDate: "2021-05-31",
    clicks: 100,
    budget: 1000,
    location: "Chennai",
    platform: {
      title: "Google",
      img: google,
    },
    status: "Live",
    img: cam1,
    postId: 1,
    caption: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    id: 2,
    on_off: false,
    title: "Choco Truffle Cake",
    type: "Get Leads as Facebook messages",
    createdAt: "2021-05-01",
    startDate: "2021-05-01",
    endDate: "2021-05-31",
    clicks: 100,
    budget: 1000,
    location: "Chennai",
    platform: {
      title: "Facebook",
      img: facebook,
    },
    status: "Live",
    img: cam2,
    postId: 2,
    caption: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    id: 3,
    on_off: false,
    title: "Black Forest Cake",
    type: "Get Leads as Facebook messages",
    createdAt: "2021-05-01",
    startDate: "2021-05-01",
    endDate: "2021-05-31",
    clicks: 100,
    budget: 1000,
    location: "Chennai",
    platform: {
      title: "Instagram",
      img: instagram,
    },
    status: "Paused",
    img: cam1,
    postId: 3,
    caption: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    id: 4,
    on_off: false,
    title: "Black Velvet Cake",
    type: "Get Leads as Facebook messages",
    createdAt: "2021-05-01",
    startDate: "2021-05-01",
    endDate: "2021-05-31",
    clicks: 100,
    budget: 1000,
    location: "Chennai",
    platform: {
      title: "Youtube",
      img: youtube,
    },
    status: "Exhausted",
    img: cam2,
    postId: 4,
    caption: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
];
