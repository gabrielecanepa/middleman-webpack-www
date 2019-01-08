import "./components/tippy";
import typeText from "./components/typed";

// Allow :active styles
document.addEventListener("touchstart", () => {}, true);

// Browser type effect
const browserTypeOptions = {
  strings: ["middleman init -T gabrielecanepa/middleman-webpack"],
  typeSpeed: 40
};
typeText(".browser-code .content", browserTypeOptions);

// Open local links in current tab
document.querySelectorAll("a").forEach((a) => {
  if (a.href.includes(window.location.hostname)) {
    a.removeAttribute("target");
  }
});
