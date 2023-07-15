import PriceCard from "../PriceCard/PriceCards";
import "./Plans.css";

const plans = [
  {
    planName: "free",
    price: "0",
    available: [
      {
        highlighted: "",
        normal: "Single User",
      },
      {
        highlighted: "",
        normal: "5GB Storage",
      },
      {
        highlighted: "",
        normal: "Unlimited Public Projects",
      },
      {
        highlighted: "",
        normal: "Community Access",
      },
    ],
    notAvailable: [
      "Unlimited Private Projects",
      "Dedicated Phone Support",
      "Free SubDomain",
      "Monthly Status Reports",
    ],
  },

  {
    planName: "plus",
    price: "9",
    available: [
      {
        highlighted: "5 Users",
        normal: "",
      },
      {
        highlighted: "",
        normal: "50GB Storage",
      },
      {
        highlighted: "",
        normal: "Unlimited Public Projects",
      },
      {
        highlighted: "",
        normal: "Community Access",
      },
      {
        highlighted: "",
        normal: "Unlimited Private Projects",
      },
      {
        highlighted: "",
        normal: "Dedicated Phone Support",
      },
      {
        highlighted: "",
        normal: "Free SubDomain",
      },
    ],
    notAvailable: ["Monthly Status Reports"],
  },
  {
    planName: "pro",
    price: "49",
    available: [
      {
        highlighted: "Unlimited Users",
        normal: "",
      },
      {
        highlighted: "",
        normal: "150GB Storage",
      },
      {
        highlighted: "",
        normal: "Unlimited Public Projects",
      },
      {
        highlighted: "",
        normal: "Community Access",
      },
      {
        highlighted: "",
        normal: "Unlimited Private Projects",
      },
      {
        highlighted: "",
        normal: "Dedicated Phone Support",
      },
      {
        highlighted: "Unlimited",
        normal: "Free SubDomain",
      },
      {
        highlighted: "",
        normal: "Monthly Status Reports",
      }
    ],
    notAvailable:[],
  }
];

const Plans = () => {
  return (
    <div className="container">
      {
      plans.map((plan, index) => {
        return <PriceCard plan={plan} key={index} />;
      })}
      {/* <PriceCard plan ={plan} /> */}
    </div>
  );
};

export default Plans;
