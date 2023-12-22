import { campaignPosts, campaignTypes, products } from "../../constants";
import Card from "./Card";
import Budget from "./Budget";

const Cards = ({ step }) => {
  switch (step) {
    case 1:
      return (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 grid-cols-1 gap-6 mt-4">
          {campaignTypes.map((campaign) => (
            <Card cardData={campaign} type="Campaign-Card" key={campaign.id} />
          ))}
        </div>
      );
    case 2:
      return (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 grid-cols-1 gap-4 mt-4">
          {products.map((product) => (
            <Card cardData={product} key={product.id} type="Product-Card" />
          ))}
        </div>
      );
    case 3:
      return <Budget type="Budget" />;
    case 4:
      return (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 grid-cols-1 gap-4 mt-4">
          {campaignPosts.map((post) => (
            <Card cardData={post} type="Post-Card" key={post.id} />
          ))}
        </div>
      );
    default:
      break;
  }
};

export default Cards;
