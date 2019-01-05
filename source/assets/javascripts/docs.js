import { buildSidebarMenu, highlightSidebar } from "./components/sidebar";
import zoom from "./components/zoom";

// Allow :active styles
document.addEventListener("touchstart", () => {}, true);

// Build sidebar and highlight current section title
const sidebar = document.querySelector(".sidebar");
const sidebarHeadings = document.querySelectorAll("h2, h3");

buildSidebarMenu(sidebar, sidebarHeadings);

window.addEventListener("scroll", () => {
  highlightSidebar(sidebar, sidebarHeadings);
});

// Open links in a new tab, except for the local ones
document.querySelectorAll(".about a").forEach((a) => {
  if (!a.href.includes(window.location.hostname)) {
    a.setAttribute("target", "_blank");
  }
});

// Don't decorate links around code
document.querySelectorAll("a code").forEach((code) => {
  const link = code.parentElement;

  link.style.textDecoration = "none";
});

// Remove margin and line-height from paragraphs around screen pictures
document.querySelectorAll(".about img[src*=\"screen\"]").forEach((img) => {
  const paragraphStyle = img.parentElement.style;

  paragraphStyle.margin = 0;
  paragraphStyle.lineHeight = 0;
});

// Zoom screen pictures
document.querySelectorAll(".about img[src*=\"screen\"]").forEach((img) => {
  const zoomImage = zoom({
    bgColor: "#FBC547",
    scaleExtra: 1
  });

  zoomImage.listen(img);
});
