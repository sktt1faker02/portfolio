import multistepformImg from "./assets/images/multi-step-form.png";
import ecommerceImg from "./assets/images/e-commerce.png";
import cofferoasterImg from "./assets/images/coffee-roaster-site.png";
import restcountriesImg from "./assets/images/rest-countries.png";

export const links = [
  {
    id: 1,
    label: "home",
  },
  {
    id: 2,
    label: "about",
  },
  {
    id: 3,
    label: "projects",
  },
  {
    id: 4,
    label: "contact",
  },
];

export const projects = [
  {
    id: 1,
    img: cofferoasterImg,
    title: "coffeeroaster subscription site",
    description: "Discover a world of premium coffee with our subscription service. Enjoy hand-roasted beans from around the globe, delivered fresh to your door.",
    stack: ["react", "react-router", "scss"],
    live: "https://coffeeroasters-subscription-site.michaeltabilin.dev/",
    repo: "https://github.com/sktt1faker02/coffeeroasters-subscription-site",
  },

  {
    id: 2,
    img: multistepformImg,
    title: "multi step form",
    description: "In this component, users complete each step of the sequence. Users can go back to a previous step to update their selections and also view a summary of their selections on the final step before confirming their order.",
    stack: ["html", "css", "javascript", "react", "scss"],
    live: "https://sktt1faker02-multi-step-form.vercel.app/",
    repo: "https://github.com/sktt1faker02/multi-step-form",
  },
  {
    id: 3,
    img: ecommerceImg,
    title: "e-commerce product page",
    description: "A product page where users can view the product in a lightbox gallery, switch the large product image by clicking on the small thumbnail images, add items to the cart, view the cart, and remove items from it.",
    stack: ["html", "css", "javascript", "react", "tailwind"],
    live: "https://sktt1faker02-ecommerce-product-page.vercel.app/",
    repo: "https://github.com/sktt1faker02/Ecommerce-Product-Page",
  },
  {
    id: 4,
    img: restcountriesImg,
    title: "REST countries",
    description: "In this project, users can view all countries, filter them by region, and access detailed information about each country.",
    stack: ["html", "css", "javascript", "api"],
    live: "https://sktt1faker-rest-countries-api.netlify.app/",
    repo: "https://github.com/sktt1faker02/Frontend-Mentor-Projects/tree/master/rest-countries-api-with-color-theme-switcher-master",
  },
];
