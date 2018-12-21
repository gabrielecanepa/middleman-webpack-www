import "./components/tippy";
import typeText from "./components/typed";

// Allow :active styles
document.addEventListener("touchstart", () => {}, true);

const browserTypeOptions = {
  strings: ["middleman init -T gabrielecanepa/middleman-webpack"],
  typeSpeed: 40
};
typeText(".browser-code .content", browserTypeOptions);
