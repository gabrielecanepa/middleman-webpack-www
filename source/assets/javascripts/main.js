import "./components/tooltip";
import "./components/avatar";

// Allow :active styles
document.addEventListener("touchstart", () => {}, true);

// Open local links in current tab and remove file extension from urls
const allLinks = document.querySelectorAll("a");
const hostName = window.location.hostname;

if (!hostName.includes("localhost")) { // production
  allLinks.forEach((link) => {
    if (link.href.includes(hostName)) { // local urls
      link.removeAttribute("target");
      link.setAttribute("href", link.href.replace(".html", ""));
    } else {
      link.setAttribute("target", "_blank"); // needed for docs
    }
  });
}
