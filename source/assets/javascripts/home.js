import "./components/tippy";
import typeText from "./components/typed";

// Browser type effect
const browserTypeOptions = {
  strings: ["middleman init -T gabrielecanepa/middleman-webpack"],
  typeSpeed: 40
};
typeText(".browser-code .content", browserTypeOptions);
