import naimasrecipeImg from "./assets/images/naimas-recipe.jpg";
import multistepformImg from "./assets/images/multi-step-form.png";
import ecommerceImg from "./assets/images/e-commerce.png";
import cofferoasterImg from "./assets/images/coffee-roaster-site.jpg";
// import restcountriesImg from "./assets/images/rest-countries.png";

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
    img: naimasrecipeImg,
    title: "naimas recipe",
    description: "Naimas Recipe, your culinary destination for mouthwatering recipes, cooking inspiration, and kitchen adventures",
    stack: ["next.js", "react", "tailwind", "redux toolkit"],
    live: "https://naimas-recipe.michaeltabilin.dev/",
    repo: "https://github.com/sktt1faker02/Naimas-Recipe",
  },

  {
    id: 2,
    img: cofferoasterImg,
    title: "coffeeroaster subscription site",
    description: "Discover a world of premium coffee with our subscription service. Enjoy hand-roasted beans from around the globe, delivered fresh to your door.",
    stack: ["react", "react-router", "scss"],
    live: "https://coffeeroasters-subscription-site.michaeltabilin.dev/",
    repo: "https://github.com/sktt1faker02/coffeeroasters-subscription-site",
  },

  {
    id: 3,
    img: multistepformImg,
    title: "multi step form",
    description: "In this component, users complete each step of the sequence. Users can go back to a previous step to update their selections and also view a summary of their selections on the final step before confirming their order.",
    stack: ["html", "css", "javascript", "react", "scss"],
    live: "https://sktt1faker02-multi-step-form.vercel.app/",
    repo: "https://github.com/sktt1faker02/multi-step-form",
  },
  {
    id: 4,
    img: ecommerceImg,
    title: "e-commerce product page",
    description: "A product page where users can view the product in a lightbox gallery, switch the large product image by clicking on the small thumbnail images, add items to the cart, view the cart, and remove items from it.",
    stack: ["html", "css", "javascript", "react", "tailwind"],
    live: "https://sktt1faker02-ecommerce-product-page.vercel.app/",
    repo: "https://github.com/sktt1faker02/Ecommerce-Product-Page",
  },
];
